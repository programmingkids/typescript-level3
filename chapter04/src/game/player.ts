// JOB型
type JOB = 'Hero' | 'Fighter' | 'Magician';

// Player型
type Player = {
  name: string;
  age: number;
  hp: number;
  mp: number;
  job: JOB;
  attack(): void;
  magic(): void;
  status(): void;
};

// 型としてエクスポート
export type { Player, JOB };
