"use strict";
/*
  Convert a hexagram's fuxi value to it's corresponding binary sequence
  examople: 3 -> [0,0,0,0,1,1]
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.fuxiToBinaryLegacy = exports.fuxiToBinary = void 0;
function evaluateFuxi(f) {
    if (f > 63) {
        throw `fuxi must be 0 - 63, got ${f}`;
    }
}
function fuxiToBinary(f) {
    let hexagramLength = 6, leadingZeroes = [];
    evaluateFuxi(f);
    const binaryAsString = f.toString(2);
    const binaryAsArr = binaryAsString
        .split("")
        .map((e) => parseInt(e, 10));
    for (let i = 0; i < hexagramLength - binaryAsString.length; i++) {
        leadingZeroes.push(0);
    }
    return leadingZeroes.concat(binaryAsArr);
}
exports.fuxiToBinary = fuxiToBinary;
/*
  This is the "legacy" version. It's a little less code but harder
  to read and runs slower than the newer version.
*/
function fuxiToBinaryLegacy(f) {
    let tmpString = "", tempArr = [], length = 6;
    evaluateFuxi(f);
    // this is the dark magic right here
    while (length--) {
        tmpString += (f >> length) & 1;
    }
    tempArr = tmpString.split("");
    return tempArr.map((e) => parseInt(e));
}
exports.fuxiToBinaryLegacy = fuxiToBinaryLegacy;
