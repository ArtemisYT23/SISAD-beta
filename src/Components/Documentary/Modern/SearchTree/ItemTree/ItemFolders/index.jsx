import { useDispatch } from "react-redux";
import { ContainerFolders, ContentItem, ContainerIcons, ContainerTitle, TitleCap } from "../../../../../../Styles/Documentary/Modern/SearchTree";
import { CarpIcons } from "../../../Search/Item/Icon";
import { setSelectedFolderCore } from "../../../../../../Store/Core";
import { setFilterDocumentDocu, AggFolderMetadataSelected, getMetadataByFolder, } from "../../../../../../Store/Documentary";
 
const ItemFolders = ({ id, name}) => {

    const dispatch = useDispatch();

    const SelectedFolder = (index) => {
        dispatch(setSelectedFolderCore(index));
        dispatch(setFilterDocumentDocu(index));
        dispatch(AggFolderMetadataSelected(index));
        dispatch(getMetadataByFolder(index));
    };

    return(
        <ContainerFolders>
            <ContentItem onClick={() => SelectedFolder(id)}>

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