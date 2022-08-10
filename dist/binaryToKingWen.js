"use strict";
// Convert a hexagram's binary sequence to its corresponding value in the king wen sequence
// eg. [0,0,0,0,1,1] -> 20
Object.defineProperty(exports, "__esModule", { value: true });
exports.binaryToKingWen = void 0;
const _1 = require(".");
const binaryToKingWen = (hexagram = [0, 0, 0, 0, 0, 0]) => {
    return _1.YiJing.kingWenSequence[_1.YiJing.binaryToFuxi(hexagram)];
};
exports.binaryToKingWen = binaryToKingWen;
