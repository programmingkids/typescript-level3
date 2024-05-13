export {};

const value: string = 'Hello';

changeValue1(value); // エラー
changeValue2(value); // HELLO

function changeValue1(param: string | number): void {
  // string | numberで、numberの可能性があるのに、
  // toUpperCaseを呼び出すとエラー
  // const result = param.toUpperCase();
  // console.log(result);
}

function changeValue2(param: string | number): void {
  // string | numberで、numberの可能性があるが、
  // paramをstringと断定する
  const result = (param as string).toUpperCase();
  console.log(result); // HELLO
}
