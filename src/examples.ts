import { YiJing } from ".";

const UnicodeHex1 = "\u4DC0";
const UnicodeHex2 = "\u4DC1";

export async function runYiJingTests() {
  
  console.log(`\n ${UnicodeHex1} YiJing Tests ${UnicodeHex2} \n`);

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

  /* 
    Oracle API
  */

  console.log(`\n.: Oracle API Tests :.`);

  const oracle = new YiJing.Oracle(); //({ provider: Provider.AnuQrng });
  await oracle.divinate();
  const hexagram = oracle.getHexagram()
  const futureHexagram = oracle.getFutureHexagram()
  const changes = oracle.getChanges()

  console.log(`oracle.getProvider()                            ${oracle.getProvider()}`);
  console.log(`oracle.getRandomNumbers()                       ${oracle.getRandomNumbers()}`);
  console.log(`oracle.getHexagram().getLines():                ${hexagram.getLines()}`);
  console.log(`oracle.getHexagram().getFuxi():                 ${hexagram.getFuxi()}`);
  console.log(`oracle.getHexagram().getKingwen():              ${hexagram.getKingwen()}`);
  console.log(`oracle.getHexagram().getBinarySequence():       ${hexagram.getBinarySequence()}`);
  console.log(`oracle.getFutureHexagram().getLines():          ${futureHexagram.getLines()}`);
  console.log(`oracle.getFutureHexagram().getFuxi():           ${futureHexagram.getFuxi()}`);
  console.log(`oracle.getFutureHexagram().getKingwen():        ${futureHexagram.getKingwen()}`);
  console.log(`oracle.getFutureHexagram().getBinarySequence(): ${futureHexagram.getBinarySequence()}`);
  console.log(`oracle.getChanges():                            ${changes}`);
  


}

runYiJingTests()