(() => {
  type Hero = {
    name: string;
    age: number;
    powers: string[];
    getName?: () => string;
  };

  const heroFlash: Hero = {
    name: 'Barry Allen',
    age: 24,
    powers: ['Super velocidad', 'Viajar en el tiempo'],
  };

  const heroSuperman: Hero = {
    name: 'Clark Kent',
    age: 500,
    powers: ['Super fuerza'],
    getName() {
      return this.name;
    },
  };
})();
