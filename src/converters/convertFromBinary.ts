import {YiJing} from ".."
import {Fuxi, Kingwen, BinaryHexagram, TrueHexagram} from "../types"
import {binaryToLines as _binaryToLines} from "./helpers/binaryToLines"

function binaryToFuxi(b: BinaryHexagram):Fuxi {
    return YiJing.binaryToFuxi(b)
}

function binaryToKingwen(b: BinaryHexagram): Kingwen {
    return YiJing.binaryToKingWen(b)
}

function binaryToLines(b: BinaryHexagram): TrueHexagram {
    return _binaryToLines(b)
}

export function convertFromBinary(b:BinaryHexagram): [Kingwen, TrueHexagram, Fuxi ] {
    return [
        binaryToKingwen(b),
        binaryToLines(b),
        binaryToFuxi(b)
    ]
}