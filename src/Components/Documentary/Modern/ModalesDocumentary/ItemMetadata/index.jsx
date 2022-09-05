import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { setSelectedDocumentUploaderDocu } from "../../../../../Store/Documentary";
import { getAllElementListConfig } from "../../../../../Store/ConfigDocumentary";
import "../../../../../Styles/Documentary/Modern/ItemMetadata/Items.css";
import { useDispatch, useSelector } from "react-redux";
import { getItemElementByIdList } from "../../../../../Store/ConfigDocumentary";
import {
  setGetNameMetaDocument,
  getIndexMetaDocument,
  setMetadataNewDoc,
} from "../../../../../Store/Metadata";

const NewMeta = [];

const ItemMetadata = ({ id, name, dataTypeId, listId, maxValue }) => {
  const dispatch = useDispatch();
  const { configDocument, documentary } = useSelector((store) => store);
  const { ItemListMetadata } = configDocument;
  const { DocumentFolder } = documentary;

  const GetAllItem = () => {
    dispatch(getItemElementByIdList(listId));
  };

  const [detalle, setDetalle] = useState({
    id: uuidv4(),
    value: "",
    indexId: id,
    documentId: DocumentFolder[0]?.id,
  });

  const CreatedObjectMeta = () => {
    NewMeta.push(detalle);
    setDetalle({
      id: uuidv4(),
      value: "",
      indexId: id,
      documentId: DocumentFolder[0]?.id,
    });
    console.log(NewMeta);
    dispatch(setMetadataNewDoc(NewMeta));
    dispatch(setSelectedDocumentUploaderDocu(DocumentFolder[0]?.id));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetalle({ ...detalle, [name]: value });
  };

  return (
    <div className="ContainerModales">
      <label className="TitleLable">{name}</label>

      {(() => {
        switch (dataTypeId) {
          //MONEY
          case "54847089-8bcd-4bfc-9b82-3c90e0f68f35":
            return (
              <input
                name="value"
                type="number"
                min="0"
                step="0.01"
                className="ItemMetadata"
                onChange={(e) => handleChange(e)}
                onBlur={(e) => {
                  dispatch(setGetNameMetaDocument(e.target.value)),
                    dispatch(getIndexMetaDocument(id)),
                    CreatedObjectMeta();
                }}
              />
            );

          // //NUMBER
          case "69aa9f19-0506-4e94-ad6f-3d22ee9fd5e5":
            return (
              <input
                name="value"
                type="number"
                className="ItemMetadata"
                onChange={(e) => handleChange(e)}
                onBlur={(e) => {
                  dispatch(setGetNameMetaDocument(e.target.value)),
                    dispatch(getIndexMetaDocument(id)),
                    CreatedObjectMeta();
                }}
              />
            );

          // //IMAGE
          // case "211f35ac-bb4e-48b2-a22a-602f9982f6cf":
          //   return <input type="file" className="ItemMetadata" />;

          // DATE
          case "dc4378da-908b-4547-9001-a46b95c3d4b9":
            return (
              <input
                type="date"
                className="ItemMetadata"
                name="value"
                onChange={(e) => handleChange(e)}
                onBlur={(e) => {
                  dispatch(setGetNameMetaDocument(e.target.value)),
                    dispatch(getIndexMetaDocument(id)),
                    CreatedObjectMeta();
                }}
              />
            );

          // //TIME
          // case "c98d34bd-c017-4785-b151-b1f663c16541":
          //   return <input type="time" className="ItemMetadata" />;

          // //DATETIME
          // case "909a5f0f-603e-47c9-9216-b5bda78ba927":
          //   return <input type="datetime" className="ItemMetadata" />;

          // //CITIZENSHIPCARD
          // case "e3e54061-7a88-4ca7-a5a1-74b335618167":
          //   return <input type="number" className="ItemMetadata" />;

          // //BOOLEAN
          // case "c9e97d02-2e80-4401-9b7c-fdfbacad9234":
          //   return (
          //     <select className="ItemMetadata">
          //       <option value="true">Verdadero</option>
          //       <option false="false">Falso</option>
          //     </select>
          //   );

          //LIST
          case "6009c757-6c0b-4f5d-96e5-44af7382de6d":
            return (
                <select
                  className="ItemMetadata"
                  onChange={(e) => handleChange(e)}
                  name="value"
                  onClick={() => GetAllItem()}
                  onBlur={(e) => CreatedObjectMeta()}
                >
                  <option hidden selected>
                    Seleccionar Elemento
                  </option>
                  {ItemListMetadata ? (
                    ItemListMetadata.map(({ id, name }, index) => (
                      <option key={id} value={name}>
                        {name}
                      </option>
                    ))
                  ) : (
                    <></>
                  )}
                </select>
            );
          default:
            return (
              <input
                type="text"
                name="value"
                className="ItemMetadata"
                maxLength={maxValue}
                onChange={(e) => handleChange(e)}
                onBlur={(e) => {
                  dispatch(setGetNameMetaDocument(e.target.value)),
                    dispatch(getIndexMetaDocument(id)),
                    CreatedObjectMeta();
                }}
              />
            );
        }
      })()}
    </div>
  );
};

export default ItemMetadata;
