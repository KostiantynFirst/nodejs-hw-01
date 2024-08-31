import readContacts from "../utils/readContacts.js";
import { PATH_DB } from '../constants/contacts.js';

export const getAllContacts = async () => { 
    return readContacts(PATH_DB);
};

console.log(await getAllContacts());

export default getAllContacts;

