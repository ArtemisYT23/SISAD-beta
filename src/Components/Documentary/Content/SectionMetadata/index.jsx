import { useDispatch, useSelector } from "react-redux";
import "./Metadata.css";

const SectionMetadata = ({ id, name }) => {
  const { documentary } = useSelector((store) => store);
  const { MetadataIndex } = documentary;

  const Metadata = [
    "Unilever",
    "125",
    "0978663114",
    "Carlos Javier Esperanza Lopez",
    "Ayudante de bodega",
    "01/06/2022"
  ]

  return (
    <div className="logs">
      <p>{name}</p>

      {MetadataIndex ? (
        MetadataIndex.map(({ id, value }) => <span key={id}>{value}</span>)
      ) : (
        <></>
      )} 

       {Metadata.map((meta) => (
        <span>{meta}</span>
      ))}

    </div>
  );
};

export default SectionMetadata;
