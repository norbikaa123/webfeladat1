document.addEventListener('DOMContentLoaded', () => {
    const table = document.getElementById('crudTable').getElementsByTagName('tbody')[0];
    const form = document.getElementById('crudForm');
    const searchInput = document.getElementById('searchInput');
    let editIndex = null;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const col1 = document.getElementById('col1').value;
        const col2 = document.getElementById('col2').value;
        const col3 = document.getElementById('col3').value;

        if (!col1 || !col2 || !col3) {
            alert('Minden mező kitöltése kötelező!');
            return;
        }

        if (editIndex !== null) {
            table.rows[editIndex].cells[0].textContent = col1;
            table.rows[editIndex].cells[1].textContent = col2;
            table.rows[editIndex].cells[2].textContent = col3;
            editIndex = null;
        } else {
            const row = table.insertRow();
            row.insertCell(0).textContent = col1;
            row.insertCell(1).textContent = col2;
            row.insertCell(2).textContent = col3;

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Törlés';
            deleteButton.addEventListener('click', () => row.remove());
            row.insertCell(3).appendChild(deleteButton);
        }

        form.reset();
    });

    searchInput.addEventListener('keyup', () => {
        const filter = searchInput.value.toLowerCase();
        Array.from(table.rows).forEach(row => {
            row.style.display = row.innerText.toLowerCase().includes(filter) ? '' : 'none';
        });
    });
});

function editRow(button) {
    const row = button.parentElement.parentElement;
    document.getElementById('col1').value = row.cells[0].innerText;
    document.getElementById('col2').value = row.cells[1].innerText;
    document.getElementById('col3').value = row.cells[2].innerText;
    editIndex = row.rowIndex - 1;
}

function deleteRow(button) {
    const row = button.parentElement.parentElement;
    row.remove();
}

function sortTable(columnIndex) {
    const table = document.getElementById('crudTable');
    const rows = Array.from(table.rows).slice(1);
    const isAscending = table.rows[0].cells[columnIndex].classList.toggle('asc');
    rows.sort((a, b) => {
        const aText = a.cells[columnIndex].innerText;
        const bText = b.cells[columnIndex].innerText;
        return isAscending ? aText.localeCompare(bText) : bText.localeCompare(aText);
    });
    rows.forEach(row => table.appendChild(row));
}
