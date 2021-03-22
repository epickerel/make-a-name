import { makeSillyContact } from './makeSillyContact';

const main = async () => {
  const contact = makeSillyContact();
  console.log(JSON.stringify(contact, null, 2));
};

main();
