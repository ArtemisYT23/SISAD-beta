import { useDispatch } from "react-redux";
import { ContainerDescription, ContainerIcon, ContainerOptions, ContainerTitle, ContainerTraditional, Title, TitleCabinet } from "../../../../../Styles/Traditional/CabinetTraditional";
import { FolderTraditional, OptionsTraditional } from "../../../../../Styles/Traditional/CabinetTraditional/Icon";
import { 
    setSelectedFolderTraditionalCore,
 } from "../../../../../Store/ActionCore"; 
 import {getTypeFileByFolderFolder } from "../../../../../Store/ConfigDocumentary";
import "./FolderDefault.css";

const FolderDefault = ({ id, name, description }) => {

    const dispatch = useDispatch();

    const OptionsUpdateFolder = (id) => {
        dispatch(setSelectedFolderTraditionalCore(id));
        dispatch(getTypeFileByFolderFolder(id));
    }

    const SelectedFolderTraditional = (index) => {
        const collection = document.getElementsByClassName("Celda");
        for (let i = 0; i < collection.length; i++){
            collection[i].style.backgroundColor = "white";
            if ( id === index) {
                document.getElementById(index).style.backgroundColor = " #f14d11 ";
            }
        }
    }

    return(
        <div id={id} className="Celda" onClick={() => {SelectedFolderTraditional(id), OptionsUpdateFolder(id)}}>
            <ContainerTraditional>
            <ContainerIcon>
                <FolderTraditional w={24} h={24} /> 
            </ContainerIcon>

            <ContainerTitle>
                <TitleCabinet>{name}</TitleCabinet>
            </ContainerTitle>

            <ContainerDescription>
                <Title>{description}</Title>
            </ContainerDescription>

            <ContainerOptions>
                <OptionsTraditional w={20} h={20} />
            </ContainerOptions>
            </ContainerTraditional>
        </div>
    );
}

export default FolderDefault;