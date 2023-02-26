(() => {
  const fullNameSuperman = (firstName: string, ...rest: string[]): string => {
    return `${firstName} ${rest.join(' ')}`;
  };

  const nameSuperman = fullNameSuperman('Clark', 'Joseph', 'Kent');
  console.log({ nameSuperman });
})();
