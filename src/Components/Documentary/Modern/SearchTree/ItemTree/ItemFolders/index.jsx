import { useDispatch } from "react-redux";
import { ContainerFolders, ContentItem, ContainerIcons, ContainerTitle, TitleCap } from "../../../../../../Styles/Documentary/Modern/SearchTree";
import { CarpIcons } from "../../../Search/Item/Icon";
import { setSelectedFolderCore } from "../../../../../../Store/ActionCore";
import { setFilterDocumentDocu, AggFolderMetadataSelected, getMetadataByFolder, } from "../../../../../../Store/Documentary";
import { getNameGlobalChange } from "../../../../../../Store/ModalCore";
 
const ItemFolders = ({ id, name, cabinetId}) => {

    const dispatch = useDispatch();

    const SelectedFolder = (index, cabinetId, name) => {
        dispatch(setSelectedFolderCore(index));
        dispatch(setFilterDocumentDocu(index));
        dispatch(AggFolderMetadataSelected(index));
        dispatch(getMetadataByFolder(index, cabinetId));
        dispatch(getNameGlobalChange(name));
    };

    const selectedFolder = (index) => {
        const collection = document.getElementsByClassName("Celda");
        for (let i = 0; i < collection.length; i++) {
          collection[i].style.backgroundColor = "white";
          collection[i].style.color = "#c4c4c4";
          if (id === index) {
            document.getElementById(index).style.backgroundColor = "#F68A20";
            document.getElementById(index).style.color = "#f8f5f5";
          }
        }
      };

    return(
        <ContainerFolders id={id} className="Celda">
            <ContentItem onClick={() => {SelectedFolder(id, cabinetId, name), selectedFolder(id)}}>

                <ContainerIcons>
                  <CarpIcons x={20} y={20}/>
                </ContainerIcons>

                <ContainerTitle>
                  <TitleCap>{name}</TitleCap>
                </ContainerTitle>

            </ContentItem>
        </ContainerFolders>
    );
}

export default ItemFolders;