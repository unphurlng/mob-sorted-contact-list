


export function createTableTemplate(contacts) {
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


// loadContacts default export function
const tableBody = document.getElementById('table-body');

export default function loadContacts(contacts) {
    contacts.forEach(contact => {
        const dom = createTableTemplate(contact);
        tableBody.appendChild(dom);
    });
}