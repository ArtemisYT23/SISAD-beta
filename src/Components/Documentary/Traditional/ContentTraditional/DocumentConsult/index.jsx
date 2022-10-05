import { ContainerDocuView } from "../../../../../Styles/Traditional";
import ConsulIndex from "../../../TraditionaComponents/ConsulIndex";
import TableIndexTraditional from "../../../TraditionaComponents/TableIndexTraditional";
import { useSelector } from "react-redux";
import toast, { Toaster } from 'react-hot-toast';

const DocumentConsult = () => {
  const { viewCore } = useSelector((store) => store);
  const { selectedView } = viewCore;

  return (
    <ContainerDocuView>
      {selectedView != "grid" ? <TableIndexTraditional /> : <></>}
    </ContainerDocuView>
  );
};

<Toaster
  position="bottom-right"
  toastOptions={{
    className: "",
    duration: 3000,
    style: {
      background: "#F68A20",
      color: "#fff",
    },
  }}
/>;

export default DocumentConsult;
