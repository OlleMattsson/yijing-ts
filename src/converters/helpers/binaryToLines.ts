import { BinaryHexagram, TrueHexagram } from "../../types";

/*
    Interesting detail: we can simply NOT the binary hexagram to get
    a corresponding hexagram with Lines. 
*/
export function binaryToLines(b: BinaryHexagram): TrueHexagram {
    return b.map((i) => i === 1 ? 0 : 1  ) as TrueHexagram
}