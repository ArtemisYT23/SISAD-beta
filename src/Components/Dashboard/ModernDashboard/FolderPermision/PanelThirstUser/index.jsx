import {
  ContainerFolder,
  HeaderCabinet,
  BodyContainer,
  CeldaCheck,
  FooterContainer,
  ButtonSave,
} from "../../../../../Styles/Dashboard/ContentDashboard/PanelConfigPermision";
import { useSelector } from "react-redux";

const PanelThirstUser = () => {

  const { actionCore, modalCore } = useSelector((store) => store);
  const { FoldersCabinet } = actionCore;
  const { NameGlobalSelected } = modalCore;

  return (
    <ContainerFolder>
      <HeaderCabinet>
        {NameGlobalSelected ? <span>{NameGlobalSelected}</span> : <span>GABINETES</span>}
        
      </HeaderCabinet>
      <BodyContainer>
        <span>Carpetas</span>
        {FoldersCabinet.map((app, index) => (
          <CeldaCheck>
            <input type="checkbox" />
            {app.name}
          </CeldaCheck>
        ))}
      </BodyContainer>
      <FooterContainer>
        <ButtonSave>Cargar Plantilla</ButtonSave>
        <ButtonSave>Guardar</ButtonSave>
      </FooterContainer>
    </ContainerFolder>
  );
};

export default PanelThirstUser;
