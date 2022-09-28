import { ContainerView } from "../../../../../Styles/Traditional";
import { useSelector } from "react-redux";
import GroupDefault from "../../ContainerTraditional/GroupDefault";
import toast, { Toaster } from 'react-hot-toast';

const GroupMantentTraditional = () => {
  const { core, viewCore } = useSelector((store) => store);
  const { groups } = core;
  const { selected, selectedView } = viewCore;
  return (
    <ContainerView>
      {selected === "GroupMantent" && selectedView === "list" ? (
        groups.map(({ id, name, description }) => (
          <GroupDefault
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

export default GroupMantentTraditional;
