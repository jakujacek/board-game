import { AbstractEnemy } from "../elements/enemies/enemies";

export interface Board {
  cols: number;
  rows: number;
  enemies: AbstractEnemy[];
}
