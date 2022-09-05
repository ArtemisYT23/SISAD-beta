import { DashboardContentContainer, InfoContainer  } from "../../../Styles/Dashboard/ContentDashboard";
import HeadersManagment from "../../Managment/ContentManagment/HeaderManagment";
import ActionsManagment from "../../Managment/ContentManagment/ActionsManagment";
import { useDispatch, useSelector } from "react-redux";
import PanelConfigUser from "./OptionsSecurity/PanelConfigUser";

const ContentDasboard = () => {
    
    const { configDocument } = useSelector((store) => store);
    const { SelectedOptionSecurity } = configDocument;

    return (
    <DashboardContentContainer>
        {/* <InfoContainer>
            <HeadersManagment />
            <ActionsManagment />
        </InfoContainer> */}
        
        {SelectedOptionSecurity?.name == "Panel de usuario" || SelectedOptionSecurity == "" ? <PanelConfigUser /> : <></>}


    </DashboardContentContainer>
  );
}
 
export default ContentDasboard;