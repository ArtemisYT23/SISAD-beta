import SearchMetadata from "../../Modern/SearchMetadata";
import SearchTree from "../../Modern/SearchTree";
import { useDispatch, useSelector } from "react-redux";

const ContainerSearch = () => {

    const { viewCore } = useSelector((store) => store);
    const { selectedSearch } = viewCore;

    return(
        <>
            {selectedSearch === "" || selectedSearch === "MetadataSearch" ? <SearchMetadata /> : <></>}

            {selectedSearch === "TraditionalTree" ? <SearchTree /> : <></>}

        </>
    );
};

export default ContainerSearch;