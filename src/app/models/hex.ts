import { Creature } from "../abstracts/creature";

export interface Hexagon {
  id: string;
  x: number;
  y: number;
  radius: number;
  selected: boolean;
  centerX: number;
  centerY: number;
  occupied?: boolean;
  occupiedBy?: Creature;
}
