import writeContacts from "../utils/writeContacts.js";
import readContacts from "../utils/readContacts.js";
import { PATH_DB } from '../constants/contacts.js';

export const removeLastContact = async () => { 
    const contactList = await readContacts(PATH_DB );
    contactList.pop();
    await writeContacts(contactList);
};

removeLastContact();
