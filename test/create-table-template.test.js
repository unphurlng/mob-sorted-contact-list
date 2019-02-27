import { createTableTemplate } from '../src/load-contacts.js';
const test = QUnit.test;

QUnit.module('CREATE DA TABLE');

const contacts = {
    isActive: false,
    firstName: 'Conner',
    lastName: 'Chad',
    company: 'Chad, Inc.'
};

test('dynamically generate table rows from contacts', assert => {
    //arrange
    const expected = `
    <tr>
        <td>No</td>
        <td>Conner</td>
        <td>Chad</td>
        <td>Chad, Inc.</td>
    </tr>
    `;

    //act
    const dom = createTableTemplate(contacts);

    //assert
    assert.htmlEqual(dom, expected);
});

