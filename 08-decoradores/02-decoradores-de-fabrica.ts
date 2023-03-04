(() => {
  function printToConsole(constructor: Function): void {
    console.log(constructor);
  }

  const printToConsoleConditional = (print: boolean = false): Function => {
    return print ? printToConsole : (): void => {};
  };

  @printToConsoleConditional(true)
  class Pokemon {
    public publicApi: string = 'https://pokeapi.co/api/v2/pokemon';

    constructor(public name: string) {}
  }

  const charmander = new Pokemon('Charmander');
  console.log(charmander);
})();
