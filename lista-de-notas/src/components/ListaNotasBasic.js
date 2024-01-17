import React, { useState } from 'react';
import Nota from './Notas';
import '../style/style.css';

function ListaNotas() {
    const [notas, setNotas] = useState([]);
    const [nuevaNota, setNuevaNota] = useState('');

    const addNota = () => {
        if (nuevaNota.trim() === '') return;
        setNotas([...notas, { id: Date.now(), texto: nuevaNota }]);
        setNuevaNota('');
    };

    const onDelete = (id) => {
        setNotas((prevNotas) => prevNotas.filter((nota) => nota.id !== id));
    };

    const editNota = (id, nuevoTexto) => {
        setNotas((prevNotas) =>
            prevNotas.map((nota) => (nota.id === id ? { ...nota, texto: nuevoTexto } : nota))
        );
    };

    return (
        <div className='contenedor-principal'>
            <input
                className="input"
                type="text"
                value={nuevaNota}
                onChange={(e) => setNuevaNota(e.target.value)}
            />
            <button className='boton' onClick={addNota}>Agregar Nota</button>
            {notas.map((nota) => (
                <Nota
                    key={nota.id}
                    nota={nota}
                    onDelete={onDelete}
                    onEdit={editNota}
                />
            ))}
        </div>
    );
}

export default ListaNotas;