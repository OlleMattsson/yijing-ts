import {Fuxi, Kingwen, BinaryHexagram, TrueHexagram} from "../types"
import { fuxiToBinary } from "./helpers/fuxiToBinary"
import { fuxiToKingwen } from "./helpers/fuxiToKingwen"

// TODO: implement
function fuxiToLines(f: Fuxi): TrueHexagram {
    return [1,2,3,4,5,6] as TrueHexagram
}

export function convertFuxi(f:Fuxi): [Kingwen, TrueHexagram, BinaryHexagram ] {
    return [
        fuxiToKingwen(f),
        fuxiToLines(f),
        fuxiToBinary(f)
    ]
}