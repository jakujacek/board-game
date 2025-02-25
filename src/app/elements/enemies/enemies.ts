import { HeroClass, EnemyLifeStage, EnemyAction, EnemyConfig, EnemyBehavior } from '../../models/enemy';

export const defaultBehavior: EnemyBehavior = {
  [HeroClass.Wizard]: {
    [EnemyLifeStage.Strong]: null,
    [EnemyLifeStage.Wounded]: null,
    [EnemyLifeStage.Weak]: EnemyAction.ChangeTarget,
    [EnemyLifeStage.Dying]: null,
  },
  [HeroClass.Warrior]: {
    [EnemyLifeStage.Strong]: null,
    [EnemyLifeStage.Wounded]: EnemyAction.Regroup,
    [EnemyLifeStage.Weak]: EnemyAction.Regroup,
    [EnemyLifeStage.Dying]: EnemyAction.SafeSpace,
  },
  [HeroClass.Druid]: {
    [EnemyLifeStage.Strong]: null,
    [EnemyLifeStage.Wounded]: EnemyAction.ChangeTarget,
    [EnemyLifeStage.Weak]: EnemyAction.Regroup,
    [EnemyLifeStage.Dying]: EnemyAction.SafeSpace,
  },
  [HeroClass.Rogue]: {
    [EnemyLifeStage.Strong]: null,
    [EnemyLifeStage.Wounded]: EnemyAction.ChangeTarget,
    [EnemyLifeStage.Weak]: EnemyAction.ChangeTarget,
    [EnemyLifeStage.Dying]: EnemyAction.SafeSpace,
  },
};

export const EnemiesList: EnemyConfig[] = [
  {
    name: 'Goblin Warrior',
    maxLife: 10,
    life: 10,
    behavior: defaultBehavior,
    isBehaviorActive: false,
    susceptibility: ["silver", "white"],
    attack1: () => Math.floor(Math.random() * 6) + 1, // d6
    attack2: () => Math.floor(Math.random() * 4) + 1, // d4
    attack3: () => Math.floor(Math.random() * 4) + 1, // d4
  },
  {
    name: "Red Dragon",
    life: 150,
    susceptibility: ["blue", "silver", "white"],
    attack1: () => Math.floor(Math.random() * 20) + 10, // d20+10
    attack2: () => Math.floor(Math.random() * 12) + 8, // d12+8
    attack3: () => Math.floor(Math.random() * 30) + 15, // d30+15
    maxLife: 10,
    behavior: defaultBehavior,
    isBehaviorActive: false,
  },
  {
    name: "Skeleton Warrior",
    maxLife: 10,
    life: 35,
    susceptibility: ["white", "gold"],
    behavior: defaultBehavior,
    isBehaviorActive: false,
    attack1: () => Math.floor(Math.random() * 8) + 2, // d8+2
    attack2: () => Math.floor(Math.random() * 6) + 3, // d6+3
    attack3: () => Math.floor(Math.random() * 6) + 3, // d6+3
  },
  {
    name: "Dark Elf",
    maxLife: 10,
    life: 35,
    susceptibility: ["white", "gold"],
    behavior: defaultBehavior,
    isBehaviorActive: false,
    attack1: () => Math.floor(Math.random() * 10) + 4, // d10+4
    attack2: () => Math.floor(Math.random() * 8) + 3, // d8+3
    attack3: () => Math.floor(Math.random() * 8) + 3, // d8+3
  },
  {
    name: "Troll",
    maxLife: 10,
    life: 35,
    susceptibility: ["white", "gold"],
    behavior: defaultBehavior,
    isBehaviorActive: false,
    attack1: () => Math.floor(Math.random() * 12) + 6, // d12+6
    attack2: () => Math.floor(Math.random() * 10) + 5, // d10+5
    attack3: () => Math.floor(Math.random() * 10) + 5, // d10+5
  },
  {
    name: "Ghost",
    maxLife: 10,
    life: 35,
    susceptibility: ["white", "gold"],
    behavior: defaultBehavior,
    isBehaviorActive: false,
    attack1: () => Math.floor(Math.random() * 8) + 3, // d8+3
    attack2: () => Math.floor(Math.random() * 6) + 2, // d6+2
    attack3: () => Math.floor(Math.random() * 6) + 2, // d6+2
  },
  {
    name: "Basilisk",
    maxLife: 10,
    life: 35,
    susceptibility: ["white", "gold"],
    behavior: defaultBehavior,
    isBehaviorActive: false,
    attack1: () => Math.floor(Math.random() * 12) + 5, // d12+5
    attack2: () => Math.floor(Math.random() * 8) + 7, // d8+7
    attack3: () => Math.floor(Math.random() * 8) + 7, // d8+7
  },
  {
    name: "Demon Lord",
    maxLife: 10,
    life: 35,
    susceptibility: ["white", "gold"],
    behavior: defaultBehavior,
    isBehaviorActive: false,
    attack1: () => Math.floor(Math.random() * 20) + 15, // d20+15
    attack2: () => Math.floor(Math.random() * 16) + 10, // d16+10
    attack3: () => Math.floor(Math.random() * 30) + 20, // d30+20
  },
  {
    name: "Werewolf",
    maxLife: 10,
    life: 35,
    susceptibility: ["white", "gold"],
    behavior: defaultBehavior,
    isBehaviorActive: false,
    attack1: () => Math.floor(Math.random() * 10) + 5, // d10+5
    attack2: () => Math.floor(Math.random() * 8) + 4, // d8+4
    attack3: () => Math.floor(Math.random() * 8) + 4, // d8+4
  },
  {
    name: "Harpy",
    maxLife: 10,
    life: 35,
    susceptibility: ["white", "gold"],
    behavior: defaultBehavior,
    isBehaviorActive: false,
    attack1: () => Math.floor(Math.random() * 8) + 3, // d8+3
    attack2: () => Math.floor(Math.random() * 6) + 4, // d6+4
    attack3: () => Math.floor(Math.random() * 6) + 4, // d6+4
  },
  {
    name: "Lich",
    maxLife: 10,
    life: 35,
    susceptibility: ["white", "gold"],
    behavior: defaultBehavior,
    isBehaviorActive: false,
    attack1: () => Math.floor(Math.random() * 16) + 8, // d16+8
    attack2: () => Math.floor(Math.random() * 12) + 6, // d12+6
    attack3: () => Math.floor(Math.random() * 20) + 10, // d20+10
  },
  {
    name: "Minotaur",
    maxLife: 10,
    life: 35,
    susceptibility: ["white", "gold"],
    behavior: defaultBehavior,
    isBehaviorActive: false,
    attack1: () => Math.floor(Math.random() * 12) + 7, // d12+7
    attack2: () => Math.floor(Math.random() * 10) + 6, // d10+6
    attack3: () => Math.floor(Math.random() * 10) + 6, // d10+6
  },
  {
    name: "Giant Spider",
    maxLife: 10,
    life: 35,
    susceptibility: ["white", "gold"],
    behavior: defaultBehavior,
    isBehaviorActive: false,
    attack1: () => Math.floor(Math.random() * 8) + 4, // d8+4
    attack2: () => Math.floor(Math.random() * 6) + 3, // d6+3
    attack3: () => Math.floor(Math.random() * 6) + 3, // d6+3
  },
  {
    name: "Ice Elemental",
    maxLife: 10,
    life: 35,
    susceptibility: ["white", "gold"],
    behavior: defaultBehavior,
    isBehaviorActive: false,
    attack1: () => Math.floor(Math.random() * 12) + 5, // d12+5
    attack2: () => Math.floor(Math.random() * 10) + 4, // d10+4
    attack3: () => Math.floor(Math.random() * 10) + 4, // d10+4
  },
  {
    name: "Medusa",
    maxLife: 10,
    life: 35,
    susceptibility: ["white", "gold"],
    behavior: defaultBehavior,
    isBehaviorActive: false,
    attack1: () => Math.floor(Math.random() * 10) + 6, // d10+6
    attack2: () => Math.floor(Math.random() * 8) + 5, // d8+5
    attack3: () => Math.floor(Math.random() * 8) + 5, // d8+5
  },
  {
    name: "Phoenix",
    maxLife: 10,
    life: 35,
    susceptibility: ["white", "gold"],
    behavior: defaultBehavior,
    isBehaviorActive: false,
    attack1: () => Math.floor(Math.random() * 14) + 7, // d14+7
    attack2: () => Math.floor(Math.random() * 12) + 6, // d12+6
    attack3: () => Math.floor(Math.random() * 10) + 8, // d10+8
  },
  {
    name: "Banshee",
    maxLife: 10,
    life: 35,
    susceptibility: ["white", "gold"],
    behavior: defaultBehavior,
    isBehaviorActive: false,
    attack1: () => Math.floor(Math.random() * 8) + 5, // d8+5
    attack2: () => Math.floor(Math.random() * 6) + 4, // d6+4
    attack3: () => Math.floor(Math.random() * 6) + 4, // d6+4
  },
  {
    name: "Chimera",
    maxLife: 10,
    life: 35,
    susceptibility: ["white", "gold"],
    behavior: defaultBehavior,
    isBehaviorActive: false,
    attack1: () => Math.floor(Math.random() * 14) + 8, // d14+8
    attack2: () => Math.floor(Math.random() * 12) + 7, // d12+7
    attack3: () => Math.floor(Math.random() * 10) + 6, // d10+6
  },
  {
    name: "Hydra",
    maxLife: 10,



    life: 35,
    susceptibility: ["white", "gold"],
    behavior: defaultBehavior,
    isBehaviorActive: false,
    attack1: () => Math.floor(Math.random() * 16) + 10, // d16+10
    attack2: () => Math.floor(Math.random() * 14) + 8, // d14+8
    attack3: () => Math.floor(Math.random() * 12) + 6, // d12+6
  },
  {
    name: "Shadow Assassin",
    maxLife: 10,
    life: 35,
    susceptibility: ["white", "gold"],
    behavior: defaultBehavior,
    isBehaviorActive: false,
    attack1: () => Math.floor(Math.random() * 10) + 7, // d10+7
    attack2: () => Math.floor(Math.random() * 8) + 6, // d8+6
    attack3: () => Math.floor(Math.random() * 8) + 6, // d8+6
  },
];
// A magic-vulnerable enemy (susceptible to blue/white magic)
const magicVulnerableBehavior: EnemyBehavior = {
  [HeroClass.Wizard]: {
    [EnemyLifeStage.Strong]: EnemyAction.SafeSpace, // Really avoid wizard when hurt
    [EnemyLifeStage.Wounded]: EnemyAction.SafeSpace, // Really avoid wizard when hurt
    [EnemyLifeStage.Weak]: EnemyAction.SafeSpace,
    [EnemyLifeStage.Dying]: EnemyAction.SafeSpace,
  },
  [HeroClass.Warrior]: {
    [EnemyLifeStage.Strong]: EnemyAction.ChangeTarget,
    [EnemyLifeStage.Wounded]: EnemyAction.SafeSpace, // Really avoid wizard when hurt
    [EnemyLifeStage.Weak]: EnemyAction.ChangeTarget,
    [EnemyLifeStage.Dying]: EnemyAction.SafeSpace,
  },
  [HeroClass.Druid]: {
    [EnemyLifeStage.Strong]: EnemyAction.ChangeTarget,
    [EnemyLifeStage.Wounded]: EnemyAction.ChangeTarget,
    [EnemyLifeStage.Weak]: EnemyAction.Regroup,
    [EnemyLifeStage.Dying]: EnemyAction.SafeSpace,
  },
  [HeroClass.Rogue]: {
    [EnemyLifeStage.Strong]: EnemyAction.ChangeTarget,
    [EnemyLifeStage.Wounded]: EnemyAction.SafeSpace, // Really avoid wizard when hurt
    [EnemyLifeStage.Weak]: EnemyAction.ChangeTarget,
    [EnemyLifeStage.Dying]: EnemyAction.SafeSpace,
  },
};

// A physically resistant enemy (less susceptible to physical damage)
const physicallyResistantBehavior: EnemyBehavior = {
  [HeroClass.Wizard]: {
    [EnemyLifeStage.Strong]: EnemyAction.ChangeTarget,
    [EnemyLifeStage.Wounded]: EnemyAction.ChangeTarget,
    [EnemyLifeStage.Weak]: EnemyAction.ChangeTarget,
    [EnemyLifeStage.Dying]: EnemyAction.SafeSpace,
  },
  [HeroClass.Warrior]: {
    [EnemyLifeStage.Strong]: null,
    [EnemyLifeStage.Wounded]: null,
    [EnemyLifeStage.Weak]: null,
    [EnemyLifeStage.Dying]: EnemyAction.Regroup,
  },
  [HeroClass.Druid]: {
    [EnemyLifeStage.Strong]: null,
    [EnemyLifeStage.Wounded]: EnemyAction.ChangeTarget,
    [EnemyLifeStage.Weak]: EnemyAction.ChangeTarget,
    [EnemyLifeStage.Dying]: EnemyAction.Regroup,
  },
  [HeroClass.Rogue]: {
    [EnemyLifeStage.Strong]: null,
    [EnemyLifeStage.Wounded]: null,
    [EnemyLifeStage.Weak]: null,
    [EnemyLifeStage.Dying]: EnemyAction.Regroup,
  },
};
