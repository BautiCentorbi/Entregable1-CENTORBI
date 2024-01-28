let cantidadJugadores = parseInt(prompt("Ingrese la cantidad de jugadores que desea analizar"));
let jugadoresTotales = [];

for (let i = 0; i < cantidadJugadores; i++) {
    jugadoresTotales[i] = [prompt("Nombre Jugador " + (i + 1)), 0];
}

let partidosTotales = parseInt(prompt("Ingrese la cantidad de partidos que desee analizar"));
let puntosPartido = [];

// PUNTOS
function promediarPuntos() {
    for (let m = 0; m < partidosTotales; m++) {
        for (let i = 0; i < cantidadJugadores; i++) {
            puntosPartido[m] = puntosPartido[m] || []
            puntosPartido[m][i] = parseInt(prompt(`¿Cuántos puntos hizo ${jugadoresTotales[i][0]} en el partido ${m + 1}?`))
        }
    }
    for (let i = 0; i < cantidadJugadores; i++) {
        let totalPuntos = 0;

        for (let m = 0; m < partidosTotales; m++) {
            totalPuntos += puntosPartido[m][i];
        }

        const promedioPuntos = totalPuntos / partidosTotales
        console.log(`El jugador ${jugadoresTotales[i][0]} hizo un promedio de ${promedioPuntos} por partido`)
    }
}

// REBOTES
let rebotesPartido = [];

function promediarRebotes() {
    for (let m = 0; m < partidosTotales; m++) {
        for (let i = 0; i < cantidadJugadores; i++) {
            rebotesPartido[m] = rebotesPartido[m] || [];
            rebotesPartido[m][i] = parseInt(prompt(`¿Cuántos rebotes hizo ${jugadoresTotales[i][0]} en el partido ${m + 1}?`));
        }
    }  
    for (let i = 0; i < cantidadJugadores; i++) {
        let totalRebotes = 0;

        for (let m = 0; m < partidosTotales; m++) {
            totalRebotes += rebotesPartido[m][i];
        }

        const promedioRebotes = totalRebotes / partidosTotales
        console.log(`El jugador ${jugadoresTotales[i][0]} hizo un promedio de ${promedioRebotes} por partido`)
    }
}

// ASISTENCIAS
let asistenciasPartido = [];

function promediarAsistencias() {
    for (let m = 0; m < partidosTotales; m++) {
        for (let i = 0; i < cantidadJugadores; i++) {
            asistenciasPartido[m] = asistenciasPartido[m] || [];
            asistenciasPartido[m][i] = parseInt(prompt(`¿Cuántas asistencias hizo ${jugadoresTotales[i][0]} en el partido ${m + 1}?`));
        }
    }    
    for (let i = 0; i < cantidadJugadores; i++) {
        let totalAsistencias = 0;

        for (let m = 0; m < partidosTotales; m++) {
            totalAsistencias += asistenciasPartido[m][i];
        }

        const promedioAsistencias = totalAsistencias / partidosTotales
        console.log(`El jugador ${jugadoresTotales[i][0]} hizo un promedio de ${promedioAsistencias} por partido`)
    }
}

let funcionamiento = true

while (funcionamiento == true) {
    let decisionUsuario = parseInt(prompt("¿Qué estadística deseas calcular? Selecciona el número correspondiente a cada acción por favor:\n 1. Puntos\n 2. Rebotes\n 3. Asitencias\n 4. Salir"))
    switch (decisionUsuario){
        case 1:
            promediarPuntos()
            break;
        case 2:
            promediarRebotes()
            break;
        case 3:
            promediarAsistencias()
            break;
        case 4:
            funcionamiento = false
            break;
        default:
            alert(`Has ingresado un valor incorrecto, por favor intenta de nuevo`)
            break;
    }
    if (funcionamiento) {
        let usoSimulador = prompt("¿Deseas realizar otro cálculo? Si/No").toLowerCase()
        if (usoSimulador == "no"){
            funcionamiento = false
        } else if (usoSimulador !== ""){
            alert("Has ingresado una opción incorrecta, por favor intenta de nuevo")
        }
    }
}

