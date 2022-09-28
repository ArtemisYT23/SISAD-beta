import { Modal } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setOpenModalLoginCore,
  LoginSuccessCore,
} from "../../../Store/ModalCore";
import "../../../Styles/PageInitial/ModalLogin/ModalLogin.css";
import { setLoginUserTocken } from "../../../Store/SecurityLogin";
import FondoCentral from "../../../../assets/images/fondoCentral.png";
import FontCF from "../../../../assets/images/CentralNav.png";
import IconNew from "../../../../assets/images/iconoNew.png";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  const styless = useStyless();
  const { modalCore, sesion } = useSelector((store) => store);
  const { ModalLogin } = modalCore;
  const { TockenError, Route } = sesion;
  const [user, setUser] = useState({
    userName: "",
    password: "",
  });

  useEffect(() => {
    if(Route == 200){
      navigate("documentary")
    }
  },[Route])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(LoginSuccessCore());
    dispatch(setLoginUserTocken(user));
  };

  const style = () => {
    return {
      backgroundImage: `url('${FondoCentral}')`,
    };
  };

  const fondoCF = () => {
    return {
      backgroundImage: `url('${FontCF}')`,
    };
  };

  const icon = () => {
    return {
      backgroundImage: `url('${IconNew}')`,
    };
  };

  const modalLogin = (
    <div className="ContainerModal">
      <div className="Carrusel" style={style()}>
        <div className="FondoCF" style={fondoCF()} />
      </div>
      <form onSubmit={handleSubmit}>
        <div className="FormData">
          <div>
            <div className="IconsCF">
              <div className="IconContent" style={icon()} />
            </div>
            <div className="ErrorLoginMessage">
              {TockenError && (
                <span className="Recuperation">{TockenError}</span>
              )}
            </div>
            <br />
            <div className="DataCF">
              <input
                name="userName"
                required
                className="IngresoData"
                placeholder="Nombre del Usuario"
                onChange={handleChange}
              />
              <input
                required
                name="password"
                type="password"
                className="IngresoData"
                placeholder="Contraseña"
                onChange={handleChange}
              />
              <div className="Content-Rec">
                <a className="Recuperation" href="/">
                  Olvide mi contraseña
                </a>
              </div>
            </div>
            <div className="ButtonLogin">
              <button>Iniciar Sesión</button>
              <button
                className="LastChild"
                onClick={(e) => dispatch(setOpenModalLoginCore())}
              >
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

      <Toaster
        position="top-right"
        toastOptions={{
          className: "",
          duration: 3000,
          style: {
            background: "#F68A20",
            color: "#fff",
          },
        }}
      />
    </div>
  );
};

export default ModalLogin;
