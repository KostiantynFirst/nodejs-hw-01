import readContacts from "../utils/readContacts.js";
import { PATH_DB } from '../constants/contacts.js';

const getAllContacts = async () => { 
    return readContacts(PATH_DB);
};

console.log(await getAllContacts());