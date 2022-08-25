import React from "react";
import Input from "../Input";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import SelectInput from "../SelectInput/SelectInput";

const Form = ({ estudiante, setEstudiante }) => {
  const navigate = useNavigate();
  const handleOnChange = (e) => {
    setEstudiante({
      ...estudiante,
      [e.target.name]: e.target.value,
    });
  };
  //Destructuramos el objeto
  let {
    nombre,
    carnet,
    genero,
    telefono,
    fechaNacimiento,
    carrera,
    generoPoesia,
    direccion,
  } = estudiante;
  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (
      nombre === "" ||
      carnet === "" ||
      genero === "" ||
      telefono === "" ||
      fechaNacimiento === "" ||
      carrera === "" ||
      generoPoesia === "" ||
      direccion === ""
    ) {
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });

      Toast.fire({
        icon: "warning",
        title: "Todos los parametros son obligatorios",
      });
      return;
    }

    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(estudiante),
    };
    const urlAPI = process.env.REACT_APP_URL_API;
    fetch(`${urlAPI}participar`, options)
      .then((res) => res.json())
      .then((res) => {
        if (res.mensaje) {
          const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 6000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener("mouseenter", Swal.stopTimer);
              toast.addEventListener("mouseleave", Swal.resumeTimer);
            },
          });
          Toast.fire({
            icon: "warning",
            title: res.mensaje,
          });
          setEstudiante({
            _id: "",
            nombre: nombre,
            carnet: carnet,
            genero: genero,
            telefono: telefono,
            fechaNacimiento: fechaNacimiento,
            carrera: carrera,
            generoPoesia: generoPoesia,
            direccion: direccion,
          });
        } else {
          const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 6000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener("mouseenter", Swal.stopTimer);
              toast.addEventListener("mouseleave", Swal.resumeTimer);
            },
          });
          Toast.fire({
            icon: "success",
            title: "Registro con exito",
          });
          setEstudiante({
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
        }
      })
      .catch((err) => {
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 6000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
          },
        });

        Toast.fire({
          icon: "warning",
          title: err.error.mensaje,
        });
      });
  };
  return (
    <div className="flex bg-neutral-100 h-screen w-screen justify-center items-center">
      <div className="flex flex-col items-center">
        <h1 className="font-serif text-xl">
          ¡Inscribite en el evento de poesía!
        </h1>
        <h2 className="font-medium text-xs">
          Pratocinado por la universidad de Guatemala
        </h2>
        <form className="flex flex-col mt-4" onSubmit={handleOnSubmit}>
          <div className="flex flex-row flex-wrap w-89">
            <Input
              className="px-3 py-2 w-89"
              placeholder="Nombres completo"
              type="text"
              name="nombre"
              onChange={handleOnChange}
              value={nombre}
            />
            <Input
              className="px-3 py-2 w-44"
              placeholder="Carnet"
              type="text"
              name="carnet"
              onChange={handleOnChange}
              value={carnet}
            />
            <SelectInput
              className="px-3 py-2 w-44"
              type="text"
              name="genero"
              onChange={handleOnChange}
              valueM={"Masculino"}
              valueF={"Femenino"}
              valueO={"Otro"}
              name1={"Masculino"}
              name2="Femenino"
              name3="Otro"
              nameInput={"Selecciona tu genero"}
            />
            <Input
              className="px-3 py-2 w-44"
              placeholder="Telefono"
              type="text"
              name="telefono"
              onChange={handleOnChange}
              value={telefono}
            />
            <Input
              className="px-3 py-2 w-44"
              placeholder="Fecha de nacimiento"
              type="text"
              onFocus={(e) => (e.target.type = "date")}
              onBlur={(e) => (e.target.type = "text")}
              name="fechaNacimiento"
              onChange={handleOnChange}
              value={fechaNacimiento}
            />
            <Input
              className="px-3 py-2 w-44"
              placeholder="Carrera"
              type="text"
              name="carrera"
              onChange={handleOnChange}
              value={carrera}
            />
            <SelectInput
              className="px-3 py-2 w-44"
              placeholder="Genero de poesía"
              type="text"
              name="generoPoesia"
              onChange={handleOnChange}
              value1="Epico"
              value2="Dramatico"
              value3="Lirico"
              name1={"Epico"}
              name2="Dramatico"
              name3="Lirico"
              nameInput={"Genero de poesia"}
            />
            <Input
              className="px-3 py-2 w-89"
              placeholder="Direccion"
              name="direccion"
              onChange={handleOnChange}
              value={direccion}
            />
            <button
              to="reporte"
              className="text-xs text-center underline decoration-solid decoration-blue-700 text-blue-600 font-kollektif hover:text-blue-800 transition-colors"
              onClick={() => navigate("reporte") }
            >
              Buscar el dia en el que participo
            </button>
            <button
              type="submit"
              className="bg-black text-white w-89 m-2 justify-center py-3 px-3 rounded-md hover:bg-slate-900 active:transform active:translate-y-2 transition-all font-serif"
            >
              Registrar asistencia
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
