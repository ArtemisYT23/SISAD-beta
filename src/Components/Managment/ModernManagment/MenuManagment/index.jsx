import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SearchContainer, List, Titulo, Items, Icons, Name } from "../../../../Styles/Managment/Modern/MenuManagment";  
import { ListIcon } from "../../ModernManagment/MenuManagment/Item/Icon";
import { setSelectedOptionsConfig } from "../../../../Store/ConfigDocumentary";
import { getNameManagmentChange } from "../../../../Store/ModalCore"; 

const MenuManagment = () => {
    const dispatch = useDispatch();
    const { configDocument } = useSelector((store) => store);
    const { options } = configDocument;

    const selectOptions = (index, name) => {
        dispatch(setSelectedOptionsConfig(index));
        dispatch(getNameManagmentChange(name));
      };

    return(
        <SearchContainer>
      <ul>
        <List>
          <Titulo>Gabinetes</Titulo>
          {options ? (
            options.map(({ id, name }, index) => (
          <Items onClick={() => 
            selectOptions(id, name)
          }>
            <Icons>
              <ListIcon />
            </Icons>
            <Name key={index}>{name}</Name>
          </Items>
           ))
           ) : (
             <></>
           )}
        </List>
        </ul>
        </SearchContainer>
    );
};

export default MenuManagment;