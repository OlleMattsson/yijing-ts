import { fuxiToBinaryLegacy, fuxiToBinary } from "./converters/helpers/fuxiToBinary";
import { binaryToFuxi } from "./converters/helpers/binaryToFuxi";
import { kingWenSequence } from "./converters/helpers/kingWenSequence";
import { binaryToKingWen } from "./converters/helpers/binaryToKingWen";
import { normalizeFourUintNumbers, makeLine } from "./makeLine";
import { Oracle } from "./oracle";
import { hexagramToBinaryHexagram } from "./converters/helpers/hexagramToBinaryHexagram";
import { Converters as Convert } from "./converters";

export const YiJing = {
  /*
    Main API
  */
  Oracle,
  Convert,

  /* 
    Helpers 
  */
  hexagramToBinaryHexagram,
  fuxiToBinary,
  fuxiToBinaryLegacy,
  binaryToFuxi,
  kingWenSequence,
  binaryToKingWen,
  normalizeFourUintNumbers,
  makeLine,
};
