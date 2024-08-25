import fs from 'fs';
import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

function addOneContact() {
    const contacts = JSON.parse(fs.readFileSync(PATH_DB, 'utf-8'));
    contacts.push(createFakeContact());
    fs.writeFileSync(PATH_DB, JSON.stringify(contacts, null, 2));
}

addOneContact();