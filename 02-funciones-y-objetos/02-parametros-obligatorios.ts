(() => {
  const fullNameTony = (fistName: string, lastName: string): string => {
    return `${fistName} ${lastName}`;
  };

  const nameTony: string = fullNameTony('Tony', 'Stark');
  console.log({ nameTony });
})();
