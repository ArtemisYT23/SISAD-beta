import { ContainerView } from "../../../../../Styles/Traditional";
import { useSelector } from "react-redux";
import CabinetDefault from "../../ContainerTraditional/CabinetDefault";
import toast, { Toaster } from 'react-hot-toast';

const CabinetTraditional = () => {
  const { core, viewCore } = useSelector((store) => store);
  const { cabinets,  } = core;
  const { selected, selectedView } = viewCore;


  return (
    <ContainerView>
      {selected === "CabinetAll" && selectedView === "list" ? (
        cabinets.map(({ id, name, description }) => (
          <CabinetDefault
            key={id}
            index={id}
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
        position="bottom-right"
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

export default CabinetTraditional;
