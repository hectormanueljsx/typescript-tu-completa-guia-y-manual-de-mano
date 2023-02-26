/*
  Las enumeraciones permiten a un desarrollador definir un conjunto de constantes
  con nombre. El uso de enumeraciones puede facilitar la documentación de la
  intención o crear un conjunto de casos distintos
*/

(() => {
  enum AudioLevel {
    min = 1,
    medium = 5,
    max = 10,
  }

  const currentAudio: AudioLevel = AudioLevel.medium;

  console.log(currentAudio);
  console.log(AudioLevel);
})();
