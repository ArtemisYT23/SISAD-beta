import { ContainerDescription, ContainerIcon, ContainerOptions, ContainerTitle, ContainerTraditional, Title, TitleCabinet } from "../../../../../Styles/Traditional/CabinetTraditional";
import { CabinetTraditional, OptionsTraditional } from "../../../../../Styles/Traditional/CabinetTraditional/Icon";
import { useDispatch } from "react-redux";
import { setSelectedCabinetCoreNotTraditional } from "../../../../../Store/Core";
import "./CabinetDefault.css";

const CabinetDefault = ({ index, key, id, name, description }) => {
    
    const dispatch = useDispatch();

    const SelectedCabinet = (index) => {
        dispatch(setSelectedCabinetCoreNotTraditional(index));
        const collection = document.getElementsByClassName("Celda");
        for (let i = 0; i < collection.length; i++){
            collection[i].style.backgroundColor = "white";
            if ( id === index) {
                document.getElementById(index).style.backgroundColor = " #dad8d8 ";
            }
        }
    };

    return(
        <div id={id} className="Celda" onClick={() => SelectedCabinet(id)}>
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

export default CabinetDefault;