import { makeFirstName } from './util/makeFirstName';
import { makeLastName } from './util/makeLastName';
import { makeEmail } from './util/makeEmail';

export const makeSillyContact = () => {
  const firstName = makeFirstName();
  const lastName = makeLastName();
  return {
    firstName,
    lastName,
    email: makeEmail(firstName, lastName),
  };
};
