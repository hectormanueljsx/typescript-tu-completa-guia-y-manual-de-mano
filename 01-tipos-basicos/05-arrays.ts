(() => {
  const numbers: number[] = [1, 2, 3, 4, 5];
  const villains: string[] = ['Omega Rojo', 'Dormammu', 'Duende Verde'];

  numbers.forEach(number => {
    console.log(number);
  });

  villains.forEach(villain => {
    console.log(villain.toUpperCase());
  });
})();
