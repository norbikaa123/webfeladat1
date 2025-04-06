const API_URL = "http://gamf.nhely.hu/ajax2/";
const CODE = "CJDYAFefg456"; // Neptun + egyedi kód

// Adatok lekérése
function readData() {
    let id = document.getElementById("readId").value;
    fetch(`${API_URL}?op=read&id=${id}&code=${CODE}`)
        .then(response => response.text()) // Először textként kezeljük
        .then(text => {
            try {
                let data = JSON.parse(text); // Megpróbáljuk JSON-ként értelmezni
                let output = document.getElementById("readResult");
                output.innerHTML = data.list.length ? 
                    data.list.map(record => `<p>ID: ${record.id} | Név: ${record.name} | Magasság: ${record.height} | Súly: ${record.weight}</p>`).join('')
                    : "<p>Nincsenek adatok!</p>";
            } catch (error) {
                console.error("Hibás JSON válasz:", text);
                document.getElementById("readResult").innerHTML = "<p>Nem sikerült az adatbetöltés!</p>";
            }
        })
        .catch(error => console.error("Hiba:", error));
}

// Új adat létrehozása
function createData() {
    let name = document.getElementById("createName").value;
    let height = document.getElementById("createHeight").value;
    let weight = document.getElementById("createWeight").value;
    
    fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `op=create&name=${name}&height=${height}&weight=${weight}&code=${CODE}`
    })
    .then(response => response.text())
    .then(result => {
        document.getElementById("createResult").innerText = `Létrehozott rekordok: ${result}`;
        readData();
    });
}

// Adat frissítése
function updateData() {
    let id = document.getElementById("updateId").value;
    let name = document.getElementById("updateName").value;
    let height = document.getElementById("updateHeight").value;
    let weight = document.getElementById("updateWeight").value;
    
    fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `op=update&id=${id}&name=${name}&height=${height}&weight=${weight}&code=${CODE}`
    })
    .then(response => response.text())
    .then(result => {
        document.getElementById("updateResult").innerText = `Frissített rekordok: ${result}`;
        readData();
    });
}

// Adat törlése
function deleteData() {
    let id = document.getElementById("deleteId").value;
    
    fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `op=delete&id=${id}&code=${CODE}`
    })
    .then(response => response.text())
    .then(result => {
        document.getElementById("deleteResult").innerText = `Törölt rekordok: ${result}`;
        readData();
    });
}

// Adatok betöltése ID alapján
function getDataForId() {
    let id = document.getElementById("updateId").value;
    fetch(`${API_URL}?op=read&id=${id}&code=${CODE}`)
        .then(response => response.text())
        .then(text => {
            try {
                let data = JSON.parse(text);
                if (data.list.length) {
                    let record = data.list[0];
                    document.getElementById("updateName").value = record.name;
                    document.getElementById("updateHeight").value = record.height;
                } else {
                    document.getElementById("updateResult").innerText = "Nincs ilyen ID-val rendelkező adat!";
                }
            } catch (error) {
                console.error("Hibás JSON válasz:", text);
                document.getElementById("updateResult").innerText = "Nem sikerült az adatbetöltés!";
            }
        })
        .catch(error => console.error("Hiba:", error));
}