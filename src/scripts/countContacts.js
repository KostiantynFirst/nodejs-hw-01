import readContacts from "../utils/readContacts.js";
import { PATH_DB } from '../constants/contacts.js';

export const countContacts = async () => {
    const contacts = await readContacts(PATH_DB);
    return contacts.length;
};
 
console.log(await countContacts());

