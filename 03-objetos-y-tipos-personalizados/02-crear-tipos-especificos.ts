(() => {
  let heroFlash: {
    name: string;
    age: number;
    powers: string[];
    getName?: () => string;
  } = {
    name: 'Barry Allen',
    age: 24,
    powers: ['Super velocidad', 'Viajar en el tiempo'],
  };

  heroFlash = {
    name: 'Clark Kent',
    age: 500,
    powers: ['Super fuerza'],

    // Métodos dentro de un objeto
    getName() {
      return this.name;
    },
  };

  console.log(heroFlash.name);
})();
