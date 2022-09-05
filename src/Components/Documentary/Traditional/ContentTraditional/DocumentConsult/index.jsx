import { ContainerDocuView } from "../../../../../Styles/Traditional";
import ConsulIndex from "../../../TraditionaComponents/ConsulIndex";
import TableIndexTraditional from "../../../TraditionaComponents/TableIndexTraditional";
import { useSelector } from "react-redux";
import toast, { Toaster } from 'react-hot-toast';

const DocumentConsult = () => {
  const { core } = useSelector((store) => store);
  const { selectedView } = core;

  return (
    <ContainerDocuView>
      {selectedView != "grid" ? <TableIndexTraditional /> : <></>}
    </ContainerDocuView>
  );
};

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
/>;

export default DocumentConsult;
