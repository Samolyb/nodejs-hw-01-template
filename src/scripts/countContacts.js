import fs from 'fs';
import { PATH_DB } from '../constants/contacts.js';

function countContacts() {
    const contacts = JSON.parse(fs.readFileSync(PATH_DB, 'utf-8'));
    console.log(`Total contacts: ${contacts.length}`);
}

countContacts();
