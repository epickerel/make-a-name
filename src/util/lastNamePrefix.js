import { randomInt } from './randomInt';

export const lastNamePrefix = () => {
  const rand = randomInt(999);
  if (rand < 40) {
    return 'Mac';
  }
  if (rand < 80) {
    return 'Mc';
  }
  if (rand < 81) {
    return 'Florm';
  }
  return '';
};
