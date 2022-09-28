import { useDispatch } from "react-redux";
import {
  ContainerFolders,
  ContentItem,
  ContainerIcons,
  ContainerTitle,
  TitleCap,
} from "../../../../../../Styles/Documentary/Modern/SearchTree";
import { GabiIcons } from "../../../Search/Item/Icon";
import { setSelectedCabinetCore, setFilterFoldersCore } from "../../../../../../Store/ActionCore";
import { getNameGlobalChange } from "../../../../../../Store/ModalCore";

const ItemGroups = ({ id, name }) => {
  const dispatch = useDispatch();

  const SelectedGab = (index, name) => {
    dispatch(setSelectedCabinetCore(index));
    dispatch(setFilterFoldersCore(index));
    dispatch(getNameGlobalChange(name));
  };

  return (
    <ContainerFolders>

      <ContentItem onClick={() => SelectedGab(id, name)}>

        <ContainerIcons>
          <GabiIcons x={20} y={20} />
        </ContainerIcons>

        <ContainerTitle>
          <TitleCap>{name}</TitleCap>
        </ContainerTitle>

      </ContentItem>
    </ContainerFolders>
  );
};

export default ItemGroups;
