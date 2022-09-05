import { ManagTypeContainer } from "../../../../../Styles/Managment";
import AsideTypeFile from "../../../ModernManagment/TypeContainer/AsideTypeFile";
import ContentTypeFile from "../../../ModernManagment/TypeContainer/ContentTypeFile";
import toast, { Toaster } from "react-hot-toast";

const TypeFileConfig = () => {
  return (
    <ManagTypeContainer>
      <AsideTypeFile />
      <ContentTypeFile />
      <Toaster
        position="top-right"
        toastOptions={{
          className: "",
          duration: 4000,
          style: {
            background: "#F68A20",
            color: "#fff",
          },
        }}
      />
    </ManagTypeContainer>
  );
};

export default TypeFileConfig;
