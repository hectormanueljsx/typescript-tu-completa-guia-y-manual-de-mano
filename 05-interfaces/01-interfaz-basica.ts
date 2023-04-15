(() => {
  interface Hero {
    name: string;
    age: number;
    powers: string[];
  }

  const flash: Hero = {
    name: 'Barry Allen',
    age: 24,
    powers: ['Speed', 'Time travel', 'Flash'],
  };

  console.log(flash);
})();
