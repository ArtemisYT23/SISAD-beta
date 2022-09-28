import { DashboardContentContainer, InfoContainer  } from "../../../Styles/Dashboard/ContentDashboard";
import HeadersManagment from "../../Managment/ContentManagment/HeaderManagment";
import ActionsManagment from "../../Managment/ContentManagment/ActionsManagment";
import { useDispatch, useSelector } from "react-redux";
import PanelConfigUser from "./OptionsSecurity/PanelConfigUser";
import PanelConfigPermision from "./OptionsSecurity/PanelConfigPermision";
import PanelGestionSecurity from "./OptionsSecurity/PanelGestionSecurity";

const ContentDasboard = () => {
    
    const { configDocument } = useSelector((store) => store);
    const { SelectedOptionSecurity } = configDocument;

    return (
    <DashboardContentContainer>
        
        {SelectedOptionSecurity?.name == "Panel de usuario" || SelectedOptionSecurity == "" ? <PanelConfigUser /> : <></>}

        {SelectedOptionSecurity?.name == "Panel de permisos" ? <PanelConfigPermision /> : <></>}

        {SelectedOptionSecurity?.name == "Gestion de Seguridad" ? <PanelGestionSecurity /> : <></>}

    </DashboardContentContainer>
  );
}
 
export default ContentDasboard;