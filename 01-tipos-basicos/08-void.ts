/*
  Representa el valor devuelto de las funciones que no devuelven un valor. Es el
  tipo inferido cada vez que una función no tiene ninguna instrucción o no
  devuelve ningún valor explícito de esas instrucciones de retorno
*/

(() => {
  function callBatman(): void {
    return;
  }

  const callSuperman = (): void => {
    return;
  };

  const batman = callBatman();
  console.log(batman);
})();
