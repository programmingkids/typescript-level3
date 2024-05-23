// 関数型の定義
type F = (x1: number, x2: number) => number;

// たし算関数宣言と同時にエクスポート
export const add: F = (x1: number, x2: number): number => x1 + x2;

// ひき算関数宣言と同時にエクスポート
export const minus: F = (x1: number, x2: number): number => x1 - x2;
