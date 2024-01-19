import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Registro from './components/Registro';

const App = () => {
  const [currentView, setCurrentView] = useState('inicio');

  const navigateTo = (view) => {
    setCurrentView(view);
  }

  let currentComponent;
  switch (currentView) {
    case 'login':
      currentComponent = <Login />;
      break;
    case 'registrar':
      currentComponent = <Registro />;
      break;
    default:
      // Puedes agregar la lógica para la vista de inicio aquí
      break;
  }

  return (
    <div>
      <Navbar onNavigate={navigateTo} />
      {currentComponent}
    </div>
  );
}

export default App;
