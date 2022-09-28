import { PanelSecurityContainer } from "../../../../../Styles/Dashboard/ContentDashboard/PanelGestionSecurity";
import SecurityUsers from "../../../ModernDashboard/SecurityUsers";
import toast, { Toaster } from "react-hot-toast";

const PanelGestionSecurity = () => {
  return (
    <PanelSecurityContainer>
      <SecurityUsers />

      <Toaster
        position="top-right"
        toastOptions={{
          className: "",
          duration: 3000,
          style: {
            background: "#F68A20",
            color: "#fff",
          },
        }}
      />
    </PanelSecurityContainer>
  );
};

export default PanelGestionSecurity;
