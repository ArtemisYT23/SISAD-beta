import { useState } from "react";
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
  const [ActiveText, setActiveText] = useState("");
  const { core, modalCore, documentary } = useSelector((store) => store);
  const { selected, files, selectedView } = core;
  const { SelectedDocument } = documentary;

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
            value={ActiveText}
            placeholder="Buscar Archivo"
            onChange={(e) => {
              setActiveText(e.target.value), handleChange(e.target.value);
            }}
          />
        )}

        {ActiveText != "" && SelectedDocument != "" ? (
          <ButtonClearSearch
            onClick={() => {
              getAllFilesDocument(SelectedDocument?.id), setActiveText("");
            }}
          >
            X
          </ButtonClearSearch>
        ) : (
          <></>
        )}

        {ActiveText != "" && SelectedDocument != "" ? (
          <Button
            type="button"
            icon="pi pi-sync"
            className="p-button-rounded p-button-success"
            title="ACTUALIZAR"
            onClick={() => {
              getAllFilesDocument(SelectedDocument?.id), setActiveText("");
            }}
          />
        ) : (
          <></>
        )}

        <SpaceLine />

        <Button
          type="button"
          icon="pi pi-plus"
          className="p-button-rounded p-button-success"
          title="AGREGAR"
          onClick={() => OpenModalFileUploader()}
        />

        <FileUploaderCreated DocumentId={SelectedDocument?.id} />
      </ContainerSearchFiles>
      <DocumentContainer
        onContextMenu={(e) => { handleClick(e)
        }}
      >

        {selectedView != "list" ? (
          files.map(
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
          position="top-right"
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
