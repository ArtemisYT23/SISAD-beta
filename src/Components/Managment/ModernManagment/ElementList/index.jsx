import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  ElementContainerList,
  Celda,
  Secuencial,
  ListTitle,
  IconList,
  ContainerElementSecond,
  Cabecera,
  SecondTitle,
  IconAdd,
  IconAdd2,
  CeldaContainer,
  TitleContainer,
} from "../../../../Styles/Managment/Modern/ElementList";
import {
  ElementDefault,
  AddElement,
  EditElement,
  DeleteElement,
} from "../../../../Styles/Managment/Modern/ElementList/Icons";
import { getAllElementListConfig, SelectedListConfig, setElementListFilterConfig, SelectedNotSelectedListConfig } from "../../../../Store/ConfigDocumentary";
import { setOpenModalListElementCreated, setOpenModalListDataUpdate } from "../../../../Store/ModalConfig";
import ItemElement from "../ItemElement";
import ListUpdate from "../ModalConfig/ListUpdate";
import ElementCreated from "../ModalConfig/ElementCreated";

const ElementList = ({ key, con, id, name, listId }) => {

  const dispatch = useDispatch();


  const { configDocument } = useSelector((store) => store);
  const { ElementFilterList, SelectedList, ElementList } = configDocument;

  useEffect(() => {
    ElementList.length === 0 && dispatch(getAllElementListConfig());
  }, []);

  const selectElement = (index) => {
    dispatch(setElementListFilterConfig(index));
    dispatch(SelectedListConfig(index));

    const collection = document.getElementsByClassName("Celda");
      for (let i = 0; i < collection.length; i++) {
        collection[i].style.backgroundColor = "white";
        collection[i].style.color = "#c4c4c4";
        if (id === index) {
            document.getElementById(index).style.backgroundColor = "#e9e6e6";
            document.getElementById(index).style.color = " #F68A20";
      }
    }
  };

  const NotSelectedList = () => {
    dispatch(SelectedNotSelectedListConfig());
  };

  const OpenModalListElementCreated = () => {
    dispatch(setOpenModalListElementCreated());
  };

  const OpenModalListUpdate = () => {
    dispatch(setOpenModalListDataUpdate());
  };

  return (
    
    <ElementContainerList>
      <Celda id={id} className="Celda">
        <CeldaContainer>
          <Secuencial>{con}</Secuencial>
        </CeldaContainer>
        <TitleContainer onClick={(e) => {
          selectElement(id);
        }}>
        <ListTitle>{name}</ListTitle>
        </TitleContainer>
        <IconList>
          <IconAdd onClick={() => {OpenModalListElementCreated(), selectElement(id)}}>
            <AddElement />
          </IconAdd>
          <IconAdd2 onClick={() => {OpenModalListUpdate(), selectElement(id)}}>
            <EditElement />
          </IconAdd2>
          {/* <IconAdd>
            <DeleteElement />
          </IconAdd> */}
          <div onClick={() => NotSelectedList()}>
          <ElementDefault />
          </div>
        </IconList>
      </Celda>

      {listId != SelectedList &&(
      <ElementCreated listId={listId} />
      )}

      {SelectedList && (
      <ElementCreated listId={SelectedList?.id} />
      )}



      {SelectedList?.id === id && (
        <ContainerElementSecond>
          <Cabecera>
            <SecondTitle>Elementos de la lista</SecondTitle>
          </Cabecera>

            {ElementFilterList.map((ElementList, index) => 
              <ItemElement
                key={index}
                con={index+1}
                id={ElementList.id}
                nombre={ElementList.name}
                listId={SelectedList.id}
              />
          )}
           <ListUpdate id={SelectedList?.id} name={SelectedList.name} listId={SelectedList.listId}/>

        </ContainerElementSecond>
      )}
    </ElementContainerList>
  );
};

export default ElementList;
