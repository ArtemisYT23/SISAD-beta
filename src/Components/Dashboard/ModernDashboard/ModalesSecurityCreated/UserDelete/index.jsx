import { useState, useEffect } from "react";
import { Modal } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import { Alert } from "../../../../../Styles/PageInitial/Icons/ModalesCore/IndexDelete";
import { setOpenModalDeleteUser } from "../../../../../Store/ModalSecurity";
import { setUserDeleteSecurity, setIdUserChangeUser } from "../../../../../Store/CreatedUserNew";
import "../../../../../Styles/Documentary/ModalStyle/modalDelete.css";

const useStyless = makeStyles((theme) => ({
  UserDelete: {
    position: "absolute",
    width: "400px",
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

const UserDelete = () => {
  const styless = useStyless();
  const dispatch = useDispatch();

  const { modalSecurity, changeUser } = useSelector((store) => store);
  const { UserDelete } = modalSecurity;
  const { SelectionUser, IdUsuario } = changeUser;

  useEffect(() => {
    dispatch(setIdUserChangeUser(SelectionUser?.id));  
  }, [SelectionUser]);

  const [buttonActive, setButtonActive] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setUserDeleteSecurity(IdUsuario));
    OpenModalUserDelete();
  };

  const deleteUser = (
    <div className={styless.UserDelete}>
      <form onSubmit={handleSubmit}>
        <div align="center">
          <h2 className="titulo-modal">
            ELIMINAR AL USUARIO {SelectionUser?.userName}
          </h2>
        </div>
        <div className="Icon-Alert">
          <Alert x={40} y={40} />
        </div>
        <div className="alert-Delete">
          <label>Esta seguro de </label>
          <label> eliminar este Usuario</label>
          <label></label>
        <div
            className="Acep-Delete"
            onClick={() => setButtonActive(true)}
            disabled={!buttonActive}
          >
            Aceptar
          </div>
        </div>
        <div className="container-d" align="right">
          <button
            type="submit"
            className="btn-eliminar"
            disabled={!buttonActive}
          >
            Eliminar
          </button>
          <button className="btn-cancel" onClick={() => OpenModalUserDelete()}>
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );

  const OpenModalUserDelete = () => {
    dispatch(setOpenModalDeleteUser());
  };

  return (
    <div className={styless.container}>
      <Modal open={UserDelete} onClose={OpenModalUserDelete}>
        {deleteUser}
      </Modal>
    </div>
  );
};

export default UserDelete;
