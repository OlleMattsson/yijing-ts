// Make one of the hexagrams line with four random coin tosses from RNQG
// Array[Number] => Number

import {
  uint8,
  Binary,
  NormalizedCoinToss,
  Line,
  FourUint8Numbers
} from "../types";

// normalize uint8 integer (0-255) to 0 (tails) or 1 (heads)
function normalize(n: uint8): Binary {
  return Math.round(n / 255) as Binary;
}

// normalize a tuple of 4 uint8 integers
export function normalizeFourUintNumbers(
  arr: FourUint8Numbers
): NormalizedCoinToss {
  var normalized: NormalizedCoinToss = new Array(4) as NormalizedCoinToss;

  for (var i = 0, l = arr.length; i < l; i++) {
    normalized[i] = normalize(arr[i]);
  }

  return normalized;
}

// make a line
export function makeLine(arr: NormalizedCoinToss): Line {
  return parseInt(arr.join(""), 2) as Line;
}
