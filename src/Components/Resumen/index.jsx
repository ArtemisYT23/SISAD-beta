import { ManagmentContentContainer, InfoContainer } from "../../Styles/Facturation";
import HeaderFacturation from "../Facturation/Content/HeaderFacturation";
import ContentResumenes from "./ContentResumen";

const ContentResumen = () => {
  return (
  <ManagmentContentContainer>
    <InfoContainer>
        <HeaderFacturation />
    </InfoContainer>

    <ContentResumenes />

  </ManagmentContentContainer>
  );
};
export default ContentResumen;
