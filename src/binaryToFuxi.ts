// Convert a hexagram's binary sequence to it's corresponding fuxi value sequence
// eg. [0,0,0,0,1,1] -> 3

import { BinaryHexagram, Fuxi } from "../types";

export const binaryToFuxi = (hexagram: BinaryHexagram): Fuxi => {
  return parseInt(hexagram.join(""), 2) as Fuxi;
};
