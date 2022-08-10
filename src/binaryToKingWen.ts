// Convert a hexagram's binary sequence to its corresponding value in the king wen sequence
// eg. [0,0,0,0,1,1] -> 20

import { BinaryHexagram, Kingwen } from "./types";
import { YiJing } from ".";

export const binaryToKingWen = (
  hexagram: BinaryHexagram = [0, 0, 0, 0, 0, 0]
): Kingwen => {
  return YiJing.kingWenSequence[YiJing.binaryToFuxi(hexagram)] as Kingwen;
};
