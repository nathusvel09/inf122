import React from "react";
import "../style/style.css";
import { useState } from 'react';

function Ejercicio2() {
  const [tiempo, setTimer] = useState(0);

  const iniciar = () => {
    window.myTimer = setInterval(() => {
      setTimer((tiempo) => tiempo + 1);
    }, 1000);
  };
  const parar = () => {
    clearInterval(window.myTimer);
  };
  const reiniciar = () => {
    clearInterval(window.myTimer);
    setTimer(0);
  };
  return (
    <div className="container">
      <h1>Tiempo</h1>
      <span>{Math.trunc(tiempo / 60)} mins </span>
      <span>{tiempo % 60} secs</span>
      <div>
        <button onClick={iniciar} className="boton-iniciar">Iniciar</button>
        <button onClick={parar} className="boton-parar">Parar</button>
        <button onClick={reiniciar} className="boton-reiniciar">reiniciar</button>
      </div>
    </div>
  );
}

export default Ejercicio2;