import { ContainerView } from "../../../../../Styles/Traditional";
import { useSelector } from "react-redux";
import CabinetDefault from "../../ContainerTraditional/CabinetDefault";
import toast, { Toaster } from 'react-hot-toast';

const GroupTraditional = () => {
  const { actionCore, viewCore } = useSelector((store) => store);
  const { GroupsCabinet } = actionCore;
  const { selected, selectedView } = viewCore;

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
          duration: 3000,
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
