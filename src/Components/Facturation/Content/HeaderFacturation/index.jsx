import {
  HeaderContainer,
  HeaderUP,
  NameContainer,
  TextName,
  OptionContainer,
  Perfiles,
  Avatar,
} from "../../../../Styles/Documentary/Header";
import { EditIcon, OptionsIcon } from "../../../Documentary/Content/Header/Icons";
import { useState } from "react";
import avatar from "../../../Documentary/Content/Header/avatar.png";
import logo from "../../../Documentary/Content/Header/descarga.png";

const HeaderFacturation = () => {

    const [parentName, setParentName] = useState("Documentos Eléctronicos");

  return (
  <HeaderContainer>
    <HeaderUP>
        <NameContainer>
            <TextName>{parentName}</TextName>
            <EditIcon />
        </NameContainer>
        <OptionContainer>
            <Perfiles>
                <Avatar src={avatar}/>
                <Avatar src={logo} />
            </Perfiles>
            <OptionsIcon />
        </OptionContainer>
    </HeaderUP>
  </HeaderContainer>
  );
};

export default HeaderFacturation;
