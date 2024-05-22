export {};

type Animal = {
  name: string;
};

type Dog = {
  name: string;
  wanwan: () => void;
};

const pochi: Dog = {
  name: 'pochi',
  wanwan: (): void => {
    console.log('wan');
  },
};

const hachi: Dog = {
  name: 'hachi',
  wanwan: (): void => {
    console.log('wanwan');
  },
};

const dogs: Dog[] = [pochi, hachi];
const animals: Animal[] = dogs; // 共変なのでOK
