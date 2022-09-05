import "../../../../../Styles/Traditional/MetaConsult/TableIndex.css";
import { useEffect, useState } from "react";
import { Modal } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import { setOpenModalFilesMetadata } from "../../../../../Store/ModalDocumentary";
import ItemModalFile from "./ItemModalFile";
import "../../../../../Styles/Documentary/ModalStyle/modal.css";

const useStyless = makeStyles((theme) => ({
  modalFiles: {
    position: "absolute",
    width: "750px",
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

const ModalesFilesGetAll = () => {
  const dispatch = useDispatch();
  const styless = useStyless();

  const { modalDocumentary, documentary } = useSelector((store) => store);
  const { modalFiles } = modalDocumentary;
  const { FileByDocument } = documentary;

  const filesContainer = (
    <div className={styless.modalFiles}>
      <form>
        <div align="center">
          <h2 className="titulo-modal">Archivos Cargados</h2>
        </div>
        <div className="table-second">
          <div className="HeaderTable">
            <button>Actual</button>
            {/* <button>Arriendos</button>
            <button>Legales</button> */}
          </div>
          <table className="Table-Files">
            <thead>
              <th>Nombre</th>
              <th>Tipo Archivo</th>
              <th>descripcion</th>
              <th>Tipo Doc.</th>
              <th>Ver/Grabar</th>
            </thead>
            {FileByDocument.map((file, index) => (
              <ItemModalFile id={file.id} name={file.name} description={file.description} extension={file.extension} file={file.file} index={index+1} documentId={file.documentId} fileTypeId={file.fileTypeId}/>
            ))}
          </table>
        </div>
        <br />
        <div align="right">
          {/* <button className="btn-enviar">Crear</button> */}
          {/* <button className="btn-cancelar" onClick={() => abrirCerrarModal()}>
            Cancelar
          </button> */}
        </div>
      </form>
    </div>
  );

  const abrirCerrarModal = () => {
    dispatch(setOpenModalFilesMetadata());
  };

  return (
    <div className={styless.container}>
      <Modal open={modalFiles} onClose={abrirCerrarModal}>
        {filesContainer}
      </Modal>
    </div>
  );
};

export default ModalesFilesGetAll;
