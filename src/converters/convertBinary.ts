import {YiJing} from ".."
import {Fuxi, Kingwen, BinaryHexagram, TrueHexagram} from "../types"

function binaryToFuxi(b: BinaryHexagram):Fuxi {
    return YiJing.binaryToFuxi(b)
}

function binaryToKingwen(b: BinaryHexagram): Kingwen {
    return YiJing.binaryToKingWen(b)
}

// TODO: implement
function binaryToLines(b: BinaryHexagram): TrueHexagram {
    return [1,2,3,4,5,6] as TrueHexagram
}

export function convertBinary(b:BinaryHexagram): [Kingwen, TrueHexagram, Fuxi ] {
    return [
        binaryToKingwen(b),
        binaryToLines(b),
        binaryToFuxi(b)
    ]
}