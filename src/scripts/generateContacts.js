import fs from 'fs';
import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

function generateContacts(count) {
    const contacts = JSON.parse(fs.readFileSync(PATH_DB, 'utf-8'));
    for (let i = 0; i < count; i++) {
        contacts.push(createFakeContact());
    }
    fs.writeFileSync(PATH_DB, JSON.stringify(contacts, null, 2));
}

generateContacts(5);