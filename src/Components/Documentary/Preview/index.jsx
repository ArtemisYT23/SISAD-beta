import { useSelector } from "react-redux";
import { notInitialized } from "react-redux/es/utils/useSyncExternalStore";
import SectionPreview from "../../Documentary/Modern/SectionPreview";

const DocumentaryPreview = () => {

    const { modalDocumentary } = useSelector((store) => store);
    const { modalPreview } = modalDocumentary;

  const style = () => {
    return {
      width: "37%",
      height: "100vh",
      position: "sticky",
      display: modalPreview ? "flex" : "none",
      top: "0",
      left: "0",
      overflow: "scroll-y",
    };
  };

  return (
    <div style={style()}>
        <SectionPreview />
    </div>
    );
};

export default DocumentaryPreview;
