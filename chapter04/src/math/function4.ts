// 関数型の定義
type F = (x1: number, x2: number) => number;

// たし算関数
const add: F = (x1: number, x2: number): number => x1 + x2;

// ひき算関数
const minus: F = (x1: number, x2: number): number => x1 - x2;

// デフォルトエクスポート
export default add;

// 通常エクスポートと別名
export { minus as m };
