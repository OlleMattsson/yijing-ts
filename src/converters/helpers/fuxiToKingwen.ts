import { Fuxi, Kingwen } from "../../types";
import { kingWenSequence } from "./kingWenSequence"

export function fuxiToKingwen(
  f: Fuxi = 0
): Kingwen {
  return kingWenSequence[f] as Kingwen;
};
