import { useDispatch, useSelector } from "react-redux";
import { DocumentContainer } from "../../../../../Styles/Documentary";
import IndexDefault from "../../../Modern/ConfigIndex/IndexDefault";
import IndexContainer from "../../../Modern/ConfigIndex/IndexContainer";

const ConfigCabinet = () => {

    const { core, viewCore } = useSelector((store) => store);
    const { IndexAllCabinet } = core;
    const { selected } = viewCore;

    return (
        <>
        {selected === "ConfigIndex" && IndexAllCabinet != "" ? 
          <IndexContainer /> : <></>
        }
          
        {IndexAllCabinet == "" && selected === "ConfigIndex"  ?
          <IndexDefault /> : <></>
        }
          
        </>
      );
};

export default ConfigCabinet;