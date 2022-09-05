import {
  ContainerIcons,
  CabinetIcons,
  EditContainer,
  DeleteContainer,
  } from "../CabinetHeaders/StyleIcons";
import NewCabi from "../../../../../../assets/images/Nuevo.png";
import EditCabi from "../../../../../../assets/images/Editar.png";
import Delete from "../../../../../../assets/images/Delete.png";
import { useDispatch, useSelector } from "react-redux";

const DocumentHeaders = () => {
    const dispatch = useDispatch();
    
    return(
        <ContainerIcons>
      <CabinetIcons onClick={() => OpenFolderCreated()}>
        <img src={NewCabi} alt="cargando" />
      </CabinetIcons>

      <EditContainer onClick={() => OpenFolderUpdate()}>
        <img src={EditCabi} alt="cargando" />
      </EditContainer>

      <DeleteContainer onClick={() => OpenFolderDelete()}>
        <img src={Delete} alt="cargando" />
      </DeleteContainer>
      </ContainerIcons>
    );
}

export default DocumentHeaders;