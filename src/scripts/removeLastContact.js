import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  const contacts = await readContacts();
  try {
    contacts.pop();
    await writeContacts(contacts);
  } catch (err) {
    console.log('Error removing contact: ', err);
  }
};

removeLastContact();
