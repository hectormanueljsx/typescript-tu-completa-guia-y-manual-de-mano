(() => {
  const fullNameBruce = (fistName: string, lastName?: string): string => {
    return `${fistName} ${lastName || 'N/A'}`;
  };

  const nameBruce: string = fullNameBruce('Bruce');
  console.log({ nameBruce });
})();
