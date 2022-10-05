import { useDispatch, useSelector } from "react-redux";
import {
  ContainerItemTree,
  ContainerIcons,
  ContainerTitle,
  TitleCap,
  ContentItem,
} from "../../../../../Styles/Documentary/Modern/SearchTree";
import { GabiIcons } from "../../Search/Item/Icon";
import {
  setIndexbyCabinetCore,
} from "../../../../../Store/Core";
import {
  setSelectedCabinetCore,
  setFilterFoldersCore,
  setSaveElementBreak,
  setClearElementFolderBreak,
} from "../../../../../Store/ActionCore";
import ItemFolders from "./ItemFolders";
import { getNameGlobalChange } from "../../../../../Store/ModalCore";

const ItemTree = ({ id, name }) => {
  const dispatch = useDispatch();
  const { actionCore } = useSelector((store) => store);
  const { SelectedCabinet, FoldersCabinet } = actionCore;

  const selectGab = (index, name) => {
    dispatch(setSaveElementBreak(index));
    dispatch(setClearElementFolderBreak());
    dispatch(setSelectedCabinetCore(index));
    dispatch(setFilterFoldersCore(index));
    dispatch(setIndexbyCabinetCore(index));
    dispatch(getNameGlobalChange(name));
  };

  const selectedCabinet = (index) => {
    const collection = document.getElementsByClassName("Celda");
    for (let i = 0; i < collection.length; i++) {
      collection[i].style.backgroundColor = "white";
      collection[i].style.color = "#c4c4c4";
      if (id === index) {
        document.getElementById(index).style.backgroundColor = "#F68A20";
        document.getElementById(index).style.color = "#e9e6e6";
      }
    }
  };

  return (
    <ContainerItemTree>
      <ContentItem id={id} className="Celda" onClick={() => {selectGab(id, name), selectedCabinet(id)}}>
        <ContainerIcons>
          <GabiIcons x={20} y={20} />
        </ContainerIcons>

        <ContainerTitle>
          <TitleCap>{name}</TitleCap>
        </ContainerTitle>
      </ContentItem>

      {SelectedCabinet?.id === id && (
        <>
          {FoldersCabinet ? (
            FoldersCabinet.map(({ id, name, cabinetId }) => (
              <ItemFolders id={id} name={name} key={id} cabinetId={cabinetId}/>
            ))
          ) : (
            <></>
          )}
        </>
      )}
    </ContainerItemTree>
  );
};

export default ItemTree;
