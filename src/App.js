import "./App.css";
import Form from "./components/Form";
import Lista from "./components/Lista";
import { Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import Spinner from "./components/Spinner/Spinner";
function App() {
  const [estudiante, setEstudiante] = useState({
    _id: "",
    nombre: "",
    carnet: "",
    genero: "",
    telefono: "",
    fechaNacimiento: "",
    carrera: "",
    generoPoesia: "",
    direccion: "",
  });

  return (
    <div>
      <Routes>
        <Route
          path=""
          element={
            <Form estudiante={estudiante} setEstudiante={setEstudiante} />
          }
        />
        <Route path="reporte" element={<Lista />} />
        <Route path="spinner" element={<Spinner />} />
      </Routes>
    </div>
  );
}

export default App;
