import { fuxiToBinaryLegacy, fuxiToBinary } from "./fuxiToBinary";
import { binaryToFuxi } from "./binaryToFuxi";
import { kingWenSequence } from "./kingWenSequence";
import { binaryToKingWen } from "./binaryToKingWen";
import { normalizeFourUintNumbers, makeLine } from "./makeLine";
import { Oracle } from "./oracle";
import { hexagramToBinaryHexagram } from "./hexagramToBinaryHexagram";
import { convertFuxi } from "./convertFuxi";
import { convertBinary } from "./convertBinary";
import { convertKingwen } from "./convertKingwen";
import { convertLines } from "./convertLines";

export const YiJing = {
  /*
    Main API
  */
  Oracle,

  /*
    Converters
  */
  convertFuxi,
  convertBinary,
  convertKingwen,
  convertLines,
  
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
