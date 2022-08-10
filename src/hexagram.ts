import {
  TrueHexagram,
  BinaryHexagram,
  uint8,
  CoinToss,
  NormalizedCoinToss,
  Line
} from "../types";
import { RNG, Provider } from "../../rng";
import { YiJing } from "../";

export interface HexagramInterface {
  make(): Promise<void>;
  makeFuture(): Promise<void>;
  get({ binary }: { binary?: boolean }): TrueHexagram | BinaryHexagram;
  getFuture({ binary }: { binary?: boolean }): TrueHexagram | BinaryHexagram;
  getChanges(): boolean[];
  getRandomNumbers(): uint8[] | null;
  getProvider(): Provider;
}

export class Hexagram implements HexagramInterface {
  private randomNumbers: uint8[] | null;
  private hexagram: TrueHexagram | null;
  private futureHexagram: TrueHexagram | null;
  private rngProvider: Provider;

  constructor({ provider = Provider.MathRand }: { provider?: Provider } = {}) {
    this.randomNumbers = null;
    this.hexagram = null;
    this.futureHexagram = null;
    this.rngProvider = provider;
  }

  async make(): Promise<void> {
    const rng = new RNG({ provider: this.rngProvider });

    // optimization: fetch a larger batch of random numbers
    // 4 numbers are needed per line, 6 lines are needed for the hexagram,
    // ie 24 random numbers in total
    this.randomNumbers = (await rng.get({ count: 24 })) as uint8[];
    const hexagram: TrueHexagram = new Array(6) as TrueHexagram;

    for (var i = 0; i < 6; i++) {
      const coins: CoinToss = this.randomNumbers.slice(
        i * 4,
        i * 4 + 4
      ) as CoinToss; // pick next 4 numbers from our set of 24

      const normalizedCoins: NormalizedCoinToss = YiJing.normalizeFourUintNumbers(
        coins
      );
      hexagram[i] = YiJing.makeLine(normalizedCoins);
    }

    this.hexagram = hexagram;
  }

  async makeFuture() {
    const { hexagram } = this;

    if (hexagram === null) {
      throw "make() must be called at least once before makeFuture()";
    }

    const futureHexagram: TrueHexagram = new Array(6) as TrueHexagram;

    for (var i = hexagram.length - 1; i >= 0; i--) {
      switch (hexagram[i]) {
        // changing yin
        case 0:
          futureHexagram[i] = 4; // becomes yang
          break;
        // changing yang
        case 1:
        case 2:
        case 3:
          futureHexagram[i] = 9; // becomes yin
          break;

        default:
          futureHexagram[i] = hexagram[i];
          break;
      }
    }
    this.futureHexagram = futureHexagram;
  }

  get({ binary = false } = {}): TrueHexagram {
    if (this.hexagram === null) {
      throw "no hexgram exists, call make() first ";
    }

    if (binary) {
      return YiJing.hexagramToBinaryHexagram(this.hexagram);
    }

    return this.hexagram;
  }

  getFuture({ binary = false } = {}): TrueHexagram {
    if (this.futureHexagram === null) {
      throw "no future hexagram exists, call makeFuture() first ";
    }

    if (binary) {
      return YiJing.hexagramToBinaryHexagram(this.futureHexagram);
    }

    return this.futureHexagram;
  }

  getChanges(): boolean[] {
    if (this.hexagram === null || this.futureHexagram === null) {
      throw "make() and makeFuture() must be called at least once before getChanges()";
    }

    return this.hexagram.map((hexagramLine: Line, i) => {
      const futureLine: Line = this.futureHexagram?.[i] as Line;
      if (hexagramLine === futureLine) {
        return false;
      } else {
        return true;
      }
    });
  }

  getRandomNumbers(): uint8[] | null {
    return this.randomNumbers;
  }

  getProvider(): Provider {
    return this.rngProvider;
  }
}
