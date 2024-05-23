// 関数型の定義
type F = (x1: number, x2: number) => number;

// たし算関数
const add: F = (x1: number, x2: number): number => x1 + x2;

// ひき算関数
const minus: F = (x1: number, x2: number): number => x1 - x2;

// かけ算関数（エクスポートしない）
const multiply: F = (x1: number, x2: number): number => x1 * x2;

// 値
const PI: number = 3.14;

// 3個のエクスポート
export { add };
export { minus };
export { PI };
