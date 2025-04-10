import React from 'react';
import Cita from './cita';
import '../assets/App.css';

const Listado = ({ citas }) => {
  return (
    <div className="listado">
      <h2>Listado</h2>
      {citas.length === 0
        ? <p>No hay citas aún</p>
        : citas.map((cita) => (
            <Cita key={cita.id} cita={cita} />
          ))}
    </div>
  );
};

export default Listado;
