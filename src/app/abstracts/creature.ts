import { Directive, InjectionToken, Optional, Inject } from "@angular/core";

export enum Hero {
  WARRIOR = "a",
  WIZARD = "b",
  DRUID = "c",
  THIEF = "d",
  SIRULAN = "e",
  ALAHIN = "f",
}

export type Behavior =
  | "attack1"
  | "attack2"
  | "attack3"
  | "movementAttack"
  | "movementStrategic"
  | "movementSafe"
  | "special1"
  | "special2"
  | "special3";

export interface BehaviorGraph {
  1: { [key in Hero]: Behavior[] };
  2: { [key in Hero]: Behavior[] };
  3: { [key in Hero]: Behavior[] };
  4: { [key in Hero]: Behavior[] };
}

export interface CreatureConfig {
  name: string;
  health: number;
  defense: number;
  attack1: () => number;
  attack2?: () => number;
  attack3?: () => number;
  special1?: () => any;
  special2?: () => any;
  special3?: () => any;
  movementAttack: () => [number, number];
  movementStrategic: () => [number, number];
  movementSafe: () => [number, number];
  behaviorGraph: BehaviorGraph;
}

export const CREATURE_CONFIG = new InjectionToken("creature-config");

Directive();
export abstract class Creature {
  constructor(@Optional() @Inject(CREATURE_CONFIG) config: CreatureConfig) {}
}
