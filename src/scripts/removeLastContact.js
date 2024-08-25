import fs from 'fs';
import { PATH_DB } from '../constants/contacts.js';

function removeLastContact() {
    const contacts = JSON.parse(fs.readFileSync(PATH_DB, 'utf-8'));
    if (contacts.length > 0) {
        contacts.pop();
        fs.writeFileSync(PATH_DB, JSON.stringify(contacts, null, 2));
    } else {
        console.log('No contacts to remove.');
    }
}

removeLastContact();
