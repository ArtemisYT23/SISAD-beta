import { useState } from "react";
import { Modal, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import { setOpenModalCreatedUser } from "../../../../../Store/ModalSecurity";
import { setNameChangeUser, setPasswordChangeUser, setEmailChangeUser, setNameClearUserData, setUserCreatedSecurity } from "../../../../../Store/CreatedUserNew";
import "../../../../../Styles/Documentary/ModalStyle/modal.css";

const useStyless = makeStyles((theme) => ({
  UserCreated: {
    position: "absolute",
    with: "400px",
    backgroundColor: "white",
    border: "2px solid white",
    boxShadow: theme.shadows[2],
    padding: "16px 32px 24px",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  textfield: {
    width: "100%",
  },
  container: {
    textAlign: "center",
  },
}));

const UserCreated = () => {
  const styless = useStyless();
  const dispatch = useDispatch();
  const { modalSecurity, changeUser } = useSelector((store) => store);
  const { UserCreated } = modalSecurity;
  const [dataUser, setDataUser ] = useState({});
  const [userNew, setUserNew] = useState({
    users:[]
  })


  const handleSubmit = (e) => {
    e.preventDefault();
    const id = {
      id: changeUser.id
    }
    const userName = {
      userName: changeUser.userName
    }
    const password = {
      password: changeUser.password
    }
    const email = {
      email: changeUser.email
    }
    const profileId = {
      profileId: changeUser.profileId
    }
    const businessId = {
      businessId: changeUser.businessId
    }
    const usersData = {
      usersData: changeUser.usersData
    }

    const formEnvio = Object.assign( id, userName, password, email, profileId, businessId, usersData ,dataUser);
    userNew.users.push(formEnvio);
    dispatch(setUserCreatedSecurity(userNew));
    AbrirModalCreatedUser();
    dispatch(setNameClearUserData());
  };

  const UserCreatedForm = (
    <div className={styless.UserCreated}>
      <form onSubmit={handleSubmit}>
        <div align="center">
          <h2 className="titulo-modal">Agregar Nuevo Usuario</h2>
        </div>
        <br />
        <TextField
          color="secondary"
          name="userName"
          required={true}
          label="Nombre de Usuario"
          className={styless.textfield}
          onChange={(e) => dispatch(setNameChangeUser(e.target.value))}
        />
        <br />
        <br />
        <TextField
          color="secondary"
          name="password"
          required={true}
          label="Contraseña"
          className={styless.textfield}
          onChange={(e) => dispatch(setPasswordChangeUser(e.target.value))}
        />
        <br />
        <br />
        <TextField
          color="secondary"
          name="email"
          required={true}
          label="Email"
          className={styless.textfield}
          onChange={(e) => dispatch(setEmailChangeUser(e.target.value))}
        />
        <br />
        <br />
        <div align="right">
          <button className="btn-enviar">Crear</button>
          <button
            className="btn-cancelar"
            onClick={() => AbrirModalCreatedUser()}
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );

  const AbrirModalCreatedUser = () => {
    dispatch(setOpenModalCreatedUser());
  };

  return (
    <div className={styless.container}>
      <Modal open={UserCreated} onClose={AbrirModalCreatedUser}>
        {UserCreatedForm}
      </Modal>
    </div>
  );
};

export default UserCreated;
