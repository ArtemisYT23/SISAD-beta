import { useDispatch, useSelector } from "react-redux";
import { ContainerView } from "../../../../../Styles/Traditional";
import {
  ContainerSearchCabinet,
  ContainerSearchFolder,
  ContainerText,
  TextTitle,
} from "../../../../../Styles/Documentary";
import SearchCeldaCabinet from "../../ContainerTraditional/SearchCabinet";
import CabinetDefault from "../../../Traditional/ContainerTraditional/CabinetDefault";
import FolderDefault from "../../../Traditional/ContainerTraditional/FolderDefault";


const SearchTraditionalContainer = () => {
  
  const { viewCore, core, documentary } = useSelector((store) => store);
  const { SearchCabinet } = core;
  const { SearchFolder } = documentary;
  const { selectedView } = viewCore;  

  return (
    <>
      <ContainerView>
        <ContainerSearchCabinet>
          <ContainerText>
            <TextTitle>Gabinetes</TextTitle>
          </ContainerText>
          {selectedView != "grid" ? (
            SearchCabinet.map(({ id, name, descripcion }, index) => (
            <CabinetDefault 
                key={id}
                id={id}
                name={name}
                description={descripcion}
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
          {selectedView != "grid" ? (
            SearchFolder.map(({ id, name, descripcion }, index) => (
            <FolderDefault 
                key={id}
                id={id}
                name={name}
                description={descripcion}
                element="folder"
            />
            ))
          ) : (
            <></>
          )}
        </ContainerSearchFolder>
      </ContainerView>
    </>
  );
};

export default SearchTraditionalContainer;
