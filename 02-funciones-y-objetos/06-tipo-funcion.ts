(() => {
  const addNumbers = (a: number, b: number): number => a + b;
  const greet = (name: string): string => `Hola ${name}`;
  const saveTheWorld = (): string => `El mundo está salvado!`;

  let myFunction: Function;
  // let myFunction: (x: number, y: number) => number;
  // let myFunction: (x: string) => string;
  // let myFunction: () => string;

  myFunction = addNumbers;
  console.log(myFunction(1, 2));

  myFunction = greet;
  console.log(myFunction('Spiderman'));

  myFunction = saveTheWorld;
  console.log(myFunction());
})();
