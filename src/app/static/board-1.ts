import {
  AbstractEnemy,
  EnemyConfig,
  Enemy,
  defaultBehavior,
} from '../elements/enemies/enemies';
import { d3, d6 } from '../utils/dice';
import { Board } from '../models/board';

const goblinConfig: EnemyConfig = {
  name: 'Goblin Warrior',
  maxLife: 10,
  life: 10,
  behavior: defaultBehavior,
  isBehaviorActive: false,
  susceptibility: ['white', 'blue', 'red', 'gold'],
  attack1: () => {
    return d3() + d3();
  },
  attack2: () => {
    return d6();
  },
  attack3: () => {
    return d6();
  },
};

const board1Enemies: Enemy[] = [
  new Enemy(goblinConfig),
  new Enemy(goblinConfig),
  new Enemy(goblinConfig),
  new Enemy(goblinConfig),
  new Enemy(goblinConfig),
];

export const Board1: Board = {
  cols: 4,
  rows: 10,
  enemies: board1Enemies,
};
