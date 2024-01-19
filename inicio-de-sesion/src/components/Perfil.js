import React, { useState } from 'react';
import './Perfil.css';

const Perfil = () => {
  // Estados para almacenar los datos del perfil
  const [nombre, setNombre] = useState('John');
  const [apellido, setApellido] = useState('Doe');
  const [contrasena, setContrasena] = useState('********'); // Mostrar asteriscos por seguridad

  // Estados adicionales para manejar la edición
  const [editandoNombre, setEditandoNombre] = useState(false);
  const [editandoApellido, setEditandoApellido] = useState(false);
  const [editandoContrasena, setEditandoContrasena] = useState(false);

  const handleGuardarCambios = () => {
    // Aquí puedes implementar la lógica para guardar los cambios en tu backend o donde sea necesario
    console.log('Guardando cambios...');
  };

  return (
    <div className="perfil-container">
      <h2>Mi Perfil</h2>
      <div className="perfil-datos">
        <div className="campo">
          <span>Nombre: </span>
          {editandoNombre ? (
            <input
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          ) : (
            <span>{nombre}</span>
          )}
          <button onClick={() => setEditandoNombre(!editandoNombre)}>
            {editandoNombre ? 'Guardar' : 'Editar'}
          </button>
        </div>

        <div className="campo">
          <span>Apellido: </span>
          {editandoApellido ? (
            <input
              type="text"
              value={apellido}
              onChange={(e) => setApellido(e.target.value)}
            />
          ) : (
            <span>{apellido}</span>
          )}
          <button onClick={() => setEditandoApellido(!editandoApellido)}>
            {editandoApellido ? 'Guardar' : 'Editar'}
          </button>
        </div>

        <div className="campo">
          <span>Contraseña: </span>
          {editandoContrasena ? (
            <input
              type="password"
              value={contrasena}
              onChange={(e) => setContrasena(e.target.value)}
            />
          ) : (
            <span>********</span>
          )}
          <button onClick={() => setEditandoContrasena(!editandoContrasena)}>
            {editandoContrasena ? 'Guardar' : 'Editar'}
          </button>
        </div>
      </div>

      <button className="guardar-cambios" onClick={handleGuardarCambios}>
        Guardar Cambios
      </button>
    </div>
  );
};

export default Perfil;
