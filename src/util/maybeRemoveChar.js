import { randomInt } from './randomInt';
export const maybeRemoveChar = (word, char, percent) =>
  randomInt(99) + 1 <= percent ? word.replace(char, '') : word;
