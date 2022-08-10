/*
  Convert a hexagram's fuxi value to it's corresponding binary sequence
  examople: 3 -> [0,0,0,0,1,1]
*/

import { Fuxi, BinaryHexagram, Binary } from "./types";

function evaluateFuxi(f: Fuxi): void {
  if (f > 63) {
    throw `fuxi must be 0 - 63, got ${f}`;
  }
}

export function fuxiToBinary(f: Fuxi): BinaryHexagram {
  let hexagramLength = 6,
    leadingZeroes: Binary[] = [];

  evaluateFuxi(f);

  const binaryAsString = f.toString(2);

  const binaryAsArr: Binary[] = binaryAsString
    .split("")
    .map((e) => parseInt(e, 10) as Binary);

  for (let i = 0; i < hexagramLength - binaryAsString.length; i++) {
    leadingZeroes.push(0);
  }

  return leadingZeroes.concat(binaryAsArr) as BinaryHexagram;
}

/* 
  This is the "legacy" version. It's a little less code but harder
  to read and runs slower than the newer version.
*/

export function fuxiToBinaryLegacy(f: Fuxi): BinaryHexagram {
  let tmpString = "",
    tempArr = [],
    length = 6;

  evaluateFuxi(f);

  // this is the dark magic right here
  while (length--) {
    tmpString += (f >> length) & 1;
  }

  tempArr = tmpString.split("");

  return tempArr.map((e) => parseInt(e)) as BinaryHexagram;
}
