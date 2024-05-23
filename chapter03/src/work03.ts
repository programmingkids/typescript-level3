export {};

class Player {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

class Fighter extends Player {
  fight(): void {
    console.log(`${this.name} is fighting`);
  }
}

class Magician extends Player {
  magic(): void {
    console.log(`${this.name} is using magic`);
  }
}

function attack(player: Fighter | Magician): void {
  if (player instanceof Fighter) {
    player.fight();
  } else if (player instanceof Magician) {
    player.magic();
  }
}

attack(new Fighter('Elsa')); // Elsa is fighting
attack(new Magician('Anna')); // Anna is using magic
