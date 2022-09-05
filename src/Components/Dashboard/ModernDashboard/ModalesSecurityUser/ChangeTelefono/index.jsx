import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { setOpenModalTelefonoSecurity } from "../../../../../Store/ModalSecurity";
import "../../../../../Styles/Documentary/ModalStyle/modal.css";

const useStyless = makeStyles((theme) => ({
  TelefonoEditing: {
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

const ChangeTelefono = () => {
  const dispatch = useDispatch();
  const styless = useStyless();
  const { modalSecurity } = useSelector((store) => store);
  const { TelefonoEditing } = modalSecurity;

  const [telefono, setTelefono] = useState({
    id: "",
    cellphone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTelefono({ ...telefono, [name]: value });
  };

  const handleSubmit = async (e) => {
    console.log(telefono);
  };

  const headerTelefono = (
    <div className={styless.TelefonoEditing}>
      <form onSubmit={handleSubmit}>
        <div align="center">
          <h2 className="titulo-modal">Modificar Telefono</h2>
        </div>
        <br />
        <TextField
          value={telefono.cellphone}
          name="telefono"
          onChange={handleChange}
          required={true}
          label="Telefono"
          className={styless.textfield}
          type="number"
        />
        <br />
        <br />
        <div align="right">
          <button className="btn-enviar">Crear</button>
          <button
            className="btn-cancelar"
            onClick={() => OpenModalChangeTelefono()}
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );

  const OpenModalChangeTelefono = () => {
    dispatch(setOpenModalTelefonoSecurity());
  };

  return (
    <div className={styless.container}>
      <Modal open={TelefonoEditing} onClose={OpenModalChangeTelefono}>
        {headerTelefono}
      </Modal>
    </div>
  );
};

export default ChangeTelefono;
