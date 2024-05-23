// 型としてインポート
import type { Player, JOB } from './game/player';

// 型として利用
const j1: JOB = 'Magician';

// 型として利用
const p1: Player = {
  name: 'Elsa',
  age: 17,
  hp: 80,
  mp: 100,
  job: j1,
  attack: function (): void {
    console.log(`${this.name} is fighting`);
  },
  magic: function (): void {
    console.log(`${this.name} is using magic`);
  },
  status: function (): void {
    console.log(`name is ${this.name}`);
    console.log(`age is ${this.age}`);
    console.log(`hp is ${this.hp}`);
    console.log(`mp is ${this.mp}`);
    console.log(`job is ${this.job}`);
  },
};

// 呼び出し
p1.status();
p1.attack();
p1.magic();
