import { useDispatch, useSelector } from "react-redux";
import { CarpIcons } from "../../Search/Item/Icon";
import {
  ContainerItemTree,
  ContentItem,
  ContainerIcons,
  ContainerTitle,
  TitleCap,
} from "../../../../../Styles/Documentary/Modern/SearchTree";
import {
  getMetadataByFolder,
  AggFolderMetadataSelected,
} from "../../../../../Store/Documentary";
import { getTypeFileByFolder } from "../../../../../Store/ConfigDocumentary";
import { getNameGlobalChange } from "../../../../../Store/ModalCore";
import { getMetadataLogbyFolder } from "../../../../../Store/Documentary";


const ItemMetadata = ({ id, name, key, cabinetId }) => {
  const dispatch = useDispatch();

  const SelectedFolderMeta = (index, cabinetId) => {
    dispatch(getMetadataByFolder(index, cabinetId));
  };

  const SelectedFolder = (index, name) => {
    dispatch(getNameGlobalChange(name));
    dispatch(AggFolderMetadataSelected(index));
    dispatch(getTypeFileByFolder(index));
    dispatch(getMetadataLogbyFolder(index));
  };

  return (
    <ContainerItemTree onClick={(e) => SelectedFolderMeta(id, cabinetId)}>
      <ContentItem onClick={(e) => SelectedFolder(id, name)}>
        <ContainerIcons>
          <CarpIcons x={24} y={24} />
        </ContainerIcons>

        <ContainerTitle>
          <TitleCap>{name}</TitleCap>
        </ContainerTitle>
      </ContentItem>
    </ContainerItemTree>
  );
};

export default ItemMetadata;
