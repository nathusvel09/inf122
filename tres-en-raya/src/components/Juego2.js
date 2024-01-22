import React, { useState, useEffect } from 'react';
import TableroD from './TableroD';
import Modal from './Modal';

function Juego2() {
    const estadoInicial = {
        cuadros: Array(9).fill(null),
    };

    const [historial, setHistorial] = useState([estadoInicial]);
    const [numeroPaso, setNumeroPaso] = useState(0);
    const [esTurnoDeX, setEsTurnoDeX] = useState(true);
    const [mostrarModal, setMostrarModal] = useState(false);
    const [ganador, setGanador] = useState(null);

    useEffect(() => {
        if (ganador) {
            setMostrarModal(true);
        }
    }, [ganador]);

    function alHacerClic(i) {
        const nuevoHistorial = historial.slice(0, numeroPaso + 1);
        const actual = nuevoHistorial[nuevoHistorial.length - 1];
        const cuadros = actual.cuadros.slice();

        if (calcularGanador(cuadros) || cuadros[i]) {
            return;
        }

        cuadros[i] = esTurnoDeX ? 'X' : 'O';
        setHistorial([...nuevoHistorial, { cuadros }]);
        setNumeroPaso(nuevoHistorial.length);
        setEsTurnoDeX(!esTurnoDeX);

        const nuevoGanador = calcularGanador(cuadros);
        if (nuevoGanador) {
            setGanador(nuevoGanador);
        }
    }

    function saltarA(paso) {
        setNumeroPaso(paso);
        setEsTurnoDeX(paso % 2 === 0);
    }

    function reiniciarJuego() {
        setHistorial([estadoInicial]);
        setNumeroPaso(0);
        setEsTurnoDeX(true);
        setGanador(null); // Agrega esta línea para reiniciar el ganador
    }

    const actual = historial[numeroPaso];
    const movimientos = historial.map((paso, movimiento) => {
        const descripcion = movimiento ?
            'Ir al movimiento #' + movimiento :
            'Ir al inicio del juego';
            return (
                <li key={movimiento}>
                    <button onClick={() => movimiento ? saltarA(movimiento) : reiniciarJuego()}>{descripcion}</button>
                </li>
            );
    });

    let estado;
    if (ganador) {
        estado = "Ganador: " + ganador;
    } else {
        estado = "Próximo jugador: " + (esTurnoDeX ? "X" : "O");
    }

    useEffect(() => {
        if (ganador) {
            setTimeout(() => {
                alert(`¡Ganador: ${ganador}!`);
            }, 100);
        }
    });

    return (
        <div className="juego">
            <div className="tablero-juego">
                <h2>{estado}</h2>
                <TableroD 
                    cuadros={actual.cuadros} 
                    onClick={i => alHacerClic(i)}
                />
            </div>
            <div className="informacion-juego">
                <ol>{movimientos}</ol>
            </div>
            {mostrarModal && (
                <Modal ></Modal>
            )}
        </div>
    );
}

// ========================================

function calcularGanador(cuadros) {
    const lineas = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (let i = 0; i < lineas.length; i++) {
        const [a, b, c] = lineas[i];
        if (cuadros[a] && cuadros[a] === cuadros[b] && cuadros[a] === cuadros[c]) {
            return cuadros[a];
        }
    }
    return null;
}

export default Juego2;
