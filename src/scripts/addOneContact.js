import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
  const contacts = await readContacts();
  const contact = createFakeContact();
  contacts.push(contact);
  try {
    await writeContacts(contacts);
    console.log('Success!');
  } catch (err) {
    console.log('Error writing contact: ', err);
  }
};

addOneContact();
