import axios from "axios";
import { DocumentServer } from "../../config/axios";
import toast, { Toaster } from "react-hot-toast";

const initialState = {
    MaxFileDownload: false,
    documentIdDown: [],
    indexesDown: [],
    fileType: [],
}


const OPEN_MODAL_FILEDOWNLOAD_FILE = "OPEN_MODAL_FILEDOWNLOAD_FILE";
const GET_DATA_DOCUMENT_DOWN = "GET_DATA_DOCUMENT_DOWN";
const GET_DATA_INDEXID_DOWN = "GET_DATA_INDEXID_DOWN";
const GET_FILETYPE_ID_DOWN = "GET_FILETYPE_ID_DOWN";
//limpiar estados 
const SET_CLEAR_DOCUMENT_DOWN = "SET_CLEAR_DOCUMENT_DOWN";
const SET_CLEAR_DATA_INDEXID_DOWN = "SET_CLEAR_DATA_INDEXID_DOWN";
const SET_CLEAR_DATA_FILETYPEID_DOWN = "SET_CLEAR_DATA_FILETYPEID_DOWN";


export default function DownloadReducer(state = initialState, action) {
    switch (action.type) {
        case OPEN_MODAL_FILEDOWNLOAD_FILE:
        case GET_DATA_DOCUMENT_DOWN:
        case GET_DATA_INDEXID_DOWN:
        case GET_FILETYPE_ID_DOWN:
        case SET_CLEAR_DOCUMENT_DOWN:
        case SET_CLEAR_DATA_INDEXID_DOWN:
        case SET_CLEAR_DATA_FILETYPEID_DOWN:
            return action.payload;
        default: 
            return state;
    }
}

//Apertura modal para descarga de files con filtros
export const setOpenModalFileDownload = () => async(dispatch, getState) => {
    const { download } = getState();
    dispatch({
        type: OPEN_MODAL_FILEDOWNLOAD_FILE,
        payload: { ...download,MaxFileDownload:!download.MaxFileDownload }
    })
};

//guardar array de dato de documentos
export const getDataDocumentId = (Document) => async(dispatch, getState) => {
    const { download } = getState();
    dispatch({
        type: GET_DATA_DOCUMENT_DOWN,
        payload: { ...download, documentIdDown: Document}
    })
};

//Limpiar estado de dato de documentos 
export const setClearDataDocumentId = () => async(dispatch, getState) => {
    const { download } = getState();
    dispatch({
        type: SET_CLEAR_DOCUMENT_DOWN,
        payload: { ...download, documentIdDown: []}
    })
}

//guardar array de datos de indices
export const getDataIndexId = (index) => async(dispatch, getState) => {
    const { download } = getState();
    dispatch({
        type: GET_DATA_INDEXID_DOWN,
        payload: { ...download, indexesDown: index}
    })
};

//limpiar estado de dato de indices
export const setClearDataIndexId = () => async(dispatch, getState) => {
    const { download } = getState();
    dispatch({
        type: SET_CLEAR_DATA_INDEXID_DOWN,
        payload: { ...download, indexesDown: []}
    })
};

//guardar array de datos de tipos de archivos
export const getFileTypeId = (id) => async(dispatch, getState) => {
    const { download } = getState();
    dispatch({
        type: GET_FILETYPE_ID_DOWN,
        payload: { ...download, fileType: id}
    })
}

//limpiar el estado de dato de archivos
export const setClearDataFileTypeId = () => async(dispatch, getState) => {
    const { download } = getState();
    dispatch({
        type: SET_CLEAR_DATA_FILETYPEID_DOWN,
        payload: { ...download, fileType: [] }
    })
}


//array de datos para enviar en la peticion
export const getDataDownloadFiles = (index) => async(dispatch, getState) => {
    const { download } = getState();
    const { documentIdDown, indexesDown, fileType } = download;
    toast.loading("Descargando Espere...");
    const document = {
        documentsId: documentIdDown
    };
    const indexes = {
        indexesId: indexesDown
    };

    const filesId = {
        fileTypesId: fileType
    }

    const DataFinal = Object.assign(document, filesId, indexes, index);

    console.log(DataFinal);

    axios({
        url: `${DocumentServer}getfilebyfolder`,
        method: "PUT",
        data: DataFinal,
        headers: {
            "Content-Type": "Application/json",
        }
    })
    .then(function (response) {
        console.log(response);
        if (response.status == 200) {
            const url = 
            "data:application/zip;base64," + response.data;
            import("file-saver").then((module) => {
                if(module && module.default) {
                    const data = url;
                    module.default.saveAs(data, "_export_" + new Date());
                }
            })
            toast.success("Archivo Descargado con Exito");
        }
    }).catch(function (error){
        console.log(error);
    });
}
