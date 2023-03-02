(() => {
  interface Client {
    name: string;
    age: number;
    address: Address;
    getFullAddress(): string;
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
    getFullAddress(): string {
      return `${this.address.city}, ${this.address.zip}`;
    },
  };
})();
