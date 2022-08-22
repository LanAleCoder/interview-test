import React from "react";
import Swal from "sweetalert2";

const Alerta = () => {
  const mostrarAlerta = () => {
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
      title: "Error pa",
    });
  };
  return <button onClick={() => mostrarAlerta()}>Hola</button>;
};

export default Alerta;
