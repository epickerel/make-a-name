import { getSillyWord } from './getSillyWord';
import { randomInt } from './randomInt';
import { selectNameDictionary } from './selectNameDictionary';
import { makeFirstUpperCase } from './makeFirstUpperCase';
import { maybeRemoveChar } from './maybeRemoveChar';

export const makeFirstName = () => {
  const useSimpleName = randomInt(99) < 35;
  let name;
  if (useSimpleName) {
    const dict = selectNameDictionary();
    name = dict[randomInt(dict.length - 1)];
  } else {
    name = getSillyWord();
  }
  name = makeFirstUpperCase(name);
  name = maybeRemoveChar(name, '-', 75);
  name = maybeRemoveChar(name, ' ', 75);
  return name;
};
