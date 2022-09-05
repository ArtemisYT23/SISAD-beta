import { Celda, ContainerCelda, Identify } from "../../../../../../Styles/Facturation/ContainerFacturation";

const CeldaText = ({id, name}) => {

    const SelectedElement = (index) => {
    const collection = document.getElementsByClassName("Celda");
    for (let i = 0; i < collection.length; i++) {
        collection[i].style.backgroundColor = "white";
        collection[i].style.color = "#c4c4c4";
        collection[i].style.fontWeight = "400";
        if (id === index) {
            document.getElementById(index).style.backgroundColor = "#c4c4c4";
            document.getElementById(index).style.color = "#f68a20";
            document.getElementById(index).style.fontWeight = "Bold";
        }
      }   
    };

    return(
            <ContainerCelda onClick={(e) => SelectedElement(id)}>
            <Identify  className="Celda">{id+1}</Identify>
            <Celda id={id} className="Celda" >{name}</Celda>
            </ContainerCelda>
    );
}

export default CeldaText;