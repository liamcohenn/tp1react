import React from 'react';
import '../assets/App.css';

const Cita = ({ cita }) => {
  const { nombre, fecha, hora, sintomas } = cita;

  return (
    <div className="cita">
      <p><strong>Paciente:</strong> {nombre}</p>
      <p><strong>Fecha:</strong> {fecha}</p>
      <p><strong>Hora:</strong> {hora}</p>
      <p><strong>Síntomas:</strong> {sintomas}</p>
    </div>
  );
};

export default Cita;
