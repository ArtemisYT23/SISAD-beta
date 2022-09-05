import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { setOpenModalFotoSecurity } from "../../../../../Store/ModalSecurity";
import "../../../../../Styles/Documentary/ModalStyle/modal.css";
import avatar from "../../../../Managment/ContentManagment/HeaderManagment/avatar.png";

const useStyless = makeStyles((theme) => ({
  FotoEditing: {
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

const ChangeFoto = () => {
  const dispatch = useDispatch();
  const styless = useStyless();
  const { modalSecurity } = useSelector((store) => store);
  const { FotoEditing } = modalSecurity;

  const headerFoto = (
    <div className={styless.FotoEditing}>
      <form>
        <div align="center">
          <h2 className="titulo-Foto">Sisad Cloud Perfil</h2>
        </div>
        <br />
        <div className="Subtitle-foto">
            <span>Foto de perfil</span>
        </div>
        <div className="Subtitle-text">
            Una foto ayudara a reconocerte y te permitara saber cuando hayas accedido a la cuenta.
        </div>
        <div className="espacio-line"/>
        <br />
        <div className="Container-Foto">
        <img className="AvatarFoto" src={avatar} />
        </div>
        <br />
        <br />
        <div className="Container-button">
          <input className="btn-SubirFoto" type="file" />
          <button
            className="btn-CancelarFoto"
            onClick={() => OpenModalChangeFoto()}
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );

  const OpenModalChangeFoto = () => {
    dispatch(setOpenModalFotoSecurity());
  };

  return (
    <div className={styless.container}>
      <Modal open={FotoEditing} onClose={OpenModalChangeFoto}>
        {headerFoto}
      </Modal>
    </div>
  );
};

export default ChangeFoto;
