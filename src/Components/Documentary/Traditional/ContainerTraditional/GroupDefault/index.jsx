import { ContainerDescription, ContainerIcon, ContainerOptions, ContainerTitle, ContainerTraditional, Title, TitleCabinet } from "../../../../../Styles/Traditional/CabinetTraditional";
import { CabinetTraditional, OptionsTraditional } from "../../../../../Styles/Traditional/CabinetTraditional/Icon";
import { useDispatch } from "react-redux";
import { setSelectedGroupNotSelectedCore } from "../../../../../Store/Core";
import "./GroupDefault.css";

const GroupDefault = ({ key, index, id, name, description }) => {

    const dispatch = useDispatch();

    const SelectedGroup = (id) => {
        dispatch(setSelectedGroupNotSelectedCore(id));
        const collection = document.getElementsByClassName("Celda");
        for (let i = 0; i < collection.length; i++){
            collection[i].style.backgroundColor = "white";
            if ( id === index) {
                document.getElementById(index).style.backgroundColor = " #dad8d8 ";
            }
        }
    };

    return(
        <div className="Celda" id={id} onClick={() => SelectedGroup(id)}>
            <ContainerTraditional>
            <ContainerIcon>
            <CabinetTraditional w={24} h={24}/>
            </ContainerIcon>

            <ContainerTitle>
                <TitleCabinet>{name}</TitleCabinet>
            </ContainerTitle>

            <ContainerDescription>
                <Title>{description}</Title>
            </ContainerDescription>

            <ContainerOptions>
                <OptionsTraditional w={20} h={20}/>
            </ContainerOptions>
            </ContainerTraditional>
        </div>
    );
}

export default GroupDefault;