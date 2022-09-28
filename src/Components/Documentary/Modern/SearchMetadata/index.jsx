import { useDispatch, useSelector } from "react-redux";
import { SearchContainer } from "../../../../Styles/Documentary/Modern/Search";
import {
  setSelectedCabinetCoreNoSelected,
  setFilterFoldersCore
} from "../../../../Store/ActionCore";

import {
  ContainerTitle,
  OptionsSelect,
  ContainerList,
  IdentifyName,
  ContainerIdentify,
  CabinetFilterFolder,
} from "../../../../Styles/Documentary/Modern/SearchMetadata";
import { UL } from "../../../../Styles/Documentary/Modern/SearchTree";
import ItemMetadata from "./ItemMetadata";

const SearchMetadata = () => {
  const dispatch = useDispatch();
  const { core, actionCore } = useSelector((store) => store);
  const { cabinets } = core;
  const { FoldersCabinet } = actionCore;

  const handleChange = (index) => {
    dispatch(setFilterFoldersCore(index));
  };

  const handleSelected = (index) => {
    dispatch(setSelectedCabinetCoreNoSelected(index));
  };

  return (
    <SearchContainer>
      <ContainerIdentify>
        <IdentifyName>Gabinetes</IdentifyName>
      </ContainerIdentify>
      <ContainerTitle>
        <CabinetFilterFolder
          name="id"
          onChange={(e) => {handleChange(e.target.value), handleSelected(e.target.value)}}
        >
          <option hidden>Seleccionar Gabinete</option>
          {cabinets ? (
            cabinets.map(({ id, name }, index) => (
              <OptionsSelect value={id}>{name}</OptionsSelect>
            ))
          ) : (
            <></>
          )}
        </CabinetFilterFolder>
      </ContainerTitle>

      <ContainerList>
        <ContainerIdentify>
          <IdentifyName>Carpetas</IdentifyName>
        </ContainerIdentify>
        {FoldersCabinet && (
          <UL>
            {FoldersCabinet ? (
              FoldersCabinet.map(({ id, name, cabinetId }, index) => (
                <>
                  <ItemMetadata
                    key={index}
                    id={id}
                    name={name}
                    cabinetId={cabinetId}
                  />
                </>
              ))
            ) : (
              <></>
            )}
          </UL>
        )}
      </ContainerList>
    </SearchContainer>
  );
};

export default SearchMetadata;
