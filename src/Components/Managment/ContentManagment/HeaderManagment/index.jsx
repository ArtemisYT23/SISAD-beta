import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { HeaderContainer } from "../../../../Styles/Documentary";
import {
  Avatar,
  HeaderUP,
  NameContainer,
  OptionContainer,
  TextName,
  InputName,
  Perfiles,
} from "../../../../Styles/Documentary/Header";
import { EditIcon, OptionsIcon } from "./Icons";
import avatar from "./avatar.png";
import logo from "./descarga.png";

const Header = () => {

  const { modalCore } = useSelector((store) => store);
  const { NameManagmentSelected } = modalCore;
  
  return (
    <HeaderContainer>
      <HeaderUP>
        <NameContainer>
        
            {NameManagmentSelected ? <TextName>{NameManagmentSelected}<EditIcon/></TextName> : <TextName>Lista de Datos<EditIcon/></TextName>}
         
          
        </NameContainer>
        <OptionContainer>
          <Perfiles>
          <Avatar src={avatar} />
          <Avatar src={logo} />
          </Perfiles>
          <OptionsIcon />
        </OptionContainer>
      </HeaderUP>
      
    </HeaderContainer>
  );
};

export default Header;
