(() => {
  class Apocalipsis {
    static instance: Apocalipsis;

    private constructor(public name: string) {}

    static callApocalipsis(): Apocalipsis {
      if (!Apocalipsis.instance) {
        Apocalipsis.instance = new Apocalipsis('Soy Apocalipsis... solo una vez');
      }

      return Apocalipsis.instance;
    }

    public changeName(newName: string): void {
      this.name = newName;
    }
  }

  const apocalipsis: Apocalipsis = Apocalipsis.callApocalipsis();
  console.log(apocalipsis);

  apocalipsis.changeName('Soy Apocalipsis... y siempre lo seré');
  console.log(apocalipsis);
})();
