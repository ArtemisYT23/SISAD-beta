import {
  SearchContainer,
  List,
  Titulo,
  Items,
  Icons,
  Name,
} from "../../../../Styles/Managment/Modern/MenuManagment";
import { useDispatch, useSelector } from "react-redux";
import { ListIcon } from "../../../Managment/ModernManagment/MenuManagment/Item/Icon";
import { setSelectedOptionsSecurityConfig } from "../../../../Store/ConfigDocumentary";

const MenuDashboard = () => {
  const dispatch = useDispatch();
  const { configDocument } = useSelector((store) => store);
  const { optionsSecurity } = configDocument;

  const selectOptions = (index) => {
    dispatch(setSelectedOptionsSecurityConfig(index));
  };

  return (
    <SearchContainer>
      <ul>
        <List>
          <Titulo>Gabinetes</Titulo>
          {optionsSecurity ? (
            optionsSecurity.map(({ id, name }, index) => (
              <Items onClick={() => selectOptions(id)}>
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

export default MenuDashboard;
