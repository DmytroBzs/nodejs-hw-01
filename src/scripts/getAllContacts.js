import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
  try {
    const contacts = await readContacts();
    return contacts;
  } catch (err) {
    console.log('Error geting all contacts: ', err);
  }
};

console.log(await getAllContacts());
