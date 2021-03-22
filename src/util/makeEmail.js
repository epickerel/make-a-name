export const makeEmail = (firstName, lastName) =>
  `${firstName.replace(/ /g, '')}.${lastName.replace(
    / /g,
    '',
  )}@mailinator.com`.toLowerCase();
