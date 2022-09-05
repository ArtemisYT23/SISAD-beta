import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { setOpenModalNombreSecurity } from "../../../../../Store/ModalSecurity";
import "../../../../../Styles/Documentary/ModalStyle/modal.css";

const useStyless = makeStyles((theme) => ({
  NombreEditing: {
    position: "absolute",
    width: "400px",
    backgroundColor: "white",
    border: "2px solid white",
    boxShadow: theme.shadows[2],
    padding: "16px 32px 24px",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
  },
  textfield: {
    width: "100%",
  },
  container: {
    textAlign: "center",
  },
}));

const NombreUser = () => {
  const dispatch = useDispatch();
  const styless = useStyless();
  const { modalSecurity } = useSelector((store) => store);
  const { NombreEditing } = modalSecurity;

  const [Name, setName] = useState({
    id: "",
    nombre: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setName({ ...Name, [name]: value });
  };

  const handleSubmit = async (e) => {
    console.log(Name);
  };

  const headerNombre = (
    <div className={styless.NombreEditing}>
      <form onSubmit={handleSubmit}>
        <div align="center">
          <h2 className="titulo-modal">Modificar Nombre</h2>
        </div>
        <br />
        <TextField
          value={Name.nombre}
          name="nombre"
          onChange={handleChange}
          required={true}
          label="Nombre"
          className={styless.textfield}
        />
        <br />
        <br />
        <div align="right">
          <button className="btn-enviar">Crear</button>
          <button
            className="btn-cancelar"
            onClick={() => OpenModalChangeName()}
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );

  const OpenModalChangeName = () => {
    dispatch(setOpenModalNombreSecurity());
  };

  return (
    <div className={styless.container}>
      <Modal open={NombreEditing} onClose={OpenModalChangeName}>
        {headerNombre}
      </Modal>
    </div>
  );
};

export default NombreUser;
