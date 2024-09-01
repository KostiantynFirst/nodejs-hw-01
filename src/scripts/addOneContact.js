import { createFakeContact } from "../utils/createFakeContact.js";
import { PATH_DB } from '../constants/contacts.js';
import readContacts from "../utils/readContacts.js";
import writeContacts from "../utils/writeContacts.js";

export const addOneContact = async () => {
    const contactList = await readContacts(PATH_DB);
    const newContact = createFakeContact();
    contactList.push(newContact);
    await writeContacts(contactList);
};

addOneContact();
