import { randomInt } from './randomInt';
import UNG from 'unique-names-generator';
const {
  adjectives,
  animals,
  colors,
  countries,
  languages,
  names,
  starWars,
} = UNG;

export const selectNameDictionary = () => {
  const rand = randomInt(99);
  if (rand < 7) {
    return adjectives;
  }
  if (rand < 11) {
    return starWars;
  }
  if (rand < 15) {
    return languages;
  }
  if (rand < 20) {
    return animals;
  }
  if (rand < 22) {
    return countries;
  }
  return names;
};
