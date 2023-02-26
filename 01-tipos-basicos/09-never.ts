/*
  El tipo representa valores que nunca se observan. En un tipo devuelto, esto significa
  que la función produce una excepción o finaliza la ejecución del programa
*/

(() => {
  const error = (message: string): never => {
    throw new Error(message);
  };

  error('Error');
})();
