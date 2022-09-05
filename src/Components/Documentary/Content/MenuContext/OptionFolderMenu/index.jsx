import { Line } from "../../../../../Styles/Documentary/MenuContext";
import { useDispatch } from "react-redux";
import { setOpenModalFolderUpdate, setOpenModalFolderDelete } from "../../../../../Store/ModalCore";
import { getTypeFileByFolderNoSelected, getTypeFileByFolder } from "../../../../../Store/ConfigDocumentary";
import FolderUpdate from "../../../Modern/ModalesCore/FolderUpdate";
import FolderDelete from "../../../Modern/ModalesCore/FolderDelete";

const OptionFolderMenu = ({ x, y, id, name, description, cabinetId }) => {

    const dispatch = useDispatch();

    const style = () => {
        return {
          height: 140,
          width: 140,
          zIndex: 1,
          borderRadius: 10,
          backgroundColor: "#fffbf8",
          boxShadow: "0 0 1.5px 1px #F68A20",
          color: "#FCD2D1",
          display: "flex",
          flexDirection: "column",
          padding: 8,
          top: y,
          left: x,
          position: "absolute",
        };
      };

    const AbrirModalUpdateFolder = (id) => {
        dispatch(setOpenModalFolderUpdate());
        dispatch(getTypeFileByFolderNoSelected(id));
    };
    

    const AbrirModalDeleteFolder = () => {
        dispatch(setOpenModalFolderDelete());
    };

    return(
        <div style={style()}>
        <div
          onClick={() => {AbrirModalUpdateFolder(id)}}
          style={{ ...styles.div, ...styles.margin }}
        >
          Actualizar
        </div>
        
        <FolderUpdate id={id} name={name} description={description} cabinetId={cabinetId} />

        <Line />
        <div style={styles.div}>Detalles</div>
        <Line />
        <div style={styles.div} onClick={() => AbrirModalDeleteFolder()}>
          Eliminar
        </div>
        
        <FolderDelete id={id} name={name} cabinetId={cabinetId} />
      </div>
    );
};

const styles = {
    div: {
      flex: 1,
      zIndex: 1,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#fffbf8",
      color: "#F68A20",
      fontWeight: "bold",
      cursor: "pointer",
    },
    margin: {
      margin: "5px 0",
    },
  };

export default OptionFolderMenu;