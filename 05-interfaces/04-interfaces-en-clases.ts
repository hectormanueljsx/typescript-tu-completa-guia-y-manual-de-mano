(() => {
  interface Xmen {
    name: string;
    realName: string;
    mutantPower(power: string): string;
  }

  class Mutant implements Xmen {
    constructor(public name: string, public realName: string) {}

    mutantPower(power: string): string {
      return `${this.name} has the power of ${power}`;
    }
  }

  const wolverine = new Mutant('Wolverine', 'Logan');
  console.log(wolverine);
  console.log(wolverine.mutantPower('healing'));
})();
