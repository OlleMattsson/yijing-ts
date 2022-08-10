import { fuxiToBinaryLegacy, fuxiToBinary } from "./fuxiToBinary";
import { binaryToFuxi } from "./binaryToFuxi";
import { kingWenSequence } from "./kingWenSequence";
import { binaryToKingWen } from "./binaryToKingWen";
import { normalizeFourUintNumbers, makeLine } from "./makeLine";
import { Oracle } from "./oracle";
import { hexagramToBinaryHexagram } from "./hexagramToBinaryHexagram";

export const YiJing = {
  Oracle,
  hexagramToBinaryHexagram,
  fuxiToBinary,
  fuxiToBinaryLegacy,
  binaryToFuxi,
  kingWenSequence,
  binaryToKingWen,
  normalizeFourUintNumbers,
  makeLine
};
