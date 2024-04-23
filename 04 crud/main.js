const data = [];

const dataTable = document.getElementById('data-table').getElementsByTagName('tbody')[0];
const dataForm = document.getElementById('data-form');

dataForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const nama = document.getElementById('nama').value;
    const nim = document.getElementById('nim').value;
    const fakultas = document.getElementById('fakultas').value;
    const prodi = document.getElementById('prodi').value;

    if (nama && nim && fakultas && prodi) {
        const newData = {
            id: data.length + 1,
            nama: nama,
            nim: nim,
            fakultas: fakultas,
            prodi: prodi
        };

        data.push(newData);
        renderData();

        dataForm.reset();
    }
});

function renderData() {
    dataTable.innerHTML = '';

    data.forEach((item, index) => {
        const row = dataTable.insertRow();

        const idCell = row.insertCell();
        const namaCell = row.insertCell();
        const nimCell = row.insertCell();
        const fakultasCell = row.insertCell();
        const prodiCell = row.insertCell();
        const actionsCell = row.insertCell();

        idCell.textContent = item.id;
        namaCell.textContent = item.nama;
        nimCell.textContent = item.nim;
        fakultasCell.textContent = item.fakultas;
        prodiCell.textContent = item.prodi;

        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.classList.add('edit-button');
        editButton.addEventListener('click', () => {
            editData(item.id);
        });

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete-button');
        deleteButton.addEventListener('click', () => {
            deleteData(item.id);
        });

        actionsCell.appendChild(editButton);
        actionsCell.appendChild(deleteButton);
    });
}

function editData(id) {
    const index = data.findIndex(item => item.id === id);

    if (index !== -1) {
        const nama = prompt('Masukkan nama baru:', data[index].nama);
        const nim = prompt('Masukkan NIM baru:', data[index].nim);
        const fakultas = prompt('Masukkan fakultas baru:', data[index].fakultas);
        const prodi = prompt('Masukkan prodi baru:', data[index].prodi);

        if (nama && nim && fakultas && prodi) {
            data[index] = {
                id: id,
                nama: nama,
                nim: nim,
                fakultas: fakultas,
                prodi: prodi
            };

            renderData();
        }
    }
}

function deleteData(id) {
    const index = data.findIndex(item => item.id === id);

    if (index !== -1) {
        data.splice(index, 1);
        renderData();
    }
}

renderData();