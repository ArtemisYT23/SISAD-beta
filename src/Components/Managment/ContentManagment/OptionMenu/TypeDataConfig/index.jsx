import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  ContentType,
  HeaderCont,
  ContentTitle,
  TitleCont,
  ContentSubtitle,
  ContentIndex,
  ContentName,
  NewContent,
  IconContainer,
} from "../../../../../Styles/Managment/ManagmentConfig/ConfigTypeData";
import { AddElement } from "../../../../../Styles/Managment/ManagmentConfig/ConfigElementList/Icons";
import { getTypeDataConfig } from "../../../../../Store/ConfigDocumentary";
import { setOpenModalTypeDataCreated } from "../../../../../Store/ModalConfig";
import TypeDataCreated from "../../../ModernManagment/ModalConfig/TypeDataCreated";
import CeldaTypeData from "../../../ModernManagment/OptionSubMenu/CeldaTypeData";
import toast, { Toaster } from "react-hot-toast";

const TypeDataConfig = () => {
  const dispatch = useDispatch();
  const { configDocument } = useSelector((store) => store);
  const { TypeData } = configDocument;

  useEffect(() => {
    TypeData.length == 0 && dispatch(getTypeDataConfig());
  }, []);

  const OpenModalTypeDataCreated = () => {
    dispatch(setOpenModalTypeDataCreated());
  };

  return (
    <ContentType>
      <HeaderCont>
        <ContentTitle>
          <ContentIndex>
            <TitleCont>N°</TitleCont>
          </ContentIndex>

          <ContentName>
            <TitleCont>Nombre</TitleCont>
          </ContentName>
        </ContentTitle>

        <ContentSubtitle>
          <TitleCont>Opciones</TitleCont>
        </ContentSubtitle>

        <NewContent onClick={() => OpenModalTypeDataCreated()}>
          <TitleCont>Nuevo</TitleCont>
          <IconContainer>
            <AddElement x={21} y={21} colors={"#FFFFFF"} />
          </IconContainer>
        </NewContent>

        <TypeDataCreated />
      </HeaderCont>

      {TypeData ? (
        TypeData.map(({ id, name }, index) => (
          <CeldaTypeData id={id} name={name} index={index + 1} />
        ))
      ) : (
        <></>
      )}

      <Toaster
        position="top-right"
        toastOptions={{
          className: "",
          duration: 4000,
          style: {
            background: "#F68A20",
            color: "#fff",
          },
        }}
      />
    </ContentType>
  );
};

export default TypeDataConfig;
