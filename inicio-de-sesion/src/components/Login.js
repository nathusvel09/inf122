import React, { useState } from 'react';
import '../style/Login.css';

function Login() {
  const [usuario, setUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Usuario:', usuario);
    console.log('Contraseña:', contrasena);
  };

  return (
    <div className="login-container">
        <h2>Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <label>
          Usuario:
          <input type="text" name="usuario" value={usuario} onChange={(e) => setUsuario(e.target.value)} />
        </label>
        <br />
        <label>
          Contraseña:
          <input type="password" name="contrasena" value={contrasena} onChange={(e) => setContrasena(e.target.value)} />
        </label>
        <br />
        <div className="button-container">
          <button type="submit" className="login-button" funClik={()=>cancelIdleCallback("Login")}>Ingresar</button>
          <button type="button" className="register-button" funClik={()=>cancelIdleCallback("Login")}>Registrar</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
