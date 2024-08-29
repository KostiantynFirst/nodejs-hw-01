import getAllContacts from "./getAllContacts.js";
import { createFakeContact } from '../utils/createFakeContact.js'
import writeContacts from "../utils/writeContacts.js";

const generateContacts = async (number) => {
    const contactList = await getAllContacts();
    const newContactList = Array(number).fill(0).map(createFakeContact);
    const combineContactList = [...contactList, ...newContactList];
    await writeContacts(combineContactList);
};

generateContacts(5);


