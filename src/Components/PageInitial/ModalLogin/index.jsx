import { Modal } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setOpenModalLoginCore, LoginSuccessCore } from "../../../Store/ModalCore";
import "../../../Styles/PageInitial/ModalLogin/ModalLogin.css";
import { useNavigate } from "react-router-dom";
import FondoCentral from "../../../../assets/images/fondoCentral.png";
import FontCF from "../../../../assets/images/CentralNav.png";
import IconNew from "../../../../assets/images/iconoNew.png";

const useStyless = makeStyles((theme) => ({
  textfield: {
    width: "100%",
  },
  container: {
    textAlign: "center",
  },
}));

const ModalLogin = () => {
  const dispatch = useDispatch();
  const styless = useStyless();
  const navigate = useNavigate();


  const { modalCore } = useSelector((store) => store);
  const { ModalLogin } = modalCore;

  const handleSubmit = (e) => {
    dispatch(LoginSuccessCore());
    navigate("documentary");
  };

  const style = () => {
    return{
      backgroundImage: `url('${FondoCentral}')`,
    }
  }

  const fondoCF = () => {
    return{
      backgroundImage: `url('${FontCF}')`,
    }
  }

  const icon = () => {
    return{
      backgroundImage: `url('${IconNew}')`,
    }
  }

  const modalLogin = (
    <div className="ContainerModal">
      <div className="Carrusel" style={style()}>
        <div className="FondoCF" style={fondoCF()}/>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="FormData">
          <div>
            <div className="IconsCF">
              <div className="IconContent" style={icon()}/>
            </div>
            <div className="DataCF">
              <input 
                required
                className="IngresoData" 
                placeholder="Nombre del Usuario" />
              <input
                required
                type="password"
                className="IngresoData"
                placeholder="Contraseña"
              />
              <div className="Content-Rec">
                <a className="Recuperation" href="/">
                  Olvide mi contraseña
                </a>
              </div>
            </div>
            <div className="ButtonLogin">
              <button>Iniciar Sesión</button>
              <button className="LastChild" onClick={(e) => dispatch(setOpenModalLoginCore())}>
                Cancelar
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );

  const OpenModalLoginCore = () => {
    dispatch(setOpenModalLoginCore());
  };

  return (
    <div className={styless.container}>
      <Modal open={ModalLogin} onClose={OpenModalLoginCore}>
        {modalLogin}
      </Modal>
    </div>
  );
};

export default ModalLogin;
