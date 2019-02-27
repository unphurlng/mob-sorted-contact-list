const test = QUnit.test;

QUnit.module('SORT CONTACTS');

const contacts = [
    { firstName: 'Alex', age: 21 },
    { firstName: 'Zoe', age: 9 },
    { firstName: 'Mack', age: 24 }
];

function sortByName(contacts) {
    const sorted = contacts.sort((a, b) => {
        if(a.firstName === b.firstName) {
            return 0;
        }
        if(a.firstName > b.firstName) {
            return 1;
        }
        return -1;
    });
    return sorted;
}

function sortByAge(contacts) {
    return contacts.sort((a, b) => {
        if(a.age === b.age) {
            return 0;
        }
        if(a.age > b.age) {
            return 1;
        }
        return -1;
    });
}

test('Sort By Name', assert => {
    //arrange (expected)
    const expected = [
        { firstName: 'Alex', age: 21 },
        { firstName: 'Mack', age: 24 },
        { firstName: 'Zoe', age: 9 }
    ];
    //act (result)
    const result = sortByName(contacts);

    //assert
    assert.deepEqual(result, expected);
});

test('Sort By Age', assert => {
    //arrange (expected)
    const expected = [
        { firstName: 'Zoe', age: 9 },
        { firstName: 'Alex', age: 21 },
        { firstName: 'Mack', age: 24 }
    ];
    //act (result)
    const result = sortByAge(contacts);

    //assert
    assert.deepEqual(result, expected);
});