import { Fuxi, Kingwen } from "../../types";
import { YiJing } from "../..";

export function fuxiToKingwen(
  f: Fuxi = 0
): Kingwen {
  return YiJing.kingWenSequence[f] as Kingwen;
};
