(() => {
  type Hero = {
    name: string;
    age: number;
    powers: string[];
    getName?: () => string;
  };

  let myCustomVariable: string | number | Hero = 'Hola Mundo';
  console.log(typeof myCustomVariable);

  myCustomVariable = 20;
  console.log(typeof myCustomVariable);

  myCustomVariable = {
    name: 'Clark Kent',
    age: 500,
    powers: ['Super Fuerza'],
  };
  console.log(typeof myCustomVariable);
})();
