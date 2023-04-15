/*
  Típicamente un arreglo contiene de cero a muchos objetos de un solo tipo. TypeScript
  tiene un análisis especial en torno a los arreglos que contengan múltiples tipos, y
  donde es importante el orden en que se indexan
*/

(() => {
  const hero: [string, number, boolean] = ['Dr. Strange', 100, true];

  hero[0] = 'Ironman';
  hero[1] = 50;
  hero[2] = false;

  console.log(hero);
})();
