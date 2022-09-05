import { TextField, Modal } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import ItemMetadata from "../ItemMetadata";
import FileUploaderCreated from "../FileUploaderCreated";
import { setOpenModalMetadataCreated, setOpenModalUploadFile } from "../../../../../Store/ModalDocumentary";
import { sendMetaDocument, setGetNameMetaDocument } from "../../../../../Store/Metadata";
import { setCloseMenuContextualDocument } from "../../../../../Store/ModalCore";


const useStyless = makeStyles((theme) => ({
  MetadataCreated: {
    position: "absolute",
    width: "450px",
    height: "550px",
    backgroundColor: "white",
    border: "2px solid white",
    boxShadow: theme.shadows[2],
    padding: "16px 32px 24px",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    overflowY: "scroll",
  },
  textfield: {
    width: "100%",
  },
  container: {
    textAlign: "center",
  },
}));

const MetadataCreated = ({ documentId }) => {
  const styless = useStyless();
  const dispatch = useDispatch();
  const { modalDocumentary, core, Meta } = useSelector((store) => store);
  const { MetadataCreated } = modalDocumentary;
  const { IndexAllCabinet } = core;
  const { newMetadata } = Meta; 


  const SaveMetaDocumentary = (e) => {
    e.preventDefault();
    dispatch(setOpenModalMetadataCreated());
    dispatch(setGetNameMetaDocument(documentId));
    dispatch(sendMetaDocument(newMetadata));
    dispatch(setCloseMenuContextualDocument(false));
    // dispatch(setOpenModalUploadFile());
  };  

  const metadataNew = (
    <div className={styless.MetadataCreated}>
      <form onSubmit={SaveMetaDocumentary}>
        <div align="center">
          <h2 className="titulo-modal">Crear Nueva Metadata</h2>
        </div>

        {IndexAllCabinet.map(item => (
          <ItemMetadata id={item.id} name={item.name} dataTypeId={item.dataTypeId} listId={item.listId} 
          maxValue={item.maxValue} documentId={documentId} />
        ))}
        
        
        <div align="right">
          <button className="btn-enviar">Crear</button>
          {/* <button
            className="btn-cancelar"
            onClick={() => OpenModalMetadataCreated()}
          >
            Cancelar
          </button> */}
        </div>
      </form>
    </div>
  );

  const OpenModalMetadataCreated = () => {
    dispatch(setOpenModalMetadataCreated());
  };

  return (
    <div className={styless.container}>
      <Modal open={MetadataCreated}>
        {metadataNew}
      </Modal>

      <FileUploaderCreated documentId={documentId} />
    </div>
  );
};

export default MetadataCreated;
