import { useState, useEffect } from "react";
import { Modal, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import { setOpenModalUpdateUser } from "../../../../../Store/ModalSecurity";
import {
  setIdUserChangeUser,
  setNameChargedUser,
  setCorreoChargedUser,
  setPerfilChargedUser,
  setCreatedChargedUser,
  setUserUpdateSecurity,
} from "../../../../../Store/CreatedUserNew";
import "../../../../../Styles/Documentary/ModalStyle/modal.css";

const useStyless = makeStyles((theme) => ({
  UserUpdate: {
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

const UserUpdate = () => {
  const styless = useStyless();
  const dispatch = useDispatch();
  const { modalSecurity, changeUser } = useSelector((store) => store);
  const { UserUpdate } = modalSecurity;
  const { SelectionUser, IdUsuario, Usuario, Correo, Perfil } = changeUser;
  const [Update, setUpdate] = [{}];

  useEffect(() => {
    dispatch(setIdUserChangeUser(SelectionUser?.id));
    dispatch(setNameChargedUser(SelectionUser?.userName));
    dispatch(setCorreoChargedUser(SelectionUser?.email));
    dispatch(setPerfilChargedUser(SelectionUser?.profileId));
    dispatch(setCreatedChargedUser(SelectionUser?.createdAt));
  }, [SelectionUser]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = {
      id: changeUser.IdUsuario
    };

    const userName = {
      userName: changeUser.Usuario
    }

    const email = {
      email: changeUser.Correo
    }
    const profileId = {
      profileId: changeUser.Perfil
    }
    const businessId = {
      businessId: changeUser.business
    }
    const formEnvio = Object.assign( id, userName, email, profileId, businessId, Update);
    console.log(formEnvio);
    dispatch(setUserUpdateSecurity(IdUsuario, formEnvio));
    AbrirModalUpdateUser();
  };

  const UserUpdateForm = (
    <div className={styless.UserUpdate}>
      <form onSubmit={handleSubmit}>
        <div align="center">
          <h2 className="titulo-modal">Actualizar Usuario {SelectionUser?.userName}</h2>
        </div>
        <br />
        <TextField
          color="secondary"
          name="userName"
          required={true}
          label="Nombre de Usuario"
          className={styless.textfield}
          value={Usuario}
          onChange={(e) => dispatch(setNameChargedUser(e.target.value))}
        />
        <br />
        <br />
        <TextField
          color="secondary"
          name="email"
          required={true}
          label="Email"
          className={styless.textfield}
          value={Correo}
          onChange={(e) => dispatch(setCorreoChargedUser(e.target.value))}
        />
        <br />
        <br />
        <label className="Name">Tipo de Perfil</label>
        <select className="Selected" onChange={(e) => dispatch(setPerfilChargedUser(e.target.value))}>
          <option hidden>Modificar Rol</option>
          <option value="e4b558f3-bdab-4248-8fd2-357457090347">
            Administrador
          </option>
          <option value="cd9a8535-7747-4008-94a0-3617458c09f4">Writer</option>
          <option value="3b54b36c-2d62-4f65-b03a-50d5adcba4b3">RW</option>
          <option value="b08a660f-dcde-4602-8456-7a44a9ef6904">Reader</option>
        </select>
        <br />
        <div align="right">
          <button className="btn-enviar">Actualizar</button>
          <button
            className="btn-cancelar"
            onClick={() => AbrirModalUpdateUser()}
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );

  const AbrirModalUpdateUser = () => {
    dispatch(setOpenModalUpdateUser());
  };

  return (
    <div className={styless.container}>
      <Modal open={UserUpdate} onClose={AbrirModalUpdateUser}>
        {UserUpdateForm}
      </Modal>
    </div>
  );
};

export default UserUpdate;
