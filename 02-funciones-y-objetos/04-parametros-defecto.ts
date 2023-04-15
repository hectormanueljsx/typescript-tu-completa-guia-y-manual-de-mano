(() => {
  const fullNameFlash = (fistName: string, lastName?: string, upper: boolean = false): string => {
    if (upper) {
      return `${fistName} ${lastName || 'N/A'}`.toUpperCase();
    } else {
      return `${fistName} ${lastName || 'N/A'}`;
    }
  };

  const nameFlash: string = fullNameFlash('Barry', 'Allen', true);
  console.log({ nameFlash });
})();
