(() => {
  const bloquearPrototipo = (constructor: Function): void => {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
  };

  @bloquearPrototipo
  class Pokemon {
    public publicApi: string = 'https://pokeapi.co/api/v2/pokemon';

    constructor(public name: string) {}
  }

  const charmander = new Pokemon('Charmander');
  console.log(charmander);
})();
