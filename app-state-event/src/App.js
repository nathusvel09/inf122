import './App.css';
import Boton from './components/Boton';
import Contador from './components/Contador';
import { useState } from 'react';

function App() {
  const [nroClicks, setNumClicks] = useState(0);
  const click1 = () => {
    setNumClicks(nroClicks - 3);
  }
  const click2 = () => {
    setNumClicks(nroClicks + 3 );
  }
  const click3 = () => {
    setNumClicks(nroClicks - 1 );
  }
  const click4 = () => {
    setNumClicks(nroClicks + 1 );
  }
  const reiniciar = () => {
    setNumClicks(0);
    console.log("Reiniciar");
  }
  return (
    <div className="App">
      <div className="contenedor-principal">
        <Contador nroClicks={nroClicks} />
        <div className='contendedor-botones'>
          <Boton texto="-3" esBotonClick={true}
            funcionClick={click1} />
          <Boton texto="+3" esBotonClick={true}
            funcionClick={click2} />
          <Boton texto="-1" esBotonClick={true}
            funcionClick={click3} />
          <Boton texto="+1" esBotonClick={true}
            funcionClick={click4} />
        </div>
        <div className='contendedor-reiniciar'>
          <Boton texto="Reiniciar" esBotonClick={false}
            funcionClick={reiniciar} />
        </div>
      </div>
    </div>
  );
}

export default App;