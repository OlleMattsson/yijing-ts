// Convert a hexagram's binary sequence to its corresponding value in the king wen sequence
// eg. [0,0,0,0,1,1] -> 20

import { BinaryHexagram } from "../types";
import { YiJing } from "../index";

export const binaryToKingWen = (
  hexagram: BinaryHexagram = [0, 0, 0, 0, 0, 0]
): number => {
  return YiJing.kingWenSequence[YiJing.binaryToFuxi(hexagram)];
};
