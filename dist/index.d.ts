import { fuxiToBinaryLegacy, fuxiToBinary } from "./fuxiToBinary";
import { normalizeFourUintNumbers, makeLine } from "./makeLine";
import { Hexagram } from "./hexagram";
import { hexagramToBinaryHexagram } from "./hexagramToBinaryHexagram";
export declare const YiJing: {
    Hexagram: typeof Hexagram;
    hexagramToBinaryHexagram: typeof hexagramToBinaryHexagram;
    fuxiToBinary: typeof fuxiToBinary;
    fuxiToBinaryLegacy: typeof fuxiToBinaryLegacy;
    binaryToFuxi: (hexagram: import("./types").BinaryHexagram) => import("./types").uint6;
    kingWenSequence: import("./types").KingWenSequence;
    binaryToKingWen: (hexagram?: import("./types").BinaryHexagram) => number;
    normalizeFourUintNumbers: typeof normalizeFourUintNumbers;
    makeLine: typeof makeLine;
};
