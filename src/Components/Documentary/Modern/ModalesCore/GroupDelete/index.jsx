import { useState } from "react";
import { Modal } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch , useSelector } from "react-redux";
import { setOpenModalGroupDelete } from "../../../../../Store/ModalCore";
import "../../../../../Styles/Documentary/ModalStyle/modalDelete.css";
import { DeleteGroupNew } from "../../../../../Store/Core";

const useStyless = makeStyles((theme) => ({
    GroupDelete: {
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
    }
  }));

const GroupDelete = ({id, name}) => {

    const styless = useStyless();
    const dispatch = useDispatch();
    const { modalCore } = useSelector((store) => store);
    const { GroupDelete } = modalCore;

    const [Group, setGroup] = useState({
        id,
        name: "",
        description: "",
      });
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(DeleteGroupNew(Group, id));
        OpenModalDeleteGroup();
    };

    const deleteGroup = (
        <div className={styless.GroupDelete}>
            <form onSubmit={handleSubmit}>
                <div align="center">
                  <h2 className="titulo-modal">Eliminar el gabinete {name}</h2>
                </div>
                <div className="container-d" align="right">
                <button type="submit" className="btn-eliminar">Eliminar</button>
                <button className="btn-cancel" onClick={() => OpenModalDeleteGroup()}>Cancelar</button>
                </div>
            </form>
        </div>
    );

    const OpenModalDeleteGroup = () => {
        dispatch(setOpenModalGroupDelete());
    };

    return(
        <div className={styless.container}>
        <Modal open={GroupDelete} onClose={OpenModalDeleteGroup}>
          {deleteGroup}
        </Modal>
      </div>
    );
} 

export default GroupDelete;