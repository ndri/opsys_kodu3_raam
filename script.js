const algus = 10; // Algne lugemis-kirjutamispea positsioon
const vahe = 20; // Punktide vertikaalne vahe pikslites
const raadius = 4; // Punktide raadius pikslites

// Globaalsed muutujad
let positsioon = algus; // Eelmise punkti asukoht
let punkte = 0; // Punktide kogus

// Käivitatakse siis, kui lehekülg laaditakse
const main = function () {

    const tabel = document.getElementById("tabel");
    const lõuend = document.getElementById("lõuend");

    // Loome algul uue tühja tabeli
    uusTabel([]);

    // Teeme lõuendi tabelilaiuseks
    lõuend.width = tabel.offsetWidth;
    // Teeme lõuendi piisavalt kõrgeks
    // 10 vahet on max, üles ja alla ka vahe, seega 12
    lõuend.height = 12 * vahe;

    // Väike näide, kustuta pärast ära
    uusTabel([10, 4, 20, 13, 37]); // see tehakse nupuvajutusel automaatselt tegelt
    joonistaPunkt(10);
    joonistaPunkt(4);
    joonistaPunkt(20);
    joonistaPunkt(13);
    joonistaPunkt(37);
    paneTeepikkus(53);
};
window.addEventListener("load", main);


// Loob uue tabeli
// Lisab "x"-id vastavalt järjendile
function uusTabel(järjend) {
    const tabel = document.getElementById("tabel");
    tabel.innerHTML = "<thead></thead><tbody></tbody>";
    const päis = tabel.children[0].insertRow();
    const keha = tabel.children[1].insertRow();

    for (let i = 0; i < 50; i++) {
        const päiselahter = päis.insertCell();
        const kehalahter = keha.insertCell();

        päiselahter.innerHTML = i < 10 ? "0" + i : i;
        if (järjend.includes(i)) {
            kehalahter.innerHTML = "x";
        } else {
            kehalahter.innerHTML = "&nbsp;";
        }
    }

    const lõuend = document.getElementById("lõuend");
    const kontekst = lõuend.getContext("2d");
    kontekst.clearRect(0, 0, lõuend.width, lõuend.height);
    positsioon = algus;
    punkte = 0;
}


function joonistaPunkt(indeks) {
    const lõuend = document.getElementById("lõuend");
    const kontekst = lõuend.getContext("2d");

    const tabel = document.getElementById("tabel");
    const lahter = tabel.children[1].children[0].children[indeks];
    const x = lahter.offsetLeft + lahter.offsetWidth / 2;

    const y = vahe + punkte * vahe;

    kontekst.beginPath();
    kontekst.arc(x, y, raadius, 0, 2 * Math.PI, true);
    kontekst.fill();

    // Kui on varasemaid punkte, teeme joone eelmise punktini
    if (punkte > 0) {
        const vanalahter = tabel.children[1].children[0].children[positsioon];
        const vanax = vanalahter.offsetLeft + vanalahter.offsetWidth / 2;
        kontekst.moveTo(x, y);
        kontekst.lineTo(vanax, y - vahe);
    }

    kontekst.stroke();
    positsioon = indeks;
    punkte++;
}

function paneTeepikkus(väärtus) {
    document.getElementById("teepikkus").innerHTML = väärtus;
}

// Käivitatakse siis, kui algoritmi nupule vajutatakse
function vajutus(algoritm) {

    // Leiame valitud järjendi
    let järjend = document.querySelector(
        "input[name=\"järjend\"]:checked"
    ).value;
    if (!järjend) {
        järjend = document.getElementById("endaoma").value;
    }

    // Muudame tabeli pealkirja vastavalt algoritmile
    document.getElementById("pealkiri").innerHTML = algoritm;

    // Teeme järjendisõnest arvujärjendi
    // nt "5,19,4,2,20,25,12" => [5, 19, 4, 20, 20, 25, 12]
    järjend = järjend.split(",").map(i => Number(i));

    // Lisame FCFS puhul 10 kohe järjendi algusesse
    //järjend.unshift(algus);
    // Tegelt ärme lisa sest nende järgi pannakse x-id

    uusTabel(järjend);
    paneTeepikkus("Sa unustasid algoritmis seda määrata");

    // Jooksutame algoritmi vastavalt nupule
    if (algoritm === "FCFS") {
        fcfs(järjend);
    } else if (algoritm === "SSTF") {
        sstf(järjend);
    } else if (algoritm === "SCAN") {
        scan(järjend);
    } else if (algoritm === "LOOK") {
        look(järjend);
    }
}


// Edu nendega
// Järjend tuleb sisse kujul [5, 19, 4, 20, 20, 25, 12]

function fcfs(järjend) {

}

function sstf(järjend) {

}

function scan(järjend) {

}

function look(järjend) {

}
