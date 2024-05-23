// 型と値をミックスでインポート
import { type Monster, lastBoss } from './game/enemy';

// 値として利用
console.log(lastBoss);

// 型として利用
const enemy: Monster = 'スライム';
console.log(enemy);
