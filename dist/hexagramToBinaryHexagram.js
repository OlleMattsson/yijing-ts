"use strict";
// Convert a seqauence of lines to a binary sequence of broken and unbroken lines
// Array[Line] => Array[Bool]
Object.defineProperty(exports, "__esModule", { value: true });
exports.hexagramToBinaryHexagram = void 0;
// (6) [5, 13, 13, 14, 2, 13] => [1, 0, 0, 0, 1, 0]
function hexagramToBinaryHexagram(h) {
    let res = new Array(6);
    for (var i = 0, l = h.length; i < l; i++) {
        switch (h[i]) {
            // -- --
            case 0:
            case 9:
            case 10:
            case 11:
            case 12:
            case 13:
            case 14:
            case 15:
                res[i] = 1;
                break;
            // -----
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
            case 1:
            case 2:
            case 3:
                res[i] = 0;
                break;
            default:
                break;
        }
    }
    return res;
}
exports.hexagramToBinaryHexagram = hexagramToBinaryHexagram;
