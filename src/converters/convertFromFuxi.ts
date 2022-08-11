import {Fuxi, Kingwen, BinaryHexagram, TrueHexagram} from "../types";
import { fuxiToBinary } from "./helpers/fuxiToBinary";
import { fuxiToKingwen } from "./helpers/fuxiToKingwen";
import { binaryToLines } from "./helpers/binaryToLines";

function fuxiToLines(f: Fuxi): TrueHexagram {
    const binary: BinaryHexagram = fuxiToBinary(f);
    return binaryToLines(binary);
}

export function convertFromFuxi(f:Fuxi): [Kingwen, TrueHexagram, BinaryHexagram ] {
    return [
        fuxiToKingwen(f),
        fuxiToLines(f),
        fuxiToBinary(f)
    ]
}