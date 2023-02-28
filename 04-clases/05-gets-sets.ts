(() => {
  class Avenger {
    constructor(public name: string, public realName: string) {}

    protected getFullName(): string {
      return `${this.name} ${this.realName}`;
    }
  }

  class Xmen extends Avenger {
    constructor(name: string, realName: string, public isMutant: boolean) {
      super(name, realName);
    }

    get fullName(): string {
      return `${this.name} - ${this.realName}`;
    }

    set fullName(name: string) {
      this.name = name;
    }

    public getFullNameXmen(): string {
      return `${this.name} ${this.realName} ${this.isMutant}`;
    }
  }

  const wolverine: Xmen = new Xmen('Wolverine', 'Logan', true);
  console.log(wolverine);
  console.log(wolverine.getFullNameXmen());
  console.log(wolverine.fullName);
  wolverine.fullName = 'Wolverine 2';
  console.log(wolverine);
})();
