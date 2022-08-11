import {Fuxi, Kingwen, BinaryHexagram, TrueHexagram} from "../types"
import {kingWenSequence} from "./helpers/kingWenSequence"
import {fuxiToBinary} from "./helpers/fuxiToBinary"
import {binaryToLines} from "./helpers/binaryToLines"

function kingwenToFuxi(k: Kingwen): Fuxi {
    const fuxi = kingWenSequence.indexOf(k) as Fuxi
    return fuxi
}

function kingwenToBinary(k: Kingwen): BinaryHexagram {
    const f = kingwenToFuxi(k)
    return fuxiToBinary(f)
}

function kingwenToLines(k: Kingwen): TrueHexagram {
    const f = kingwenToFuxi(k)
    const b = fuxiToBinary(f)
    return binaryToLines(b) 
}

export function convertFromKingwen(k:Kingwen): [Fuxi, TrueHexagram, BinaryHexagram ] {
    return [
        kingwenToFuxi(k),
        kingwenToLines(k),
        kingwenToBinary(k)
    ]
}
