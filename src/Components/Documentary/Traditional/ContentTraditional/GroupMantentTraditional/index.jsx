import { ContainerView } from "../../../../../Styles/Traditional";
import { useSelector } from "react-redux";
import GroupDefault from "../../ContainerTraditional/GroupDefault";
import { useEffect } from "react";
import { getAllGroupsCore } from "../../../../../Store/Core";
import toast, { Toaster } from 'react-hot-toast';

const GroupMantentTraditional = () => {
  const { core } = useSelector((store) => store);
  const { groups, selected, selectedView } = core;

  useEffect(() => {
    groups.length === 0 && dispatch(getAllGroupsCore());
  }, []);

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

export default GroupMantentTraditional;
