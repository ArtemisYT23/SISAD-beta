import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCloseDetalleModal } from "../../../../Store/ModalDocumentary";
import "./Container.css";

const SectionPreview = () => {
  const dispatch = useDispatch();


  const { core, documentary } = useSelector((store) => store);
  const { SelectedFile, IndexByCabinet, SelectedUrlFile } = core;
  const { MetadataIndex } = documentary;

  return (
    <div className="Detallado">
      <div className="header">
        <div className="Title-Header">
          <h1>{SelectedFile?.name}</h1>
        </div>
        <div
          className="SalirIcon"
          onClick={() => dispatch(setCloseDetalleModal(false))}
        >
          <h2>X</h2>
        </div>
      </div>

      <hr />
      <div className="Main">
        <div className="Detalle">
          <h1>Detalle</h1>
        </div>
        <div className="Seguimiento">
          <h2>Seguimiento</h2>
        </div>
      </div>
      <br />
      {SelectedUrlFile != "" && (
        <div className="contenedor">
            <iframe
              frameBorder={10}
              className="ContentPdf"
              src={SelectedUrlFile}
            />
        </div>
        )} 

      <div className="footer">
        <h1>Índices</h1>
      </div>
      <hr />
      <div className="father">
        <div className="uno">
          {IndexByCabinet ? (
            IndexByCabinet.map(({ id, name }) => (
              <div className="Container-Celda-Meta">
                <span key={id} className="title">
                  {name}
                </span>
              </div>
            ))
          ) : (
            <>NO DISPONIBLE</>
          )}
        </div>
        {MetadataIndex != "" && (
        <div className="dos">
          {MetadataIndex ? (
            MetadataIndex.values.map((meta, index) => (
              <div className="Container-Celda-Meta">
                <span className="Celda-Meta">{meta}</span>
              </div>
            ))
          ) : (
            <></>
          )}
        </div>
        )}
      </div>
    </div>
  );
};

export default SectionPreview;
