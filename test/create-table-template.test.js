const test = QUnit.test;

QUnit.module('CREATE DA TABLE');

function createTableTemplate() {
    return `
    <tr>
        <td>Yes</td>
        <td>Conner</td>
        <td>Chad</td>
        <td>Chad, Inc.</td>
    </tr>
    `;
}

test('dynamically generate table rows from contacts', assert => {
    //arrange
    const expected = `
    <tr>
        <td>Yes</td>
        <td>Conner</td>
        <td>Chad</td>
        <td>Chad, Inc.</td>
    </tr>
    `;

    //act
    const result = createTableTemplate();

    //assert
    assert.equal(result, expected);
});