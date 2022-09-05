import { useState } from "react";
import { Modal } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import { setOpenModalConfigDelete } from "../../../../../Store/ModalConfig"
import { setIndexCabinetDeleteConfig } from "../../../../../Store/Core";
import { Alert } from "../../../../../Styles/PageInitial/Icons/ModalesCore/IndexDelete";
import "../../../../../Styles/Documentary/ModalStyle/modalDelete.css";

const useStyless = makeStyles((theme) => ({
    IndexDelete: {
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
    }
}))

const IndexDelete = ({ id, name, cabinetId, CabinetName }) => {

    const styless = useStyless();
    const dispatch = useDispatch();
    const { modalConfig } = useSelector((store) => store);
    const { IndexDelete } = modalConfig;

    const [buttonActive, setButtonActive] = useState(false);

    const [newConfig, setNewConfig] = useState({
        id,
        name,
        description: "",
        cabinetId,
        dataTypeId: "",
        listId: null,
        position: "",
        required: false,
        unique: false,
        minValue: 0,
        maxValue: 0
      });

      const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(setIndexCabinetDeleteConfig(newConfig, id,  cabinetId, CabinetName));
        OpenModalIndexDelete();
      };

      

      const deleteGab = (
        <div className={styless.IndexDelete}>
            <form onSubmit={handleSubmit}>
                <div align="center">
                    <h2 className="titulo-modal">ELIMINAR ÍNDICE {name}</h2>
                </div>
                <div className="Icon-Alert">
                    <Alert x={40} y={40} />
                </div>
                <div className="alert-Delete">
                    <label>Para que el índice</label>
                    <label>pueda ser eliminado</label>
                    <label>no debe contener registros</label>
                    <label>de datos</label>
                    <div className="Acep-Delete" onClick={() => setButtonActive(true)} disabled={!buttonActive}>Aceptar</div>
                </div>
                <div className="container-d" align="right">
                    <button type="submit" className="btn-eliminar" disabled={!buttonActive}>Eliminar</button>
                    <button className="btn-cancel" onClick={() => OpenModalIndexDelete()}>Cancelar</button>
                </div>
            </form>
        </div>
      );

      const OpenModalIndexDelete = () => {
        setButtonActive(false);
        dispatch(setOpenModalConfigDelete());
      };

    return(
        <div className={styless.container}>
            <Modal open={IndexDelete} onClose={OpenModalIndexDelete}>
              {deleteGab}
            </Modal>
        </div>
    );
}

export default IndexDelete;