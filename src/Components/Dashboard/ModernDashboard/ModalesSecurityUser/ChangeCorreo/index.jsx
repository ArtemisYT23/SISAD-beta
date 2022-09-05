import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { setOpenModalCorreoSecurity } from "../../../../../Store/ModalSecurity";
import "../../../../../Styles/Documentary/ModalStyle/modal.css";

const useStyless = makeStyles((theme) => ({
  CorreoEditing: {
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

const ChangeCorreo = () => {
  const dispatch = useDispatch();
  const styless = useStyless();
  const { modalSecurity } = useSelector((store) => store);
  const { CorreoEditing } = modalSecurity;

  const [correo, setCorreo] = useState({
    id: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCorreo({ ...correo, [name]: value });
  };

  const handleSubmit = async (e) => {
    console.log(correo);
  };

  const headerCorreo = (
    <div className={styless.CorreoEditing}>
      <form onSubmit={handleSubmit}>
        <div align="center">
          <h2 className="titulo-modal">Modificar Correo</h2>
        </div>
        <br />
        <TextField
          value={correo.email}
          name="email"
          onChange={handleChange}
          required={true}
          label="Email"
          className={styless.textfield}
          type="email"
        />
        <br />
        <br />
        <div align="right">
          <button className="btn-enviar">Crear</button>
          <button
            className="btn-cancelar"
            onClick={() => OpenModalChangeEmail()}
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );

  const OpenModalChangeEmail = () => {
    dispatch(setOpenModalCorreoSecurity());
  };

  return (
    <div className={styless.container}>
      <Modal open={CorreoEditing} onClose={OpenModalChangeEmail}>
        {headerCorreo}
      </Modal>
    </div>
  );
};

export default ChangeCorreo;
