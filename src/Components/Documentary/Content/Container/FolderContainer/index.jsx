import { useState, useEffect } from "react";
import { DocumentContainer } from "../../../../../Styles/Documentary";
import { useDispatch, useSelector } from "react-redux";
import Gridfolder from "../../../Modern/GridsContent/Gridfolder";
import {
  ContainerThreeRegister,
  ContainerFilesSection,
  InputSearch,
  ContainerCeldaAggDocument,
  AggButtonDocument,
} from "../../../../../Styles/Documentary/Modern/GridElement";
import toast, { Toaster } from "react-hot-toast";
import FileContainer from "../FileContainer";
import DocumentCreated from "../../../Modern/ModalesDocumentary/DocumentCreated";
import { setOpenModalDocumentCreated } from "../../../../../Store/ModalDocumentary";

const FolderContainer = () => {
  const dispatch = useDispatch();
  const [isTrue, setIsTrue] = useState(true);
  const { actionCore, documentary, viewCore, sesion } = useSelector(
    (store) => store
  );
  const { DocumentFolder } = documentary;
  const { SelectedCabinet, SelectedFolder } = actionCore;
  const { selected, selectedView } = viewCore;
  const { RolSesion } = sesion;

  useEffect(() => {
    if (RolSesion[2] == "Administrator") {
      setIsTrue(false);
    }if (RolSesion[2] == "Writer"){
      setIsTrue(false);
    }
  }, [RolSesion]);

  const OpenModalDocumentCreated = () => {
    dispatch(setOpenModalDocumentCreated());
  };

  return (
    <DocumentContainer>
      <ContainerThreeRegister>
        <ContainerCeldaAggDocument>
          <AggButtonDocument
            disabled={isTrue}
            onClick={() => OpenModalDocumentCreated()}
          >
            Nuevo Documento
          </AggButtonDocument>
          <DocumentCreated folderId={SelectedFolder?.id} />
        </ContainerCeldaAggDocument>
        <br />
        {/* <InputSearch placeholder="Buscar" /> */}
        {selected === "folder" && selectedView === "grid" ? (
          DocumentFolder.map(({ id, folderId, sequentialId }, index) => (
            <Gridfolder
              key={index}
              id={id}
              folderId={folderId}
              sequentialId={sequentialId}
              element="document"
              cabinetId={SelectedCabinet?.id}
            />
          ))
        ) : (
          <></>
        )}
      </ContainerThreeRegister>

      <ContainerFilesSection>
        <FileContainer />
      </ContainerFilesSection>

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
  );
};

export default FolderContainer;
