import { createFakeContact } from '../utils/createFakeContact.js'
import writeContacts from "../utils/writeContacts.js";
import { PATH_DB } from '../constants/contacts.js';
import readContacts from "../utils/readContacts.js";

const generateContacts = async (number) => {
    const contactList = await readContacts(PATH_DB);
    const newContactList = Array(number).fill(0).map(createFakeContact);
    const combineContactList = [...contactList, ...newContactList];
    await writeContacts(combineContactList);
};

generateContacts(5);


