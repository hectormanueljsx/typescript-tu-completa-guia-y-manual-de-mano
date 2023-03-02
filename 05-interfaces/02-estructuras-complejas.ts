(() => {
  interface Client {
    name: string;
    age: number;
    address: Address;
  }

  interface Address {
    id: number;
    zip: number;
    city: string;
  }

  const clientJuan: Client = {
    name: 'Juan',
    age: 24,
    address: {
      id: 125,
      zip: 12345,
      city: 'Mexico City',
    },
  };
})();
