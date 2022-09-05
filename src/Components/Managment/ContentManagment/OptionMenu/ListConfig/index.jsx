import { ManagContainer, Listado } from "../../../../../Styles/Managment";
import ListManagment from "../../../ModernManagment/ListManagment";
import toast, { Toaster } from "react-hot-toast";

const ListConfig = () => {
  return (
    <ManagContainer>
      <Listado>
        <ListManagment />
      </Listado>

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
    </ManagContainer>
  );
};

export default ListConfig;
