import * as fs from "node:fs/promises";
import { PATH_DB } from '../constants/contacts.js';

const writeContacts = async(contacts) => fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));

export default writeContacts;
