export {};

// Hero型
type Hero = { job: 'hero'; hp: number; mp: number };
// Magician型
type Magician = { job: 'magician'; mp: number };
// Fighter型
type Fighter = { job: 'fighter'; hp: number };

// 攻撃種類の型
type AttackJob = Hero | Fighter;

// AttackJobを満たす型のみをフィリタリングする
// AttackJobの部分型であれば、その型、それ以外であればnever型
type AttackTypeFilter<T> = T extends AttackJob ? T : never;

// AttackJobTypeは　Hero | never | Fighter のユニオン型
type AttackJobType = AttackTypeFilter<Hero | Magician | Fighter>;

// Hero型で定義　OK
const c1: AttackJobType = {
  job: 'hero',
  hp: 100,
  mp: 200,
};

// Fighter型で定義　OK
const c2: AttackJobType = {
  job: 'fighter',
  hp: 200,
};

// Magician型で定義　エラー
// const c3: AttackJobType = {
//   job: 'magician',
//   mp: 200,
// };
