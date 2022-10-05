import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  DocumentContainer,
  ContainerSearchFiles,
  InputSearch,
  ButtonClearSearch,
  SpaceLine,
} from "../../../../../Styles/Documentary";
import { setOpenMenuContextFile } from "../../../../../Store/ModalCore";
import {
  setFilterFilesByName,
  getFileAllDocument,
} from "../../../../../Store/Core";
import GridFiles from "../../../Modern/GridsContent/GridFiles";
import GridFilesDefault from "../../../Modern/GridsContent/GridFilesDefault";
import { Button } from "primereact/button";
import "../../../../../Styles/Documentary/ModalStyle/modal.css";
import toast, { Toaster } from "react-hot-toast";
import FileUploaderCreated from "../../../Modern/ModalesDocumentary/FileUploaderCreated";
import { setOpenModalUploadFile } from "../../../../../Store/ModalDocumentary";

const FileContainer = () => {
  const dispatch = useDispatch();
  const [Open, setOpen] = useState(false);
  const [isTrue, setIsTrue] = useState(true);
  const [activeText, setActiveText] = useState("");
  const { core, modalCore, documentary, sesion } = useSelector((store) => store);
  const { selected, files, selectedView } = core;
  const { SelectedDocument } = documentary;
  const { RolSesion } = sesion;

  const handleClick = (e) => {
    dispatch(setOpenMenuContextFile());
  };

  const OpenSearchFiles = () => {
    setOpen(!Open);
  };

  const handleChange = (text) => {
    dispatch(setFilterFilesByName(text));
  };

  const getAllFilesDocument = (index) => {
    dispatch(getFileAllDocument(index));
  };

  const OpenModalFileUploader = () => {
    dispatch(setOpenModalUploadFile());
  };

  useEffect(() => {
    if (RolSesion[2] == "Administrator") {
      setIsTrue(false);
    }if (RolSesion[2] == "Writer"){
      setIsTrue(false);
    }
  }, [RolSesion]);

  function searchingTerm(term){
    return function(x){
      return x.name.toLowerCase().includes(term) || !term;
    }
  }

  return (
    <>
      <ContainerSearchFiles>
        <SpaceLine />
        <SpaceLine />
        <SpaceLine />
        <Button
          type="button"
          icon="pi pi-search"
          className="p-button-rounded p-button-warning"
          title="BUSCAR"
          onClick={() => OpenSearchFiles()}
        />

        <SpaceLine />

        {Open && (
          <InputSearch
            type="text"
            placeholder="Buscar Archivo"
            onChange={(e) => {
              setActiveText(e.target.value);
            }}
          />
        )}

        <SpaceLine />
          
        <Button
          type="button"
          icon="pi pi-plus"
          className="p-button-rounded p-button-success"
          title="AGREGAR"
          disabled={isTrue}
          onClick={() => OpenModalFileUploader()}
        />

        <FileUploaderCreated DocumentId={SelectedDocument?.id} />
      </ContainerSearchFiles>
      <DocumentContainer
        onContextMenu={(e) => { handleClick(e)
        }}
      >

        {selectedView != "list" ? (
          files.filter(searchingTerm(activeText)).map(
            (
              {
                id,
                extension,
                name,
                description,
                fileTypeId,
                documentId,
                file,
                fileTypeName
              },
              index
            ) => (
              <GridFiles
                key={index}
                id={id}
                extension={extension}
                fileTypeId={fileTypeId}
                documentId={documentId}
                name={name}
                description={description}
                file={file}
                fileTypeName={fileTypeName}
                element="archivos"
              />
            )
          )
        ) : (
          <></>
        )}

        {files == "" ? <GridFilesDefault /> : <></>}

        <Toaster
          position="bottom-right"
          toastOptions={{
            className: "",
            duration: 4000,
            style: {
              background: "#F68A20",
              color: "#fff",
            },
          }}
        />
      </DocumentContainer>
    </>
  );
};

export default FileContainer;
