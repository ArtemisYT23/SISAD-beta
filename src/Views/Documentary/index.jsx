import React from "react";
import DocumentaryAside from "../../Components/Documentary/Aside";
import DocumentaryContent from "../../Components/Documentary/Content";
import { DocumentaryContainer } from "../../Styles/Documentary";
import DocumentaryPreview from "../../Components/Documentary/Preview";

const Documentary = () => {
  return (
    <DocumentaryContainer>
      <DocumentaryAside />

      <DocumentaryContent />

      <DocumentaryPreview />
    </DocumentaryContainer>
  );
};

export default Documentary;
