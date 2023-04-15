(() => {
  interface Auto {
    encender: boolean;
    velocidadMaxima: number;
    acelear(): void;
  }

  const conducirBatimovil = (auto: Auto): void => {
    auto.encender = true;
    auto.velocidadMaxima = 100;
    auto.acelear();
  };

  const batimovil: Auto = {
    encender: false,
    velocidadMaxima: 0,
    acelear(): void {
      console.log('...... gogogo!!!');
    },
  };

  interface Guason {
    reir?: boolean;
    comer?: boolean;
    llorar?: boolean;
  }

  const guason: Guason = {
    reir: true,
    comer: true,
    llorar: false,
  };

  const reir = (guason: Guason): void => {
    if (guason.reir) {
      console.log('JAJAJAJA');
    }
  };

  interface CiudadGotica {
    (ciudadanos: string[]): number;
  }

  const ciudadGotica: CiudadGotica = (ciudadanos: string[]): number => {
    return ciudadanos.length;
  };

  interface DataPersona {
    nombre: string;
    edad: number;
    sexo: string;
    estadoCivil: string;
    imprimirBio(): void;
  }

  class Persona implements DataPersona {
    constructor(public nombre: string, public edad: number, public sexo: string, public estadoCivil: string) {}

    imprimirBio(): void {}
  }
})();
