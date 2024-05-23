export {};

interface Player {
  name: string;
}

interface Fighter extends Player {
  fight(): void;
}

interface Magician extends Player {
  magic(): void;
}

function attack(player: Fighter | Magician): void {
  if ('fight' in player) {
    player.fight();
  } else if ('magic' in player) {
    player.magic();
  }
}

const elsa: Fighter = {
  name: 'Elsa',
  fight: function (): void {
    console.log(`${this.name} is fighting`);
  },
};

const anna: Magician = {
  name: 'Anna',
  magic: function (): void {
    console.log(`${this.name} is using magic`);
  },
};

attack(elsa); // Elsa is fighting
attack(anna); // Anna is using magic
