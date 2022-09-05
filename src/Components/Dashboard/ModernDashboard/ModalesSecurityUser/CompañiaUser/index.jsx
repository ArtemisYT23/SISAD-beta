import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { setOpenModalCompañiaSecurity } from "../../../../../Store/ModalSecurity";
import "../../../../../Styles/Documentary/ModalStyle/modal.css";

const useStyless = makeStyles((theme) => ({
  CompañiaEditing: {
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

const CompañiaUser = () => {
  const dispatch = useDispatch();
  const styless = useStyless();
  const { modalSecurity } = useSelector((store) => store);
  const { CompañiaEditing } = modalSecurity;

  const [compañia, setCompañia] = useState({
    id: "",
    company: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCompañia({ ...compañia, [name]: value });
  };

  const handleSubmit = async (e) => {
    console.log(compañia);
  };

  const headerCompañia = (
    <div className={styless.CompañiaEditing}>
      <form onSubmit={handleSubmit}>
        <div align="center">
          <h2 className="titulo-modal">Modificar Compañia</h2>
        </div>
        <br />
        <TextField
          value={compañia.company}
          name="company"
          onChange={handleChange}
          required={true}
          label="Compañia"
          className={styless.textfield}
        />
        <br />
        <br />
        <div align="right">
          <button className="btn-enviar">Crear</button>
          <button
            className="btn-cancelar"
            onClick={() => OpenModalChangeCompañia()}
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );

  const OpenModalChangeCompañia = () => {
    dispatch(setOpenModalCompañiaSecurity());
  };

  return (
    <div className={styless.container}>
      <Modal open={CompañiaEditing} onClose={OpenModalChangeCompañia}>
        {headerCompañia}
      </Modal>
    </div>
  );
};

export default CompañiaUser;
