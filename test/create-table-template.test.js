const test = QUnit.test;

QUnit.module('CREATE DA TABLE');

const contacts = {
    isActive: false,
    firstName: 'Conner',
    lastName: 'Chad',
    company: 'Chad, Inc.'
};

function createTableTemplate(contacts) {
    const html = /*html*/`
    <tr>
        <td>${contacts.isActive ? 'Yes' : 'No' }</td>
        <td>${contacts.firstName}</td>
        <td>${contacts.lastName}</td>
        <td>${contacts.company}</td>
    </tr>
    `;
    const template = document.createElement('template');
    template.innerHTML = html;
    const dom = template.content;
    return dom;
}

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

