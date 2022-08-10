import { fuxiToBinaryLegacy, fuxiToBinary } from "./src/fuxiToBinary";
import { binaryToFuxi } from "./src/binaryToFuxi";
import { kingWenSequence } from "./src/kingWenSequence";
import { binaryToKingWen } from "./src/binaryToKingWen";
import { normalizeFourUintNumbers, makeLine } from "./src/makeLine";
import { Hexagram } from "./src/hexagram";
import { hexagramToBinaryHexagram } from "./src/hexagramToBinaryHexagram";

export const YiJing = {
  Hexagram,
  hexagramToBinaryHexagram,
  fuxiToBinary,
  fuxiToBinaryLegacy,
  binaryToFuxi,
  kingWenSequence,
  binaryToKingWen,
  normalizeFourUintNumbers,
  makeLine
};
