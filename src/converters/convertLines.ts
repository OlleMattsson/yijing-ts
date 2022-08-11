import {YiJing} from "../"
import {Fuxi, Kingwen, BinaryHexagram, TrueHexagram} from "../types"

function linesToFuxi(l: TrueHexagram): Fuxi {
    return 0 as Fuxi

}
function linesToKingwen(l: TrueHexagram): Kingwen {
    return 1 as Kingwen
}
function linesToBinary(l: TrueHexagram): BinaryHexagram {
    return YiJing.hexagramToBinaryHexagram(l)
}   

export function convertLines(l:TrueHexagram): [Fuxi, Kingwen, BinaryHexagram ] {
    return [
        linesToFuxi(l),
        linesToKingwen(l),
        linesToBinary(l)
    ]
}