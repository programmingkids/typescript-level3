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

const animal: Animal = pochi; // 共変なのでOK
