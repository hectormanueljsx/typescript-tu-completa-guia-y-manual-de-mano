(() => {
  // Tipos
  const flash: string = 'Barry Allen';
  const superman: string = 'Clark Kent';

  const existe: boolean = false;

  // Tuplas
  const parejaHeroes: [string, string] = [flash, superman];
  const villano: [string, number, boolean] = ['Lex Lutor', 5, true];

  // Arreglos
  const aliados: string[] = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];

  // Enumeraciones
  enum Fuerza {
    acuaman = 0,
    batman = 1,
    flash = 5,
    superman = 100,
  }

  const fuerzaAcuaman: Fuerza = Fuerza.acuaman;
  const fuerzaBatman: Fuerza = Fuerza.batman;
  const fuerzaFlash: Fuerza = Fuerza.flash;
  const fuerzaSuperman: Fuerza = Fuerza.superman;

  // Retorno de funciones
  function activarBatiseñal(): string {
    return 'Batiseñal activada';
  }

  function pedirAyuda(): void {
    console.log('Auxilio!!!');
  }

  // Aserciones de tipo
  const poder: any = '100';
  const largoDelPoder: number = (poder as string).length;
  console.log(largoDelPoder);
})();
