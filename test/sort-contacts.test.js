
const test = QUnit.test;

QUnit.module('SORT CONTACTS');

const contacts = [
    { firstName: 'Alex', age: 21 },
    { firstName: 'Zoe', age: 9 },
    { firstName: 'Mack', age: 24 }
];

function sortContacts(contacts, sortChoice) {
    const property = sortChoice.property;
    return contacts.sort((a, b) => {
        if(a[property] === b[property]) {
            return 0;
        }
        if(a[property] > b[property]) {
            return 1;
        }
        return -1;
    });
}

test('Sort By Name', assert => {
    //arrange (expected)
    const sortChoice = { property: 'firstName' };
    const expected = [
        { firstName: 'Alex', age: 21 },
        { firstName: 'Mack', age: 24 },
        { firstName: 'Zoe', age: 9 }
    ];
    //act (result)
    const result = sortContacts(contacts, sortChoice);
    
    //assert
    assert.deepEqual(result, expected);
});

test('Sort By Age', assert => {
    //arrange (expected)
    const sortChoice = { property: 'age' };
    const expected = [
        { firstName: 'Zoe', age: 9 },
        { firstName: 'Alex', age: 21 },
        { firstName: 'Mack', age: 24 }
    ];
    //act (result)
    const result = sortContacts(contacts, sortChoice);

    //assert
    assert.deepEqual(result, expected);
});