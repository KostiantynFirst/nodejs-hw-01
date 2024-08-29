import readContacts from "../utils/readContacts.js";
import { PATH_DB } from '../constants/contacts.js';

export const getAllContacts = async () => { 
    return readContacts(PATH_DB);
    
};

export default getAllContacts;

console.log(await getAllContacts());
