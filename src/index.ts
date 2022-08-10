import { fuxiToBinaryLegacy, fuxiToBinary } from "./fuxiToBinary";
import { binaryToFuxi } from "./binaryToFuxi";
import { kingWenSequence } from "./kingWenSequence";
import { binaryToKingWen } from "./binaryToKingWen";
import { normalizeFourUintNumbers, makeLine } from "./makeLine";
import { Hexagram } from "./hexagram";
import { hexagramToBinaryHexagram } from "./hexagramToBinaryHexagram";

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
