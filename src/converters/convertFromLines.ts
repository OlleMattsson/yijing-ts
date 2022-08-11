import {YiJing} from ".."
import {Fuxi, Kingwen, BinaryHexagram, TrueHexagram} from "../types"
import {binaryToFuxi} from "./helpers/binaryToFuxi"
import {binaryToKingWen} from "./helpers/binaryToKingWen"

function linesToFuxi(l: TrueHexagram): Fuxi {
    const b = linesToBinary(l)
    return binaryToFuxi(b)
}

function linesToKingwen(l: TrueHexagram): Kingwen {
    const b = linesToBinary(l)
    return binaryToKingWen(b)
}

function linesToBinary(l: TrueHexagram): BinaryHexagram {
    return YiJing.linesToBinary(l)
}   

export function convertFromLines(l:TrueHexagram): [Fuxi, Kingwen, BinaryHexagram ] {
    return [
        linesToFuxi(l),
        linesToKingwen(l),
        linesToBinary(l)
    ]
}