(() => {
  abstract class Mutante {
    constructor(public name: string, public realName: string) {}
  }

  class Xmen extends Mutante {
    public salvarMundo(): string {
      return `El mutante ${this.name} salva al mundo`;
    }
  }

  class Villian extends Mutante {
    public conquistarMundo(): string {
      return `El villano ${this.name} conquista al mundo`;
    }
  }

  const wolverine: Xmen = new Xmen('Wolverine', 'Logan');
  const magneto: Villian = new Villian('Magneto', 'Erik');

  console.log(wolverine);
  console.log(wolverine.salvarMundo());
  console.log(magneto);
  console.log(magneto.conquistarMundo());

  const printName = (character: Mutante): string => {
    return character.realName;
  };

  console.log(printName(wolverine));
})();
