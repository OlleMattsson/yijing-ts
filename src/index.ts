import { fuxiToBinaryLegacy, fuxiToBinary } from "./converters/helpers/fuxiToBinary";
import { binaryToFuxi } from "./converters/helpers/binaryToFuxi";
import { kingWenSequence } from "./converters/helpers/kingWenSequence";
import { binaryToKingWen } from "./converters/helpers/binaryToKingWen";
import { normalizeFourUintNumbers, makeLine } from "./makeLine";
import { Oracle } from "./oracle";
import { linesToBinary } from "./converters/helpers/linesToBinary";
import { Converters as Convert } from "./converters";
import { Hexagram } from "./hexagram";

export const YiJing = {
  /*
    Main API
  */
  Hexagram,
  Oracle,
  Convert,

  /* 
    Helpers 
  */
    linesToBinary,
  fuxiToBinary,
  fuxiToBinaryLegacy,
  binaryToFuxi,
  kingWenSequence,
  binaryToKingWen,
  normalizeFourUintNumbers,
  makeLine,
};
