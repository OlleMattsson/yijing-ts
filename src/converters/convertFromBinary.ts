import {Fuxi, Kingwen, BinaryHexagram, TrueHexagram} from "../types";
import {binaryToLines} from "./helpers/binaryToLines";
import {binaryToFuxi} from './helpers/binaryToFuxi'
import {binaryToKingWen} from './helpers/binaryToKingwen'

export function convertFromBinary(b:BinaryHexagram): [Kingwen, TrueHexagram, Fuxi ] {
    return [
        binaryToKingWen(b),
        binaryToLines(b),
        binaryToFuxi(b)
    ]
}