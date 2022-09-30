import { DocumentInstance, DocumentServer, CoreServer } from "../../config/axios";
import { getDocumentIdDocument } from "../Metadata";
import { setChangeSelectView } from "../ViewCore";
import { setDocumentFileDocu } from "../Upload";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

//initial state 
const initialState = {
    //documents
    documents: [],
    IndexCabinetConsul: [],
    //cambiar a metadata por documento(nombre)
    MetadataIndex: [],
    //Filtro 1 a muchos
    DocumentFolder: [],
    //Filtro 1 a 1
    SelectedDocument: null,
    //metadata por documento
    MetadataFolder: [],
    //Metadata log por carpeta
    MetadataLog: [],
    //Carpeta Seleccionada
    MetaFolderSelected: "",
    //Archivos por documento
    FileByDocument: [],
    //Elemento Seleccinado
    selectedDocu: "",
    //Error
    elementError: null,
    //filtro de carpetas
    SearchFolder: [],
    //metaValue
    MetaValueDocu: [],
    FilterMetaValue: []
};

//tags de identificacion
//documentos 
const GET_ALL_DOCUMENTS_DOCU = "GET_ALL_DOCUMENTS_DOCU";
const GET_ALL_DOCUMENTS_ERROR_DOCU = "GET_ALL_DOCUMENTS_ERROR_DOCU";
const SET_SELECTED_DOCUMENT_DOCU = "SET_SELECTED_DOCUMENT_DOCU";
const SET_SELECTED_DOCUMENT_ERROR = "SET_SELECTED_DOCUMENT_ERROR";
const SET_FILTER_DOCUMENTS_DOCU = "SET_FILTER_DOCUMENTS_DOCU";

const CREATED_DOCUMENT_DOCU = "CREATED_DOCUMENT_DOCU";
const GET_INDEX_BY_CABINET_DOCU = "GET_INDEX_BY_CABINET_DOCU";
const GET_ALL_METADATA_BY_INDEX_DOCU = "GET_ALL_METADATA_BY_INDEX_DOCU";
const CREATED_METADATA_DOCU = "CREATED_METADATA_DOCU";
const GET_ALL_METADATA_BY_DOCUMENT_DOCU = "GET_ALL_METADATA_BY_DOCUMENT_DOCU";
const GET_ALL_METADATA_BY_DOCUMENT_ERROR_DOCU = "GET_ALL_METADATA_BY_DOCUMENT_ERROR_DOCU";
//metadata x carpeta
const GET_ALL_METADATA_BY_FOLDER_DOCU = "GET_ALL_METADATA_BY_FOLDER_DOCU";
const GET_ALL_METADATA_BY_FOLDER_ERROR_DOCU = "GET_ALL_METADATA_BY_FOLDER_ERROR_DOCU";
//metadata x fecha
const GET_ALL_METADATA_BY_DATEINIT_END_DOCU = "GET_ALL_METADATA_BY_DATEINIT_END_DOCU";
const GET_ALL_METADATA_BY_DATEINIT_END_ERROR_DOCU = "GET_ALL_METADATA_BY_DATEINIT_END_ERROR_DOCU";
//metadata carpeta
const AGG_FOLDERID_METADATA_DOCU = "AGG_FOLDERID_METADATA_DOCU";
const GET_ALL_METADATA_BYONDAY_DOCU = "GET_ALL_METADATA_BYONDAY_DOCU";
const GET_ALL_METADATA_BYONDAY_ERRORS_DOCU = "GET_ALL_METADATA_BYONDAY_ERRORS_DOCU"
const GET_ALL_METADATALOG_BY_FOLDER_ERROR_DOCU = "GET_ALL_METADATALOG_BY_FOLDER_ERROR_DOCU";

//Files by document
const GET_FILES_BY_DOCUMENT_DOCU = "GET_FILES_BY_DOCUMENT_DOCU";
const GET_FILES_BY_DOCUMENT_ERRORS_DOCU = "GET_FILES_BY_DOCUMENT_ERRORS_DOCU";
const GET_ALL_METADATALOG_BY_FOLDER_DOCU = "GET_ALL_METADATALOG_BY_FOLDER_DOCU";
const GET_ALL_FOLDERS_NAME_DATA_CORE = "GET_ALL_FOLDERS_NAME_DATA_CORE";
const GET_ALL_FOLDERS_NAME_DATA_ERRORS_CORE = "GET_ALL_FOLDERS_NAME_DATA_ERRORS_CORE";

const SAVE_DATA_BY_METADATA_DOCU = "SAVE_DATA_BY_METADATA_DOCU";
const SAVE_CLEAR_DATA_METADATA_DOCU = "SAVE_CLEAR_DATA_METADATA_DOCU";
const FILTER_DATA_METADATA_DOCU = "FILTER_DATA_METADATA_DOCU";
const SET_CLEAR_MEMORY_DATA_DOCU = "SET_CLEAR_MEMORY_DATA_DOCU";

//lanzamiento de payload de casos
export default function DocumentaryReducer(state = initialState, action) {
    switch (action.type) {
        //documentos
        case GET_ALL_DOCUMENTS_DOCU:
        case GET_ALL_DOCUMENTS_ERROR_DOCU:
        case SET_SELECTED_DOCUMENT_DOCU:
        case SET_SELECTED_DOCUMENT_ERROR:
        case SET_FILTER_DOCUMENTS_DOCU:
        case CREATED_DOCUMENT_DOCU:
        case GET_INDEX_BY_CABINET_DOCU:
        case GET_ALL_METADATA_BY_INDEX_DOCU:
        case CREATED_METADATA_DOCU:
        case GET_ALL_METADATA_BY_DOCUMENT_DOCU:
        case GET_ALL_METADATA_BY_DOCUMENT_ERROR_DOCU:
        //metadata
        case GET_ALL_METADATA_BY_FOLDER_DOCU:
        case GET_ALL_METADATA_BY_FOLDER_ERROR_DOCU:
        case GET_ALL_METADATA_BY_DATEINIT_END_DOCU:
        case GET_ALL_METADATA_BY_DATEINIT_END_ERROR_DOCU:
        case AGG_FOLDERID_METADATA_DOCU:
        case GET_ALL_METADATA_BYONDAY_DOCU:
        case GET_ALL_METADATA_BYONDAY_ERRORS_DOCU:
        case GET_ALL_METADATALOG_BY_FOLDER_DOCU:
        case GET_ALL_METADATALOG_BY_FOLDER_ERROR_DOCU:
        //archivos por documentos
        case GET_FILES_BY_DOCUMENT_DOCU:
        case GET_FILES_BY_DOCUMENT_ERRORS_DOCU:

        case GET_ALL_FOLDERS_NAME_DATA_CORE:
        case GET_ALL_FOLDERS_NAME_DATA_ERRORS_CORE:
        case SAVE_DATA_BY_METADATA_DOCU:
        case SAVE_CLEAR_DATA_METADATA_DOCU:
        case FILTER_DATA_METADATA_DOCU:
        case SET_CLEAR_MEMORY_DATA_DOCU:
            return action.payload;
        default:
            return state;
    }
};

//Acciones

//Traer todos los documentos
export const getAllDocumentDocu = () => async (dispatch, getState) => {
    const { documentary, sesion } = getState();
    const { TockenUser } = sesion;
    axios({
        url: `${DocumentServer}document`,
        method: "GET",
        headers: {
            Authorization: `Bearer ${TockenUser?.token}`,
        }
    }).then(function (response) {
        dispatch({
            type: GET_ALL_DOCUMENTS_DOCU,
            payload: { ...documentary, documents: response.data },
        });
    }).catch(function (error) {
        console.log(error);
        dispatch({
            type: GET_ALL_DOCUMENTS_ERROR_DOCU,
            payload: { ...documentary, documents: [] },
        });
    })

};

//Filtrar documento Seleccionado
export const setSelectedDocumentDocu = id => async (dispatch, getState) => {
    const { documentary } = getState();
    const { documents } = documentary;
    const SelectedDocument = documents.find(documents => documents.id == id);

    if (SelectedDocument == undefined) {
        dispatch({
            type: SET_SELECTED_DOCUMENT_ERROR,
            payload: { ...documentary, elementError: "El id no existe" },
        });
        return;
    }
    dispatch({
        type: SET_SELECTED_DOCUMENT_DOCU,
        payload: { ...documentary, SelectedDocument, selectedDocu: "documents" },
    });
};

//Filtrar documento Seleccionado
export const setSelectedDocumentUploaderDocu = id => async (dispatch, getState) => {
    const { documentary } = getState();
    const { documents } = documentary;
    const SelectedDocument = documents.find(documents => documents.id == id);

    if (SelectedDocument == undefined) {
        dispatch({
            type: SET_SELECTED_DOCUMENT_ERROR,
            payload: { ...documentary, elementError: "El id no existe" },
        });
        return;
    }
    dispatch({
        type: SET_SELECTED_DOCUMENT_DOCU,
        payload: { ...documentary, SelectedDocument },
    });
};

//filtrar documentos por carpeta
export const setFilterDocumentDocu = FolderId => async (dispatch, getState) => {
    const { documentary } = getState();
    const { documents } = documentary;
    dispatch({
        type: SET_FILTER_DOCUMENTS_DOCU,
        payload: {
            ...documentary, DocumentFolder: documents.filter(documents => documents.folderId == FolderId)
        },
    });
};

//Filtrar metadata archivos x carpeta


//filtrar indice por gabinete
// export const getIndexByCabinetConfig = () => async (dispatch, getState) => {
//     const res = await CoreInstance.get(`indexesbycabinet/145dde34-3057-4c87-ad0f-b1c2bba243e5`);
//     const { documentary } = getState();
//     dispatch({
//         type: GET_INDEX_BY_CABINET_DOCU,
//         payload: { ...documentary, IndexCabinetConsul: res.data }
//     });
// };


//cambiar con try catch para validar status
//Filtro de Metadata por documento
// export const getMetadataByDocumentDOCU = (id) => async (dispatch, getState) => {
//     const res = await DocumentInstance.get(`metadatabydocument/71359d6e-9d6f-4e9b-a9fc-feb618d42697`);
//     const { documentary } = getState();
//     dispatch({
//         type: GET_ALL_METADATA_BY_INDEX_DOCU,
//         payload: { ...documentary, MetadataIndex: res.data }
//     });
// };

//Traer Metadata por documento
export const getMetadataByDocumentDocu = (cabinetId, id) => async (dispatch, getState) => {
    const { documentary, sesion } = getState();
    const { TockenUser } = sesion;
    try {
        const response = await axios({
            url: `${DocumentServer}metadatabydocument/${cabinetId}/${id}`,
            headers: {
                Authorization: `Bearer ${TockenUser?.token}`
            }
        });
        console.log(response.status);
        if (response.status == 200) {
            dispatch({
                type: GET_ALL_METADATA_BY_DOCUMENT_DOCU,
                payload: { ...documentary, MetadataIndex: response.data }
            });
        }
    } catch (error) {
        console.log(error);
        dispatch({
            type: GET_ALL_METADATA_BY_DOCUMENT_ERROR_DOCU,
            payload: { ...documentary, MetadataIndex: [] },
        });
    }
};


//traer metadata por carpeta 
export const getMetadataByFolder = (id) => async (dispatch, getState) => {
    const { documentary, sesion } = getState();
    const { TockenUser } = sesion;
    try {
        const response = await axios({
            url: `${DocumentServer}metadatavaluebyfoldercabinet/${id}`,
            headers: {
                Authorization: `Bearer ${TockenUser?.token}`
            }
        });
        console.log(response.status);
        if (response.status == 200) {
            dispatch({
                type: GET_ALL_METADATA_BY_FOLDER_DOCU,
                payload: { ...documentary, MetadataFolder: response.data }
            });
        }
    } catch (error) {
        console.log(error);
        dispatch({
            type: GET_ALL_METADATA_BY_FOLDER_ERROR_DOCU,
            payload: { ...documentary, MetadataFolder: [] },
        });
    }
};


//Traer metadata de log por carpeta 
export const getMetadataLogbyFolder = (folderId) => async (dispatch, getState) => {
    const { documentary, sesion } = getState();
    const { TockenUser } = sesion;
    try {
        const response = await axios({
            url: `${DocumentServer}datedocmetacountfile/${folderId}`,
            headers: {
                Authorization: `Bearer ${TockenUser?.token}`
            }
        });
        console.log(response.status);
        if (response.status == 200) {
            dispatch({
                type: GET_ALL_METADATALOG_BY_FOLDER_DOCU,
                payload: { ...documentary, MetadataLog: response.data }
            });
        }
    } catch (error) {
        console.log(error);
        dispatch({
            type: GET_ALL_METADATALOG_BY_FOLDER_ERROR_DOCU,
            payload: { ...documentary, MetadataLog: [] },
        })
    }
}



/*<--------------------Filtros---------------------------->*/

//filtro metadata por fecha de inicio y fecha final
export const FilterMetadataByDate = (FechaInit, FechaEnd, FolderId, cabinetId) => async (dispatch, getState) => {
    const { documentary, sesion } = getState();
    const { TockenUser } = sesion;
    try {
        const response = await axios({
            url: `${DocumentServer}metadatabydate/${FolderId}/${cabinetId}/${FechaInit}/${FechaEnd}`,
            headers: {
                Authorization: `Bearer ${TockenUser?.token}`
            }
        });
        console.log(response.status);
        if (response.status == 200) {
            dispatch({
                type: GET_ALL_METADATA_BY_DATEINIT_END_DOCU,
                payload: { ...documentary, MetadataFolder: response.data }
            });
        }
    } catch (error) {
        console.log(error)
        dispatch({
            type: GET_ALL_METADATA_BY_DATEINIT_END_ERROR_DOCU,
            payload: { ...documentary, MetadataFolder: [] },
        });
    }
};

//Traer metadata por el dia actual
export const FilterMetadataByOnDay = (folderId, cabinetId, bool) => async (dispatch, getState) => {
    const { documentary, sesion } = getState();
    const { TockenUser } = sesion;
    try {
        const response = await axios({
            url: `${DocumentServer}metadatabyfolderonday/${folderId}/${cabinetId}/${bool}`,
            headers: {
                Authorization: `Bearer ${TockenUser?.token}`
            }
        });
        console.log(response.status);
        if (response.status == 200) {
            dispatch({
                type: GET_ALL_METADATA_BYONDAY_DOCU,
                payload: { ...documentary, MetadataFolder: response.data }
            });
        }
    } catch (error) {
        console.log(error)
        dispatch({
            type: GET_ALL_METADATA_BYONDAY_ERRORS_DOCU,
            payload: { ...documentary, MetadataFolder: [] },
        });
    }
}




//Guardar Carpeta Seleccionada desde Menu de Metadata
export const AggFolderMetadataSelected = (FolderId) => async (dispatch, getState) => {
    console.log(FolderId);
    const { documentary } = getState();
    dispatch({
        type: AGG_FOLDERID_METADATA_DOCU,
        payload: { ...documentary, MetaFolderSelected: FolderId }
    })
};


//Traer Archivos por documentos
export const getFilesByDocument = (DocumentId) => async (dispatch, getState) => {
    console.log(DocumentId);
    const { documentary, sesion } = getState();
    const { TockenUser } = sesion;
    try {
        const response = await axios({
            url: `${DocumentServer}filebydocument/${DocumentId}`,
            headers: {
                Authorization: `Bearer ${TockenUser?.token}`
            }
        });
        console.log(response.status);
        if (response.status == 200) {
            dispatch({
                type: GET_FILES_BY_DOCUMENT_DOCU,
                payload: { ...documentary, FileByDocument: response.data }
            });
        }
    } catch (error) {
        console.log(error);
        dispatch({
            type: GET_FILES_BY_DOCUMENT_ERRORS_DOCU,
            payload: { ...documentary, FileByDocument: [], elementError: error }
        });
    }
}



/*<----------- DOCUMENT CRUD ------------->*/

//Crear nuevo documento 
export const CreateDocumentNew = (newDoc, folderId) => async (dispatch, getState) => {
    console.log(newDoc);
    const { sesion } = getState();
    const { TockenUser } = sesion;
    axios({
        url: `${DocumentServer}document`,
        method: "PUT",
        data: newDoc,
        headers: {
            "Content-Type": "Application/json",
            Authorization: `Bearer ${TockenUser?.token}`
        },
    }).then(function (response) {
        if (response.status == 200) {
            dispatch(getAllDocumentDocu());
            toast.success('Documento Creado');
        }
        dispatch(setFilterDocumentDocu(folderId));
        dispatch(getDocumentIdDocument(newDoc.id));
        dispatch(setDocumentFileDocu(newDoc.id));
    }).catch(function (error) {
        console.log(error);
        toast.error('Documento no Creado');
    })
};

/*<---------------Metadata-------------> */
//Crear Metadata 
export const CreatedMetadataDocu = (newMeta) => async (dispatch, getState) => {
    console.log(newMeta);
    const { documentary, sesion } = getState();
    const { TockenUser } = sesion;
    const { MetadataIndex } = documentary;
    axios({
        url: `${DocumentServer}metadata`,
        method: "PUT",
        data: newMeta,
        headers: {
            "Content-Type": "Application/json",
            Authorization: `Bearer ${TockenUser?.token}`
        },
    }).then(function (response) {
        if (response.status == 200) {
            dispatch({
                type: CREATED_METADATA_DOCU,
                payload: { ...documentary, MetadataIndex: [...MetadataIndex, newMeta] }
            });
            toast.success('Metadata Creada');
        }
    }).catch(function (error) {
        console.log(error);
        toast.error('Metadata no Creada');
    })
};


/*<-----------------CRUD FILES VIEW TRADITIONAL---------> */
//descargar archivo por id desde modal
export const getFilesUnitbyIdDocu = (index) => async (dispatch, getState) => {
    const { sesion } = getState();
    const { TockenUser } = sesion;
    const response = await axios({
        url: `${DocumentServer}downloadfilebyid/${index}`,
        headers: {
            Authorization: `Bearer ${TockenUser?.token}`
        }
    });
    console.log(response.status);
    if (response.status == 200) {
        const Data = response.data;
        switch (Data.extension) {
            case ".pdf":
                const url = "data:application/pdf;base64," + Data.fileBase64;
                import("file-saver").then((module) => {
                    if (module && module.default) {
                        const data = url;
                        module.default.saveAs(data, Data.name);
                    }
                });

            // case ".txt":
            //     const url1 = "data:text/plain;base64," + Data.fileBase64;
            //     import("file-saver").then((module) => {
            //         if (module && module.default) {
            //             const data = url1;
            //             module.default.saveAs(data, Data.name);
            //         }
            //     });

            // case ".doc":
            //     const url2 = "data:application/msword;base64," + Data.fileBase64;
            //     import("file-saver").then((module) => {
            //         if (module && module.default) {
            //             const data = url2;
            //             module.default.saveAs(data, Data.name);
            //         }
            //     });

            // case ".rar":
            //     const url3 = "data:application/x-rar-compressed;base64," + Data.fileBase64;
            // import("file-saver").then((module) => {
            //     if(module && module.default) {
            //         const data = url3;
            //         module.default.saveAs(data, Data.name);
            //     }
            // });


            // case ".xlsx":
            //     const url4 = ";base64," + Data.fileBase64;
            // import("file-saver").then((module) => {
            //     if(module && module.default) {
            //         const data = url4;
            //         module.default.saveAs(data, Data.name);
            //     }
            // });

            // case "xlsm":
            //     const url5 = "data:application/vnd.ms-excel.sheet.macroEnabled.12;base64," + Data.fileBase64;
            // import("file-saver").then((module) => {
            //     if(module && module.default) {
            //         const data = url5;
            //         module.default.saveAs(data, Data.name);
            //     }
            // });


            // case "xls":
            //     const url6 = "data:application/vnd.ms-excel;base64," + Data.fileBase64;
            // import("file-saver").then((module) => {
            //     if(module && module.default) {
            //         const data = url6;
            //         module.default.saveAs(data, Data.name);
            //     }
            // });

            // case "xlsb":
            //     const url7 = "application/vnd.ms-excel.sheet.binary.macroEnabled.12;base64," + Data.fileBase64;
            // import("file-saver").then((module) => {
            //     if(module && module.default) {
            //         const data = url7;
            //         module.default.saveAs(data, Data.name);
            //     }
            // });
            default:
                return Data.extension;
        }
    }
}



//eliminar archivo
export const DeleteFilesViewTraditionalDocu = (FileId, documentId, deleteFile) => async (dispatch, getState) => {
    const { sesion } = getState();
    const { TockenUser } = sesion;
    axios({
        url: `${DocumentServer}file/${FileId}`,
        method: "DELETE",
        data: deleteFile,
        headers: {
            "Content-Type": "Application/json",
            Authorization: `Bearer ${TockenUser?.token}`
        },
    }).then(function (response) {
        if (response.status == 200) {
            dispatch(getFilesByDocument(documentId));
            toast.success("Archivo Eliminado");
        }
    }).catch(function (error) {
        console.log(error);
        toast.error("Archivo no Eliminado");
    });
}

//filtrar a nivel de carpetas 
export const setFilterFoldersByName = (name) => async (dispatch, getState) => {
    const { documentary, sesion } = getState();
    const { TockenUser } = sesion;
    try {
        const response = await axios({
            url: `${CoreServer}folderbytext/${name}`,
            headers: {
                Authorization: `Bearer ${TockenUser?.token}`
            }
        });
        if (response.status == 200) {
            dispatch({
                type: GET_ALL_FOLDERS_NAME_DATA_CORE,
                payload: { ...documentary, SearchFolder: response.data },
            });
            dispatch(setChangeSelectView("search"));
        }
    } catch (error) {
        console.log(error);
        dispatch({
            type: GET_ALL_FOLDERS_NAME_DATA_ERRORS_CORE,
            payload: { ...documentary, SearchFolder: [] }
        });
    }
}

//guardar array de datos de metadata para presentar en modal de descarga
export const setSaveDataValuebyMetadata = (data) => async (dispatch, getState) => {
    const { documentary } = getState();
    dispatch({
        type: SAVE_DATA_BY_METADATA_DOCU,
        payload: { ...documentary, MetaValueDocu: data }
    })
};

//limpiar estado array de datos de metadata para presentar el modal de descarga
export const setClearSaveDataValueMetadata = () => async (dispatch, getState) => {
    const { documentary } = getState();
    dispatch({
        type: SAVE_CLEAR_DATA_METADATA_DOCU,
        payload: { ...documentary, MetaValueDocu: [] }
    })
}


//filtro de metadata para array de datos de metadata vista de descarga
export const setFilterMetadataValueDocu = (text) => async (dispatch, getState) => {
    const { documentary } = getState();
    const { MetaValueDocu, FilterMetaValue } = documentary;
    dispatch({
        type: FILTER_DATA_METADATA_DOCU,
        payload: {
            ...documentary, FilterMetaValue: MetaValueDocu.filter((MetaValueDocu) => {
                if (MetaValueDocu.value.toString().toLowerCase().includes(text.toLowerCase())
                ) {
                    return FilterMetaValue;
                }
            })
        }
    });
}

//Limpiar memoria de datos para cierre de sesion 
export const setClearDataMemoryDocu = () => async (dispatch, getState) => {
    const { documentary } = getState();
    dispatch({
        type: SET_CLEAR_MEMORY_DATA_DOCU,
        payload: {
            ...documentary,
            documents: [],
            IndexCabinetConsul: [],
            MetadataIndex: [],
            DocumentFolder: [],
            SelectedDocument: null,
            MetadataFolder: [],
            MetadataLog: [],
            MetaFolderSelected: "",
            FileByDocument: [],
            selectedDocu: "",
            elementError: null,
            SearchFolder: [],
            MetaValueDocu: [],
            FilterMetaValue: []
        }
    })
}