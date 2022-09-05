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
  setSelectedCabinetCore,
  setFilterFoldersCore,
  setIndexbyCabinetCore,
} from "../../../../../Store/Core";
import ItemFolders from "./ItemFolders";

const ItemTree = ({ id, name }) => {
  const dispatch = useDispatch();
  const { core } = useSelector((store) => store);
  const { SelectedCabinet, FoldersCabinet } = core;

  const selectGab = (index) => {
    dispatch(setSelectedCabinetCore(index));
    dispatch(setFilterFoldersCore(index));
    dispatch(setIndexbyCabinetCore(index));
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
      <ContentItem id={id} className="Celda" onClick={() => {selectGab(id), selectedCabinet(id)}}>
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
            FoldersCabinet.map(({ id, name }) => (
              <ItemFolders id={id} name={name} key={id} />
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
