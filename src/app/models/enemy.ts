import { Susceptibility } from "./susceptibility";
import { HeroClass } from "./hero";

export enum EnemyAction {
  Regroup = "Regroup",
  SafeSpace = "SafeSpace",
  ChangeTarget = "ChangeTarget",
}

export interface EnemyConfig {
  name: string;
  maxLife: number;
  life: number;
  behavior: EnemyBehavior;
  isBehaviorActive: boolean;
  susceptibility: Susceptibility[];
  attack1: () => number;
  attack2: () => number;
  attack3: () => number;

}


export enum EnemyLifeStage {
  Strong = 1,
  Wounded,
  Weak,
  Dying,
}

export type EnemyBehavior = {
  [key in HeroClass]: {
    [key in EnemyLifeStage]: EnemyAction | null;
  };
};

export abstract class AbstractEnemy {
  private _life: number;
  private _isBehaviorActive: boolean;

  constructor(public config: EnemyConfig) {
    this._life = this.config.maxLife;
    this._isBehaviorActive = this.config.isBehaviorActive;
  }

  get name(): string {
    return this.config.name;
  }

  get life(): number {
    return this._life;
  }

  private set life(lifePoints: number) {
    this._life = lifePoints >= 0 ? lifePoints : 0;
  }

  get susceptibility(): Susceptibility[] {
    return this.config.susceptibility;
  }

  get behavior(): EnemyBehavior {
    return this.config.behavior;
  }

  get maxLife(): number {
    return this.config.maxLife;
  }

  get isBehaviorActive(): boolean {
    return this._isBehaviorActive;
  }

  set isBehaviorActive(isActive: boolean) {
    this._isBehaviorActive = isActive;
  }

  getDamage(damage: number): void {
    this.life = this.life - damage;
  }

  public attack1(): number {
    return this.config.attack1();
  };

  public attack2(): number {
    return this.config.attack2();
  };

  public attack3(): number {
    return this.config.attack3();
  };

  public lifeStage(): EnemyLifeStage {
    const lifePercentage = Math.floor((this.life * 100) / this.maxLife);
    return lifePercentage > 70
    ? EnemyLifeStage.Strong
    : lifePercentage > 50
    ? EnemyLifeStage.Wounded
    : lifePercentage > 30
    ? EnemyLifeStage.Weak
    : EnemyLifeStage.Dying;
  }
}

export class Enemy extends AbstractEnemy {
  constructor(config: EnemyConfig) {
    super(config);
  }
}
