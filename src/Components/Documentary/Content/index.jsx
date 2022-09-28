import { useSelector, useDispatch } from "react-redux";
import {
  DocumentaryContentContainer,
  InfoContainer,
} from "../../../Styles/Documentary";
import ActionAll from "./ActionAll";
import Header from "./Header";
import ContentGrid from "./ContentGrid";
import Traditional from "../Traditional";


const DocumentaryContent = () => {
  const { viewCore } = useSelector((store) => store);
  const { selectedView } = viewCore;

  return (
    <DocumentaryContentContainer>
      <InfoContainer>
        <Header />
        <ActionAll />
      </InfoContainer>

      {selectedView === "grid" ? <ContentGrid /> : <></>} 

       {selectedView === "list" ? <Traditional /> : <></>}
      
    </DocumentaryContentContainer>
  );
};

export default DocumentaryContent;
