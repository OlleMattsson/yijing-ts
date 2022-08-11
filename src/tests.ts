import { YiJing } from ".";
import { BinaryHexagram, Fuxi, CoinToss } from "./types";
import { RNG, Provider } from "rng-ts";

const UnicodeHex1 = "\u4DC0";
const UnicodeHex2 = "\u4DC1";

export async function runYiJingTests() {
  
  console.log(`\n ${UnicodeHex1} YiJing Tests ${UnicodeHex2} \n`);

  console.log(`.: Helper Unit Tests:.`);

  const fuxi: Fuxi = 11;
  const binaryHexagram: BinaryHexagram = [0, 0, 1, 0, 1, 1];
  const rng = new RNG();
  const coins = (await rng.get({ count: 4 })) as CoinToss;

  console.log(`fuxiToBinaryLegacy(${fuxi}): `, YiJing.fuxiToBinaryLegacy(fuxi));

  console.log(`fuxiToBinary(${fuxi}): `, YiJing.fuxiToBinary(fuxi));

  console.log(
    `binaryToFuxi([${binaryHexagram}]): `,
    YiJing.binaryToFuxi(binaryHexagram)
  );

  console.log(
    `binaryToKingWen([${binaryHexagram}])`,
    YiJing.binaryToKingWen(binaryHexagram)
  );

  // make a line the new way
  const normalizedCoins = YiJing.normalizeFourUintNumbers(coins);
  console.log(`normalizeFourUintNumbers(${coins}): ${normalizedCoins}`);

  const line = YiJing.makeLine(normalizedCoins);
  console.log(`makeLine(${normalizedCoins}): ${line}`);

  /* 
    The new Oracle API
  */

  console.log(`\n.: Oracle API Tests :.`);

  const oracle = new YiJing.Oracle(); //{ provider: Provider.AnuQrng });
  await oracle.divinate();
  oracle.makeFuture();

  console.log(`oracle.getProvider()      ${oracle.getProvider()}`);
  console.log(`oracle.getRandomNumbers() ${oracle.getRandomNumbers()}`);
  console.log(`oracle.get():             ${oracle.get()}`);
  console.log(`oracle.getFuture():       ${oracle.getFuture()}`);
  console.log(`oracle.get(binary):       ${oracle.get({ binary: true })}`);
  console.log(`oracle.getFuture(binary): ${oracle.getFuture({ binary: true })}`);
  console.log(`oracle.getChanges():      ${oracle.getChanges()}`);

  /*
    Hexagram API
  */

  console.log(`\n.: Hexagram API :.`);
  console.log(`From Fuxi`);
  const hexagramFromFuxi = new YiJing.Hexagram({fuxi: 5});
  console.log(hexagramFromFuxi.getFuxi());
  console.log(hexagramFromFuxi.getKingwen());
  console.log(hexagramFromFuxi.getLines());
  console.log(hexagramFromFuxi.getBinarySequence());

  console.log(`\nFrom Kingwen`);
  const hexagramFromKingwen = new YiJing.Hexagram({kingwen: 35});
  console.log(hexagramFromKingwen.getFuxi());
  console.log(hexagramFromKingwen.getKingwen());
  console.log(hexagramFromKingwen.getLines());
  console.log(hexagramFromKingwen.getBinarySequence());

  console.log(`\nFrom Binary Sequence`);
  const hexagramFromBinary = new YiJing.Hexagram({binarySequence: [0,0,0,1,0,1]});
  console.log(hexagramFromBinary.getFuxi());
  console.log(hexagramFromBinary.getKingwen());
  console.log(hexagramFromBinary.getLines());
  console.log(hexagramFromBinary.getBinarySequence());

  console.log(`\nFrom Lines`);
  const hexagramFromLines = new YiJing.Hexagram({lines: [4,5,6,9,8,10]});
  console.log(hexagramFromLines.getFuxi());
  console.log(hexagramFromLines.getKingwen());
  console.log(hexagramFromLines.getLines());
  console.log(hexagramFromLines.getBinarySequence());    
}

runYiJingTests()