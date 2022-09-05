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


const ItemMetadata = ({ id, name, key, cabinetId }) => {
  const dispatch = useDispatch();

  const SelectedFolderMeta = (index, cabinetId) => {
    dispatch(getMetadataByFolder(index, cabinetId));
  };

  const SelectedFolder = (index) => {
    dispatch(AggFolderMetadataSelected(index));
  };

  return (
    <ContainerItemTree onClick={(e) => SelectedFolderMeta(id, cabinetId)}>
      <ContentItem onClick={(e) => SelectedFolder(id)}>
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
