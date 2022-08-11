import {YiJing} from "../"
import {Fuxi, Kingwen, BinaryHexagram, TrueHexagram} from "../types"

// TODO: implement
function kingwenToFuxi(k: Kingwen): Fuxi {
    return 0 as Fuxi
}

// TODO: implement
function kingwenToBinary(k: Kingwen): BinaryHexagram {
    return new Array(6) as BinaryHexagram
}
// TODO: implement
function kingwenToLines(k: Kingwen): TrueHexagram {
    return new Array(6) as TrueHexagram
}

export function convertKingwen(k:Kingwen): [Fuxi, TrueHexagram, BinaryHexagram ] {
    return [
        kingwenToFuxi(k),
        kingwenToLines(k),
        kingwenToBinary(k)
    ]
}