import { ContainerView } from "../../../../../Styles/Traditional";
import { useSelector } from "react-redux";
import CabinetDefault from "../../ContainerTraditional/CabinetDefault";
import GridDefaultGroup from "../../../Modern/GridsContent/GridDefaultGroup";
import toast, { Toaster } from 'react-hot-toast';

const GroupTraditional = () => {
  const { core } = useSelector((store) => store);
  const { selected, GroupsCabinet, selectedView } = core;

  return (
    <ContainerView>
      {selected === "group" && selectedView === "list" ? (
        GroupsCabinet.map(({ id, name, description }, index) => (
          <CabinetDefault
            key={index}
            id={id}
            name={name}
            description={description}
            element="cabinet"
          />
        ))
      ) : (
        <></>
      )}

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
    </ContainerView>
  );
};
export default GroupTraditional;
