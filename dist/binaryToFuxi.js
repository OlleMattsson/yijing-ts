"use strict";
// Convert a hexagram's binary sequence to it's corresponding fuxi value sequence
// eg. [0,0,0,0,1,1] -> 3
Object.defineProperty(exports, "__esModule", { value: true });
exports.binaryToFuxi = void 0;
const binaryToFuxi = (hexagram) => {
    return parseInt(hexagram.join(""), 2);
};
exports.binaryToFuxi = binaryToFuxi;
