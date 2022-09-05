import "../../../../../../../Styles/Traditional/MetaConsult/TableIndex.css";
import { Link } from "react-router-dom";
import { AggIconFiles, SaveIconFile, DeleteIconFile } from "../../../Icons";

const FileFragmentTD = ({ FilebyDocument }) => {
  return (
    <>
      <td>{FilebyDocument.id}</td>
      <td>{FilebyDocument.name}</td>
      <td>{FilebyDocument.description}</td>
      <td>{FilebyDocument.extension}</td>
      <div className="Container-IconFile">
        <div className="Content-IconFile" onClick={(e) => OpenDocumentView()}>
          <AggIconFiles x={27} y={25} />
        </div>

        <Link
          className="Content-IconFile"
          to="assets/pdf/Prueba.pdf"
          target="_blank"
          download
        >
          <SaveIconFile x={21} y={25} />
        </Link>

        <div className="Content-IconFile">
          <DeleteIconFile x={23} y={25} />
        </div>
      </div>
    </>
  );
};

export default FileFragmentTD;
