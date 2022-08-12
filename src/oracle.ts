import {
  TrueHexagram,
  BinaryHexagram,
  uint8,
  CoinToss,
  NormalizedCoinToss,
  Line
} from "./types";
import { RNG, Provider } from "rng-ts";
import { YiJing } from ".";
import { Hexagram } from "./hexagram";

export interface OracleInterface {
  divinate(): Promise<void>;
  getHexagram({ binary }: { binary?: boolean }): Hexagram;
  getFutureHexagram(): Hexagram;
  getChanges(): boolean[];  
  getRandomNumbers(): uint8[] | null;
  getProvider(): Provider;
}

export class Oracle implements OracleInterface {
  private randomNumbers: uint8[] | null;
  private hexagram: Hexagram | null;
  private futureHexagram: Hexagram | null;
  private changes: boolean[] | null;
  private rngProvider: Provider;

  constructor({ provider = Provider.MathRand }: { provider?: Provider } = {}) {
    this.randomNumbers = null;
    this.hexagram = null;
    this.rngProvider = provider;
  }

  // The divinate function must be called at least once before the getters work.
  // This is because it's an async function and thus can't be a part of the
  // constructor.
  async divinate(): Promise<void> {
    const rng = new RNG({ provider: this.rngProvider });

    // optimization: fetch a larger batch of random numbers
    // 4 numbers are needed per line, 6 lines are needed for the hexagram,
    // ie 24 random numbers in total
    this.randomNumbers = (await rng.get({ count: 24 })) as uint8[];
    const lines: TrueHexagram = new Array(6) as TrueHexagram;

    for (var i = 0; i < 6; i++) {
      const coins: CoinToss = this.randomNumbers.slice(
        i * 4,
        i * 4 + 4
      ) as CoinToss; // pick next 4 numbers from our set of 24

      const normalizedCoins: NormalizedCoinToss = YiJing.normalizeFourUintNumbers(
        coins
      );
      lines[i] = YiJing.makeLine(normalizedCoins);
    }

    this.hexagram = new Hexagram({lines})
    this.futureHexagram = new Hexagram({lines: this.getFutureHexagramLines(lines)})
    this.changes = this.calculateChanges()
  }

  getHexagram({ binary = false } = {}): Hexagram {
    if (this.hexagram === null) {
      throw "no hexgram exists, call divinate() first ";
    }
    return this.hexagram;
  }

  getFutureHexagram(): Hexagram {
    if (this.hexagram === null) {
      throw "no hexgram exists, call divinate() first ";
    }  
    return this.futureHexagram;
  }

  getChanges() : boolean[] {
    if (this.changes === null) {
      throw "no hexgram exists, call divinate() first ";
    }  
    return this.changes;
  }

  getRandomNumbers(): uint8[] | null {
    return this.randomNumbers;
  }

  getProvider(): Provider {
    return this.rngProvider;
  }

  private getFutureHexagramLines(lines): TrueHexagram {
    const futureLines: TrueHexagram = new Array(6) as TrueHexagram;

    for (var i = lines.length - 1; i >= 0; i--) {
      switch (lines[i]) {
        // changing yin
        case 0:
          futureLines[i] = 4; // becomes yang
          break;
        // changing yang
        case 1:
        case 2:
        case 3:
          futureLines[i] = 9; // becomes yin
          break;

        default:
          futureLines[i] = lines[i];
          break;
      }
    }
    
    return futureLines
  }   

  private calculateChanges() : boolean[]{
    if (this.hexagram === null || this.futureHexagram === null) {
      throw "make() and makeFuture() must be called at least once before getChanges()";
      }

      return this.hexagram.getLines().map((hexagramLine: Line, i) => {
      const futureLine: Line = this.futureHexagram.getLines()?.[i] as Line;
      if (hexagramLine === futureLine) {
          return false;
      } else {
          return true;
      }
      });  
  }
}
