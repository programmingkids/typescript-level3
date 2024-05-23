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

function isFighter(player: Player): player is Fighter {
  return 'fight' in player;
}

function isMagician(player: Player): player is Magician {
  return 'magic' in player;
}

function attack(player: Player) {
  if (isFighter(player)) {
    player.fight();
  } else if (isMagician(player)) {
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
