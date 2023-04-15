(() => {
  const genericFunctionArrow = <T>(argument: T): T => argument;

  interface Hero {
    name: string;
    realName: string;
  }

  interface Villain {
    name: string;
    dangerLevel: number;
  }

  const deadpool = {
    name: 'Deadpool',
    realName: 'Wade Winston Wilson',
    dangerLevel: 130,
  };

  console.log(genericFunctionArrow<Hero>(deadpool).realName);
  console.log(genericFunctionArrow<Villain>(deadpool).dangerLevel);
})();
