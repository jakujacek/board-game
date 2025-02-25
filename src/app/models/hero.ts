import { Susceptibility } from "./susceptibility";

export enum HeroClass {
  Wizard = "Wizard",
  Warrior = "Warrior",
  Druid = "Druid",
  Rogue = "Rogue",
}

export interface HeroConfig {
  name: string,
  class: HeroClass;
  life: number;
  maxLife: number;
  attack1: () => number;
  attack2: () => number;
  attack3: () => number;
  actionBag: Susceptibility[];
  draw: () => Susceptibility[];
}

export abstract class AbstractHero {
  private _life: number;

  constructor(public config: HeroConfig) {
    this._life = this.config.maxLife;
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

  get maxLife(): number {
    return this.config.maxLife;
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
  public draw(): Susceptibility[] {
    return this.config.draw();
  };
}

export class Hero extends AbstractHero {
  constructor(config: HeroConfig) {
    super(config);
  }
}
