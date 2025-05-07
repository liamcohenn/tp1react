import React from 'react';
import "./cita.css"

const Cita = ({ mascota, dueño, fecha, hora, sintomas }) => {
  return (
    <div className="cita">
      <p>Mascota: <span>{mascota}</span></p>
      <p>Dueño: <span>{dueño}</span></p>
      <p>Fecha: <span>{fecha}</span></p>
      <p>Hora: <span>{hora}</span></p>
      <p>Sintomas: <span>{sintomas}</span></p>
      <button class="button elimnar u-full-width">Eliminar ×</button>

    </div>
  );
};

export default Cita;
