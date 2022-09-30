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
  const { configDocument, sesion } = useSelector((store) => store);
  const { optionsSecurity, optionsSecurityRead } = configDocument;
  const { RolSesion } = sesion;

  const selectOptions = (index) => {
    dispatch(setSelectedOptionsSecurityConfig(index));
  };

  return (
    <SearchContainer>
      <ul>
        <List>
          <Titulo>Seguridades</Titulo>
          {RolSesion[2] == "Administrator" && (
            <>
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
            </>
          )}

          {RolSesion[2] != "Administrator" && (
            <>
              {optionsSecurityRead ? (
                optionsSecurityRead.map(({ id, name }, index) => (
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
            </>
          )}
        </List>
      </ul>
    </SearchContainer>
  );
};

export default MenuDashboard;
