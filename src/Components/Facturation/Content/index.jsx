import {
  ManagmentContentContainer,
  InfoContainer,
} from "../../../Styles/Facturation";
import HeaderFacturation from "./HeaderFacturation";
import Facturation from "../../Facturation";

const Content = () => {
  return (
    <ManagmentContentContainer>
      <InfoContainer>
        <HeaderFacturation />
      </InfoContainer>

      <Facturation />
    </ManagmentContentContainer>
  );
};

export default Content;
