export {};

class Animal {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }
}

class Dog {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }

  public wanwan(): void {
    console.log('wan');
  }
}

const pochi: Dog = new Dog('pochi');
const animal: Animal = pochi; // 共変なのでOK
