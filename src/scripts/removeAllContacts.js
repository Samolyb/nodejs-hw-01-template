import fs from 'fs';
import { PATH_DB } from '../constants/contacts.js';

function removeAllContacts() {
    fs.writeFileSync(PATH_DB, JSON.stringify([], null, 2));
}

removeAllContacts();
