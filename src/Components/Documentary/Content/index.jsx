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
  const { core, modalConfig } = useSelector((store) => store);
  const { selected, selectedView } = core;

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
