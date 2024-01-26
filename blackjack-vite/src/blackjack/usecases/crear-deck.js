import { shuffle } from 'underscore';
export const crearDeck = (tiposDecarta, tiposEspeciales) => {
  if (!tiposDecarta) throw new Error('Tipos de carta es obligatorio');
  let deck = [];
  for (let i = 2; i <= 10; i++) {
    for (let tipo of tiposDecarta) {
      deck.push(i + tipo);
    }
  }

  for (let tipo of tiposDecarta) {
    for (let esp of tiposEspeciales) {
      deck.push(esp + tipo);
    }
  }
  return shuffle(deck);
};
