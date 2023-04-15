/*
  Puedes usar any para declarar que una sección de tu código es dinámica y parecida a
  JavaScript, o como solución alternativa para las limitaciones del sistema de tipado
*/

(() => {
  let avenger: any = 123;
  let exists;
  let power;

  avenger = 'Dr. Strange';
  console.log(avenger.charAt(0));
  // Casting a string
  console.log((avenger as string).charAt(0));

  avenger = 150.23256415;
  console.log(avenger.toFixed(2));
  // Casting a number
  console.log((<number>avenger).toFixed(2));

  console.log(exists);
  console.log(power);
})();
