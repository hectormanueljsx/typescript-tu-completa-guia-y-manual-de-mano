(() => {
  type Carro = {
    carroceria: string;
    modelo: string;
    antibalas: boolean;
    pasajeros: number;
    disparar?: () => void;
  };

  const batimovil: Carro = {
    carroceria: 'Negra',
    modelo: '6x6',
    antibalas: true,
    pasajeros: 4,
  };

  const bumblebee: Carro = {
    carroceria: 'Amarillo con negro',
    modelo: '4x2',
    antibalas: true,
    pasajeros: 4,
    disparar() {
      console.log('Disparando');
    },
  };

  type Villano = {
    nombre: string;
    edad: number | undefined;
    mutante: boolean;
  };

  const villanos: Villano[] = [
    {
      nombre: 'Lex Luthor',
      edad: 54,
      mutante: false,
    },
    {
      nombre: 'Erik Magnus Lehnsherr',
      edad: 49,
      mutante: true,
    },
    {
      nombre: 'James Logan',
      edad: undefined,
      mutante: true,
    },
  ];

  type Charles = {
    poder: string;
    estatura: number;
  };

  const charles: Charles = {
    poder: 'psiquico',
    estatura: 1.78,
  };

  type Apocalipsis = {
    lider: boolean;
    miembros: string[];
  };

  const apocalipsis: Apocalipsis = {
    lider: true,
    miembros: ['Magneto', 'Tormenta', 'Psylocke', 'Angel'],
  };

  let mystique: Charles | Apocalipsis;

  mystique = charles;
  mystique = apocalipsis;
})();
