(() => {
  function genericFunction<T>(argument: T): T {
    return argument;
  }

  const genericFunctionArrow = <T>(argument: T): T => argument;

  console.log(genericFunction(3.141618).toFixed(2));
  console.log(genericFunction(new Date()).getDate());

  console.log(genericFunctionArrow(3.141618).toFixed(2));
  console.log(genericFunctionArrow(new Date()).getDate());
})();
