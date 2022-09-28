import { useDispatch, useSelector } from "react-redux";
import {
  DocumentContainer,
  ContainerSearchCabinet,
  ContainerSearchFolder,
  ContainerFiles,
  TextTitle,
  ContainerText,
} from "../../../../../Styles/Documentary";
import Gridgroup from "../../../Modern/GridsContent/Gridgroup";
import Gridcabinet from "../../../Modern/GridsContent/Gridcabinet";
import GridFiles from "../../../Modern/GridsContent/GridFiles";
import toast, { Toaster } from "react-hot-toast";

const SearchContainer = () => {
  const dispatch = useDispatch();
  const { core, documentary, configDocument, viewCore } = useSelector((store) => store);
  const { SearchFiles } = configDocument;
  const { SearchFolder } = documentary;
  const { SearchCabinet } = core;
  const { selectedView } = viewCore;

  return (
    <DocumentContainer>
      <ContainerSearchCabinet>
        <ContainerText>
          <TextTitle>Gabinetes</TextTitle>
        </ContainerText>
        {selectedView != "list" ? (
          SearchCabinet.map(({ id, name, description }, index) => (
            <Gridgroup
              key={index}
              id={id}
              name={name}
              description={description}
              element="cabinet"
            />
          ))
        ) : (
          <></>
        )}
      </ContainerSearchCabinet>

      <ContainerSearchFolder>
        <ContainerText>
          <TextTitle>Carpetas</TextTitle>
        </ContainerText>
        {selectedView != "list" ? (
          SearchFolder.map(({ id, name, description, cabinetId }, index) => (
            <Gridcabinet
              key={index}
              id={id}
              cabinetId={cabinetId}
              name={name}
              description={description}
              element="folder"
            />
          ))
        ) : (
          <></>
        )}
      </ContainerSearchFolder>

      <ContainerFiles>
        <ContainerText>
          <TextTitle>Archivos</TextTitle>
        </ContainerText>
        {selectedView != "list" ? (
          SearchFiles.map(
            (
              {
                id,
                extension,
                name,
                description,
                fileTypeId,
                fileTypeName,
                documentId,
                file,
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
                fileTypeName={fileTypeName}
                description={description}
                file={file}
                element="archivos"
              />
            )
          )
        ) : (
          <></>
        )}
      </ContainerFiles>

      <Toaster
        position="top-right"
        toastOptions={{
          className: "",
          duration: 3000,
          style: {
            background: "#F68A20",
            color: "#fff",
          },
        }}
      />
    </DocumentContainer>
  );
};

export default SearchContainer;
