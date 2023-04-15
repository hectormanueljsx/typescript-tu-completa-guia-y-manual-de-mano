(() => {
  class Avenger {
    static avgAge: number = 35;
    static getAvgAge(): number {
      return Avenger.avgAge;
    }

    constructor(private name: string, private team: string, public realName?: string) {}

    public bio(): string {
      return `${this.name} (${this.team})`;
    }

    private bioClone(): string {
      return `${this.name} (${this.team})`;
    }
  }

  const antman: Avenger = new Avenger('Antman', 'Capitan', 'Scott Lang');
  console.log(antman);
  console.log(Avenger.avgAge);
  console.log(antman.bio());
  console.log(Avenger.getAvgAge());
})();
