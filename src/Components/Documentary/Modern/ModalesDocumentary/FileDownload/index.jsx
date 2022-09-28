import { useState, useEffect } from "react";
import { Modal } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import {
  setOpenModalFileDownload,
  getDataDocumentId,
  getDataIndexId,
  getDataDownloadFiles,
  getFileTypeId,
  setClearDataDocumentId,
  setClearDataIndexId,
  setClearDataFileTypeId,
} from "../../../../../Store/FileDownload";
import {
  setClearSaveDataValueMetadata,
  setFilterMetadataValueDocu,
} from "../../../../../Store/Documentary";
import "../../../../../Styles/Documentary/Modern/FileDownload/FileDown.css";

const useStyless = makeStyles((theme) => ({
  MaxFileDownload: {
    position: "absolute",
    width: "400px",
    backgroundColor: "white",
    border: "2px solid white",
    boxShadow: theme.shadows[2],
    padding: "16px 32px 24px",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
  },
  textfield: {
    width: "100%",
  },
  container: {
    textAlign: "center",
  },
}));

const FileDownload = ({ folderId, cabinetId }) => {
  const dispatch = useDispatch();
  const styless = useStyless();
  const { download, documentary, core, configDocument, actionCore } =
    useSelector((store) => store);
  const { MaxFileDownload, documentIdDown, indexesDown, fileType } = download;
  const { MetadataFolder, MetaFolderSelected, MetaValueDocu, FilterMetaValue } =
    documentary;
  const { IndexByCabinet } = core;
  const { SelectedCabinet } = actionCore;
  const { FilesFolders } = configDocument;

  const [Docum, setDocum] = useState(true);
  const [Index, setIndex] = useState(false);
  const [typefile, setTypefile] = useState(false);
  const [docu, setDocu] = useState({ id_doc: [] });
  const [inde, setInde] = useState({ id_ind: [] });
  const [fil, setFil] = useState({ id_fil: [] });
  const [SelectedDocuments, setSelectedDocuments] = useState([]);

  useEffect(() => {
    const Document = [];
    const idFiless = documentIdDown.map((doc, i) =>
      Document.push(documentIdDown[i])
    );
    setDocu({ ...docu, id_doc: Document });
    console.log(docu);
    const Indexes = [];
    const idIndexs = indexesDown.map((ind, i) => Indexes.push(indexesDown[i]));
    setInde({ ...inde, id_ind: Indexes });
    console.log(inde);
    const fileId = [];
    const idFiles = fileType.map((fil, i) => fileId.push(fileType[i]));
    setFil({ ...fil, id_fil: fileId });
  }, [documentIdDown, indexesDown, fileType]);

  const ActiveDocum = () => {
    setDocum(true);
    setIndex(false);
    setTypefile(false);
  };

  const ActiveIndex = () => {
    setDocum(false);
    setIndex(true);
    setTypefile(false);
  };

  const ActiveTypefile = () => {
    setDocum(false);
    setIndex(false);
    setTypefile(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const folderId = {
      folderId: MetaFolderSelected,
    };

    const cabinetId = {
      cabinetId: SelectedCabinet.id,
    };

    const FormEnvio = Object.assign(folderId, cabinetId);
    console.log(FormEnvio);
    dispatch(getDataDownloadFiles(FormEnvio));
    OpenModalFileDownload();
  };

  const ObtenerSelected = () => {
    const checkboxes = document.querySelectorAll(
      'input[name="subject"]:checked'
    );
    const SelectedDocument = [];
    checkboxes.forEach((checkbox) => {
      SelectedDocument.push(checkbox.value);
    });
    // descarga.documentsId = SelectedDocument;
    dispatch(getDataDocumentId(SelectedDocument));
  };

  const ObtenerSelectedFilter = () => {
    const checkboxes = document.querySelectorAll(
      'input[name="filter"]:checked'
    );
    const SelectedDocuments = [];
    checkboxes.forEach((checkbox) => {
      SelectedDocuments.push(checkbox.value);
    });
    // descarga.documentsId = SelectedDocument;
    dispatch(getDataDocumentId(SelectedDocuments));
  };

  const checkAll = () => {
    const SelectedAll = [];
    const Dato = document.getElementById("SelectedAll").checked;
    Dato ? 
    MetaValueDocu.forEach((meta) => {
      SelectedAll.push(meta.documentId)
    })
    : 
    console.log("apagado");
  };

  const ObtenerSelectedIndex = () => {
    const checkboxes = document.querySelectorAll(
      'input[name="indexes"]:checked'
    );
    const SelectedIndex = [];
    checkboxes.forEach((checkbox) => {
      SelectedIndex.push(checkbox.value);
    });
    // descarga.indexesId = SelectedIndex;
    dispatch(getDataIndexId(SelectedIndex));
  };

  const ObtenerSelectedFile = () => {
    const checkboxes = document.querySelectorAll(
      'input[name="filestype"]:checked'
    );
    const SelectedFiles = [];
    checkboxes.forEach((checkbox) => {
      SelectedFiles.push(checkbox.value);
    });
    // descarga.fileTypesId = SelectedFiles;
    dispatch(getFileTypeId(SelectedFiles));
  };

  const [noFilter, setNoFilter] = useState(true);
  const [filter, setFilter] = useState(false);
  const [FilterMeta, setFilterMeta] = useState("");

  useEffect(() => {
    FilterMeta.length == 0 ? setNoFilter(true) : setNoFilter(false);
    FilterMeta.length != 0 ? setFilter(true) : setFilter(false);
  }, [FilterMeta]);

  const FilterLine = (text) => {
    dispatch(setFilterMetadataValueDocu(text));
  };

  

  const documentNew = (
    <div className={styless.MaxFileDownload}>
      <form onSubmit={handleSubmit}>
        <div align="center">
          <h2 className="titulo-modal">Configuracion Exportar</h2>
        </div>

        <div className="ContainerChange">
          <button
            onClick={() => ActiveDocum()}
            className={Docum ? "ButtonChange-on" : "ButtonChange-off"}
            type="button"
          >
            Documentos
          </button>
          <button
            onClick={() => ActiveIndex()}
            className={Index ? "ButtonChange-on" : "ButtonChange-off"}
            type="button"
          >
            Indices
          </button>
          <button
            onClick={() => ActiveTypefile()}
            className={typefile ? "ButtonChange-on" : "ButtonChange-off"}
            type="button"
          >
            Tipo De Archivo
          </button>
        </div>

        <div className="Container-Table">
          {Docum && (
            <div className="ContainerOne">
              <div className="NumberSelect">
                <span className="Title-Doc">N</span>
              </div>
              <div className="Celda-Table">
                <input
                  className="InputCheck"
                  type="checkbox"
                  id="SelectedAll"
                  onChange={(e) => checkAll()}
                />
              </div>
              {noFilter && (
                <>
                  {MetaValueDocu ? (
                    MetaValueDocu.map(({ docum, values }, index) => (
                      <div className="NumberSelect">
                        <input
                          className="InputCheck"
                          type="checkbox"
                          name="subject"
                          checked={docu.id_doc.includes(docum)}
                          value={docum}
                          id={docum}
                          onChange={() => ObtenerSelected()}
                        />
                      </div>
                    ))
                  ) : (
                    <></>
                  )}
                </>
              )}

              {filter && (
                <>
                  {FilterMetaValue ? (
                    FilterMetaValue.map(({ docum, values }, index) => (
                      <div className="NumberSelect">
                        <input
                          className="InputCheck"
                          type="checkbox"
                          name="filter"
                          checked={docu.id_doc.includes(docum)}
                          value={docum}
                          id={docum}
                          onChange={() => ObtenerSelectedFilter()}
                        />
                      </div>
                    ))
                  ) : (
                    <></>
                  )}
                </>
              )}
            </div>
          )}

          {Docum && (
            <div className="ContainerTwo">
              <div className="Celda-Table">
                <span className="Title-Doc">Cod</span>
              </div>
              <div className="Celda-Table">
                <span></span>
              </div>
              {/* {MetaValueDocu ? (
                MetaValueDocu.map(({ cod }, index) => (
                  <div className="Celda-Table">
                    <span>{cod}</span>
                  </div>
                ))
              ) : (
                <></>
              )} */}
              {noFilter && (
                <>
                  {MetaValueDocu ? (
                    MetaValueDocu.map(({ cod }, index) => (
                      <div className="Celda-Table">
                        <span>{cod}</span>
                      </div>
                    ))
                  ) : (
                    <></>
                  )}
                </>
              )}

              {filter && (
                <>
                  {FilterMetaValue ? (
                    FilterMetaValue.map(({ cod }, index) => (
                      <div className="Celda-Table">
                        <span>{cod}</span>
                      </div>
                    ))
                  ) : (
                    <></>
                  )}
                </>
              )}
            </div>
          )}

          {Docum && (
            <div className="ContainerTwo">
              <div className="Celda-Table">
                <span className="Title-Doc">Documento</span>
              </div>
              <div className="Celda-Table">
                <input
                  placeholder="buscar"
                  className="InputBusqueda"
                  onChange={(e) => {
                    FilterLine(e.target.value), setFilterMeta(e.target.value);
                  }}
                />
              </div>

              {noFilter && (
                <>
                  {MetaValueDocu ? (
                    MetaValueDocu.map(({ value }, index) => (
                      <div className="Celda-Table">
                        <span>{value}</span>
                      </div>
                    ))
                  ) : (
                    <></>
                  )}
                </>
              )}

              {filter && (
                <>
                  {FilterMetaValue ? (
                    FilterMetaValue.map(({ value }, index) => (
                      <div className="Celda-Table">
                        <span>{value}</span>
                      </div>
                    ))
                  ) : (
                    <></>
                  )}
                </>
              )}
            </div>
          )}

          {Index && (
            <div className="ContainerOne">
              <div className="NumberSelect">
                <span className="Title-Doc">N</span>
              </div>
              {IndexByCabinet ? (
                IndexByCabinet.map(({ id }, index) => (
                  <div className="NumberSelect">
                    <input
                      className="InputCheck"
                      type="checkbox"
                      name="indexes"
                      checked={inde.id_ind.includes(id)}
                      value={id}
                      id={id}
                      onChange={() => ObtenerSelectedIndex()}
                    />
                  </div>
                ))
              ) : (
                <></>
              )}
            </div>
          )}

          {Index && (
            <div className="ContainerTwo">
              <div className="Celda-TableIndex">
                <span className="Title-Doc">INDICES</span>
              </div>
              {IndexByCabinet ? (
                IndexByCabinet.map(({ name }, index) => (
                  <div className="Celda-TableIndex">
                    <span>{name}</span>
                  </div>
                ))
              ) : (
                <></>
              )}
            </div>
          )}

          {typefile && (
            <div className="ContainerOne">
              <div className="NumberSelect">
                <span className="Title-Doc">N</span>
              </div>
              {FilesFolders ? (
                FilesFolders.map(({ fileTypeId }, index) => (
                  <div className="NumberSelect">
                    <input
                      className="InputCheck"
                      type="checkbox"
                      name="filestype"
                      checked={fil.id_fil.includes(fileTypeId)}
                      value={fileTypeId}
                      id={fileTypeId}
                      onChange={() => ObtenerSelectedFile()}
                    />
                  </div>
                ))
              ) : (
                <></>
              )}
            </div>
          )}

          {typefile && (
            <div className="ContainerTwo">
              <div className="Celda-Table">
                <span className="Title-Doc">Indices</span>
              </div>
              {FilesFolders ? (
                FilesFolders.map(({ fileTypeName }, index) => (
                  <div className="Celda-Table">
                    <span>{fileTypeName}</span>
                  </div>
                ))
              ) : (
                <></>
              )}
            </div>
          )}
        </div>

        <br />
        <div align="right">
          {typefile && <button className="btn-enviar">Crear</button>}
          <button
            className="btn-cancelar"
            onClick={() => OpenModalFileDownload()}
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );

  const OpenModalFileDownload = () => {
    dispatch(setOpenModalFileDownload());
    dispatch(setClearDataDocumentId());
    dispatch(setClearDataIndexId());
    dispatch(setClearDataFileTypeId());
    setDocum(true);
    setIndex(false);
    setTypefile(false);
    dispatch(setClearSaveDataValueMetadata());
  };

  return (
    <div className={styless.container}>
      <Modal open={MaxFileDownload} onClose={OpenModalFileDownload}>
        {documentNew}
      </Modal>
    </div>
  );
};

export default FileDownload;
