"use strict";
// Make one of the hexagrams line with four random coin tosses from RNQG
// Array[Number] => Number
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeLine = exports.normalizeFourUintNumbers = void 0;
// normalize uint8 integer (0-255) to 0 (tails) or 1 (heads)
function normalize(n) {
    return Math.round(n / 255);
}
// normalize a tuple of 4 uint8 integers
function normalizeFourUintNumbers(arr) {
    var normalized = new Array(4);
    for (var i = 0, l = arr.length; i < l; i++) {
        normalized[i] = normalize(arr[i]);
    }
    return normalized;
}
exports.normalizeFourUintNumbers = normalizeFourUintNumbers;
// make a line
function makeLine(arr) {
    return parseInt(arr.join(""), 2);
}
exports.makeLine = makeLine;
