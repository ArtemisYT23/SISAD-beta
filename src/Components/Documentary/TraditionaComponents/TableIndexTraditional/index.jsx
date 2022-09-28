import "../../../../Styles/Traditional/MetaConsult/TableIndex.css";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import toast, { Toaster } from "react-hot-toast";

import "primeicons/primeicons.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";
import "../../../../../src/index.css";

import { FilterMatchMode, FilterOperator } from "primereact/api";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

import { setIndexbyCabinetCore } from "../../../../Store/Core";
import { ChangeCabinetGetAll } from "../../../../Store/ViewCore";
import {
  getMetadataByFolder,
  FilterMetadataByDate,
  FilterMetadataByOnDay,
  getFilesByDocument,
  setSaveDataValuebyMetadata,
} from "../../../../Store/Documentary";
import {
  ContainerSecond,
  ContainerFilter,
  CabinetContainer,
} from "../../Traditional/HeadersTraditional/CabinetHeaders/StyleIcons";
import FechaMeta from "../../../../../assets/images/Fecha.png";
import FechaHoy from "../../../../../assets/images/Hoy.png";
import axios from "axios";
import { DocumentServer } from "../../../../config/axios";
import ModalesFiles from "../../Modern/ModalesDocumentary/ModalesFiles";
import {
  setOpenModalDocumentCreated,
  setOpenModalFilesMetadata,
} from "../../../../Store/ModalDocumentary";
import { getTypeFileByFolderFolder } from "../../../../Store/ConfigDocumentary";
import DocumentCreated from "../../../../Components/Documentary/Modern/ModalesDocumentary/DocumentCreated";
import { setOpenModalFileDownload } from "../../../../Store/FileDownload";
import FileDownload from "../../Modern/ModalesDocumentary/FileDownload";

const TableIndexTraditional = () => {
  const dispatch = useDispatch();
  const { documentary, core, modalCore, actionCore } = useSelector(
    (store) => store
  );
  const { MetadataFolder, MetaFolderSelected } = documentary;
  const { IndexByCabinet } = core;
  const { SelectedCabinet } = actionCore;
  const { ContextOptionMeta } = modalCore;

  const id = "de5d8cf4-69c2-4e49-bde4-a804e26cb55c";

  useEffect(() => {
    IndexByCabinet.length === 0 && dispatch(setIndexbyCabinetCore(id));
  }, []);

  const [Active, setActive] = useState(false);

  const downloadExcel = (MetaFolderSelected) => {
    axios
      .get(`${DocumentServer}exportalltoexcel/${MetaFolderSelected}`)
      .then(function (response) {
        const res = response.data;
        // console.log(res);
        const url =
          "data:application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;base64," +
          res;
        saveAsExcelFile(url, "Metadata");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const saveAsExcelFile = (url, fileName) => {
    import("file-saver").then((module) => {
      if (module && module.default) {
        const data = url;
        module.default.saveAs(data, fileName + "_export_" + new Date());
      }
    });
  };

  const [customers, setCustomers] = useState(null);
  const [selectedCustomers, setSelectedCustomers] = useState(null);

  const [filters, setFilters] = useState({
    global: {
      value: null,
      matchMode: FilterMatchMode.STARTS_WITH,
    },
    documentId: { value: "", matchMode: "contains" },
    "values.0": { value: "", matchMode: "contains" },
    "values.1": { value: "", matchMode: "contains" },
    "values.2": { value: "", matchMode: "contains" },
    "values.3": { value: "", matchMode: "contains" },
    "values.4": { value: "", matchMode: "contains" },
    "values.5": { value: "", matchMode: "contains" },
    "values.6": { value: "", matchMode: "contains" },
    "values.7": { value: "", matchMode: "contains" },
    "values.8": { value: "", matchMode: "contains" },
    "values.9": { value: "", matchMode: "contains" },
    "values.10": { value: "", matchMode: "contains" },
    "values.11": { value: "", matchMode: "contains" },
    "values.12": { value: "", matchMode: "contains" },
    "values.13": { value: "", matchMode: "contains" },
    "values.14": { value: "", matchMode: "contains" },
  });

  const [globalFilterValue, setGlobalFilterValue] = useState("");
  const [loading, setLoading] = useState(true);
  const [nameValue, setNameValue] = useState([]);

  const [cols, setCol] = useState([]);

  useEffect(() => {
    setCustomers(MetadataFolder);
    const colss = IndexByCabinet.map((indice, i) => ({
      field: `values.${i}`,
      header: indice.name,
    }));
    // colss.unshift({ field: "documentId", header: "Documento" });
    setCol(colss);
    setLoading(false);
  }, [MetadataFolder]);

  const CabinetGetAll = () => {
    dispatch(ChangeCabinetGetAll());
  };
  const [FechaActual, setFechaActual] = useState(null);

  const ObtenerFechaInicio = (fecha) => {
    setFechaActual(fecha);
  };

  const ObtenerFechaFinal = (fecha, folderId, cabinetId) => {
    dispatch(FilterMetadataByDate(FechaActual, fecha, folderId, cabinetId));
  };

  const ActualizarMetadata = (folderId, cabinetId) => {
    console.log(folderId);
    dispatch(getMetadataByFolder(folderId, cabinetId));
  };

  const onGlobalFilterChange = (e) => {
    const value = e.target.value;
    let _filters = { ...filters };
    _filters["global"].value = value;

    setFilters(_filters);
    setGlobalFilterValue(value);
  };

  const MetaActual = (folderId, cabinetId) => {
    console.log(folderId);
    const bool = true;
    dispatch(FilterMetadataByOnDay(folderId, cabinetId, bool));
  };

  const OpenModalCreatedDocument = () => {
    dispatch(setOpenModalDocumentCreated());
  };

  const AggMetadataForValues = () => {
    MetadataFolder.forEach((meta, i) => {
      const ob1 = {
        docum: meta.documentId,
        cod: meta.values[0],
        value: meta.values[1]
      };
      nameValue.push(ob1);
    })
    dispatch(setSaveDataValuebyMetadata(nameValue));
    setNameValue([]);
  };

  const header = (
    <>
      <div className="flex align-items-center export-buttons">
        <div className="flex justify-content-between align-items-center">
          <span className="p-input-icon-left">
            <i className="pi pi-search" />
            <InputText
              // value={globalFilterValue}
              onChange={onGlobalFilterChange}
              placeholder="Buscar"
            />
          </span>
        </div>
        <div className="Espacio"></div>

        {MetaFolderSelected && (
          <Button
            type="button"
            icon="pi pi-plus"
            className="p-button-warning mr-2"
            title="AGREGAR"
            onClick={() => OpenModalCreatedDocument()}
          />
        )}
        {MetaFolderSelected && (
          <DocumentCreated folderId={MetaFolderSelected} />
        )}

        <Button
          type="button"
          icon="pi pi-pencil"
          className="p-button-info mr-2"
          title="EDITAR"
        />

        {/* <Button
          type="button"
          icon="pi pi-times"
          className="p-button-danger mr-2"
          title="ELIMINAR"
        />  */}

        <Button
          type="button"
          icon="pi pi-file-excel"
          onClick={(e) => downloadExcel(MetaFolderSelected)}
          className="p-button-success mr-2"
          data-pr-tooltip="XLS"
          title="EXPORTAR EXCEL"
        />

        <Button
          type="button"
          icon="pi pi-server"
          onClick={CabinetGetAll}
          className="p-button-primary mr-2"
          title="GABINETES"
        />

        {MetaFolderSelected && (
          <Button
            type="button"
            icon="pi pi-sync"
            className="p-button-success mr-2"
            onClick={(e) =>
              ActualizarMetadata(MetaFolderSelected, SelectedCabinet?.id)
            }
            title="ACTUALIZAR"
          />
        )}

        <Button
          type="button"
          icon="pi pi-download"
          className="p-button-success mr-2"
          title="DESCARGAR"
          onClick={() => {
            dispatch(setOpenModalFileDownload()),
              dispatch(getTypeFileByFolderFolder(MetaFolderSelected)),
              AggMetadataForValues()
          }}
        />

        <FileDownload
          folderId={MetaFolderSelected}
          cabinetId={SelectedCabinet?.id}
        />

        <ContainerSecond>
          {Active && MetaFolderSelected && (
            <ContainerFilter>
              <label>desde: </label>
              <input
                className="FechaInicial"
                type="date"
                onChange={(e) => ObtenerFechaInicio(e.target.value)}
              />
              <label>hasta</label>
              <input
                className="FechaFinal"
                type="date"
                onChange={(e) =>
                  ObtenerFechaFinal(
                    e.target.value,
                    MetaFolderSelected,
                    SelectedCabinet?.id
                  )
                }
              />
            </ContainerFilter>
          )}
          <CabinetContainer onClick={(e) => setActive(!Active)}>
            <img src={FechaMeta} alt="cargando" title="FILTRAR POR FECHA" />
          </CabinetContainer>

          {MetaFolderSelected && (
            <CabinetContainer
              onClick={(e) =>
                MetaActual(MetaFolderSelected, SelectedCabinet?.id)
              }
            >
              <img src={FechaHoy} alt="cargando" title="FECHA ACTUAL" />
            </CabinetContainer>
          )}
        </ContainerSecond>
      </div>
    </>
  );

  const SeleccionarCelda = (documentId) => {
    console.log(documentId);
    dispatch(setOpenModalFilesMetadata());
    dispatch(getFilesByDocument(documentId));
  };

  return (
    <>
      <div className="Container-Principal">
        <div className="AperturaDocument">
          <div className="ContainerItemFile">
            {MetadataFolder?.map((custo, index) => (
              <div
                className="Item"
                onClick={() => SeleccionarCelda(custo.documentId)}
              >
                {custo.id}
              </div>
            ))}
            <ModalesFiles />
          </div>
        </div>
        {/* <DocumentCreated folderId={MetaFolderSelected} /> */}
        <div className="datatable-doc-demo">
          <div className="card">
            <DataTable
              value={customers}
              paginator
              className="p-datatable-customers"
              header={header}
              rows={5}
              paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
              rowsPerPageOptions={[5, 15, 30]}
              dataKey="id"
              rowHover
              loading={loading}
              selection={selectedCustomers}
              onSelectionChange={(e) => setSelectedCustomers(e.value)}
              filters={filters}
              filterDisplay="row"
              responsiveLayout="scroll"
              globalFilterFields={[
                "documentId",
                "values.0",
                "values.1",
                "values.2",
                "values.3",
                "values.4",
                "values.5",
                "values.6",
                "values.7",
                "values.8",
                "values.9",
                "values.10",
                "values.11",
                "values.12",
                "values.13",
              ]}
              emptyMessage="Sin Metadata para este documento."
              currentPageReportTemplate="Documento {first} de {last} existentes"
              size="small"
              resizableColumns
              columnResizeMode="fit"
              showGridlines
            >
              {/* <Column expander style={{ width: "1rem" }} /> */}

              {cols.map((col) => (
                <Column
                  onClick={() => SeleccionarCelda(col)}
                  field={col.field}
                  header={col.header}
                  sortable
                  filter
                  filterPlaceholder="Buscar"
                  headerStyle={{
                    color: "white",
                    fontFamily: "Arial",
                    backgroundColor: "#f68a20",
                  }}
                />
              ))}
            </DataTable>
          </div>
        </div>
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
        ;
      </div>
    </>
  );
};

export default TableIndexTraditional;
