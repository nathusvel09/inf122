import React, { useState } from 'react';
import '../style/Registro.css';

function Registro() {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [contrasena, setContrasena] = useState('');

  const handleRegistro = () => {
    console.log('Nombre:', nombre);
    console.log('Apellido:', apellido);
    console.log('Contraseña:', contrasena);
  };

  return (
    <div className="registro-container">
      <h2>Registro</h2>
      <form className="registro-form" onSubmit={(e) => e.preventDefault()}>
        <label>
          Nombre:
          <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
        </label>
        <br />
        <label>
          Apellido:
          <input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} />
        </label>
        <br />
        <label>
          Contraseña:
          <input type="password" value={contrasena} onChange={(e) => setContrasena(e.target.value)} />
        </label>
        <br />
        <button type="button" onClick={handleRegistro}>Registrar</button>
      </form>
    </div>
  );
}

export default Registro;
