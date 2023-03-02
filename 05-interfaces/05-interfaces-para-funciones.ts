(() => {
  interface AddTwoNumbers {
    (a: number, b: number): number;
  }

  const suma: AddTwoNumbers = (a: number, b: number) => a + b;
})();
