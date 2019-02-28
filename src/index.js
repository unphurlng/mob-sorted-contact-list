import contacts from '../data/contacts.js';
import loadContacts from './load-contacts.js';
import loadSort from './load-sort.js';
import sortContacts from '../src/sort-contacts.js';

loadContacts(contacts);

loadSort(sortChoices => {
    // sort contacts using sortContacts
    const sortedContacts = sortContacts(contacts, sortChoices);
    loadContacts(sortedContacts);
    // re-loading sorted contacts using loadContacts
});