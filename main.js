const form = document.getElementById('form-contact');
const names = [];
const phoneNumbers = [];

let rows = '';

form.addEventListener('submit', function (e) {
    e.preventDefault();

    addRow();
    updateTable();
})

function addRow() {
    const inputContactName = document.getElementById('contact-name');
    const inputContactPhone = document.getElementById('contact-phone');

    if (names.includes(inputContactName.value)) {
        alert(`The contact ${inputContactName.value} already exists!`);
    } else {
        names.push(inputContactName.value);
        phoneNumbers.push(inputContactPhone.value);

        let row = '<tr>';
        row += `<td>${inputContactName.value}</td>`;
        row += `<td>${inputContactPhone.value}</td>`;
        row += `</tr>`;

        rows += row;
    }

    inputContactName.value = '';
    inputContactPhone.value = '';
}

function updateTable() {
    const tablebody = document.querySelector('tbody');
    tablebody.innerHTML = rows;
}