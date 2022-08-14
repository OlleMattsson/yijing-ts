import {Fuxi, Kingwen, BinaryHexagram, TrueHexagram} from "../types";
import {binaryToFuxi} from "./helpers/binaryToFuxi";
import {binaryToKingWen} from "./helpers/binaryToKingWen";
import {linesToBinary} from "./helpers/linesToBinary"

function linesToFuxi(l: TrueHexagram): Fuxi {
    const b = linesToBinary(l);
    return binaryToFuxi(b);
}

function linesToKingwen(l: TrueHexagram): Kingwen {
    const b = linesToBinary(l);
    return binaryToKingWen(b);
}

export function convertFromLines(l:TrueHexagram): [Fuxi, Kingwen, BinaryHexagram ] {
    return [
        linesToFuxi(l),
        linesToKingwen(l),
        linesToBinary(l)
    ]
}