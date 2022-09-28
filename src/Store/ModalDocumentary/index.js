//estado iniciales
const initialState = {
    DocumentCreated: false,
    DocumentDelete: false,
    FileUpload: false,
    FileUploadUnit: false,
    FileUpdate: false,
    FileDelete: false,
    MetadataCreated: false,
    modalPreview: false,
    modalFilesMetadata: false,
    modalFiles: false,
};

//tag de acciones
const OPEN_MODAL_CREATED_DOCUMENT_DOCU = "OPEN_MODAL_CREATED_DOCUMENT_DOCU";
const OPEN_MODAL_DELETE_DOCUMENT_DOCU = "OPEN_MODAL_DELETE_DOCUMENT_DOCU";
const OPEN_MODAL_UPLOAD_FILE_DOCU = "OPEN_MODAL_UPLOAD_FILE_DOCU";
const OPEN_MODAL_UPLOADUNIT_FILE_DOCU = "OPEN_MODAL_UPLOADUNIT_FILE_DOCU";
const OPEN_MODAL_METADATA_CREATED_DOCU = 
"OPEN_MODAL_METADATA_CREATED_DOCU";
const SET_OPEN_DETALLE_MODAL_DOCU = "SET_OPEN_DETALLE_MODAL_DOCU";
const SET_OPEN_MODALFILES_METADATA_DOCU = "SET_OPEN_MODALFILES_METADATA_DOCU";
const SET_CLOSE_PREVIEW_DETALLE_DOCU = "SET_CLOSE_PREVIEW_DETALLE_DOCU";
const OPEN_MODAL_UPLOADER_FILE_DELETE_DOCU = "OPEN_MODAL_UPLOADER_FILE_DELETE_DOCU";
const OPEN_MODAL_UPDATE_FILE_DOCU = "OPEN_MODAL_UPDATE_FILE_DOCU";


//payload de tag de acciones 
export default function ModalDocumentaryReducer(state = initialState, action) {
    switch (action.type){
        //Document
        case OPEN_MODAL_CREATED_DOCUMENT_DOCU:
        case OPEN_MODAL_DELETE_DOCUMENT_DOCU:
        case OPEN_MODAL_UPLOAD_FILE_DOCU:
        case OPEN_MODAL_UPLOADUNIT_FILE_DOCU:
        case OPEN_MODAL_METADATA_CREATED_DOCU:
        case SET_OPEN_DETALLE_MODAL_DOCU:
        case SET_OPEN_MODALFILES_METADATA_DOCU:
        case SET_CLOSE_PREVIEW_DETALLE_DOCU:
        case OPEN_MODAL_UPLOADER_FILE_DELETE_DOCU:
        case OPEN_MODAL_UPDATE_FILE_DOCU:
            return action.payload;
        default:
            return state;
    }
};

//acciones 
/*<-------------Documentos--------------->*/

//Modal crear nuevo Documento
export const setOpenModalDocumentCreated = () => async(dispatch, getState) => {
    const { modalDocumentary } = getState();
    dispatch({
        type: OPEN_MODAL_CREATED_DOCUMENT_DOCU,
        payload: { ...modalDocumentary, DocumentCreated:!modalDocumentary.DocumentCreated }
    });
};

//Eliminar Documento (alerta solo se puede borrar si el documento esta vacio )
export const setOpenModalDocumentDelete = () => async(dispatch, getState) => {
    const { modalDocumentary } = getState();
    dispatch({
        type: OPEN_MODAL_DELETE_DOCUMENT_DOCU,
        payload: { ...modalDocumentary, DocumentDelete:!modalDocumentary.DocumentDelete }
    });
};

/*<-------------------Files-------------------->*/
//Modal subir Archivo Nuevo
export const setOpenModalUploadFile = () => async(dispatch, getState) => {
    const { modalDocumentary } = getState();
    dispatch({
        type: OPEN_MODAL_UPLOAD_FILE_DOCU,
        payload: { ...modalDocumentary, FileUpload:!modalDocumentary.FileUpload }
    });
};

//Modal Actualiza un file 
export const setOpenModalUploadUpdateFile = () => async(dispatch, getState) => {
    const { modalDocumentary } = getState();
    dispatch({
        type: OPEN_MODAL_UPDATE_FILE_DOCU,
        payload: { ...modalDocumentary, FileUpdate:!modalDocumentary.FileUpdate }
    })
}

//Modal subir archivo uno a uno
export const setOpenModalUploaderUnirFile = () => async(dispatch, getState) => {
    const { modalDocumentary } = getState();
    dispatch({
        type: OPEN_MODAL_UPLOADUNIT_FILE_DOCU,
        payload: { ...modalDocumentary, FileUploadUnit:!modalDocumentary.FileUploadUnit }      
    })
}

//Modal Eliminar Archivo 
export const setOpenModalDeleteFile = () => async(dispatch, getState) => {
    const { modalDocumentary } = getState();
    dispatch({
        type: OPEN_MODAL_UPLOADER_FILE_DELETE_DOCU,
        payload: { ...modalDocumentary, FileDelete:!modalDocumentary.FileDelete}
    })
}

/*<-------------------METADATA--------------------->*/
//Modal Crear Nueva Metadata
export const setOpenModalMetadataCreated = () => async(dispatch, getState) => {
    const { modalDocumentary } = getState();
    dispatch({
        type: OPEN_MODAL_METADATA_CREATED_DOCU,
        payload: { ...modalDocumentary, MetadataCreated:!modalDocumentary.MetadataCreated }
    });
};

/*<---------------------Seccion Preview----------------->*/
export const setOpenDetalleModal = () => async (dispatch, getState) => {
    const { modalDocumentary } = getState();
    dispatch({
        type: SET_OPEN_DETALLE_MODAL_DOCU,
        payload: {
            ...modalDocumentary, modalPreview:
            !modalDocumentary.modalPreview}
    })
};

export const setCloseDetalleModal = (bool) => async (dispatch, getState) => {
    const { modalDocumentary } = getState();
    dispatch({
        type: SET_CLOSE_PREVIEW_DETALLE_DOCU,
        payload: { ...modalDocumentary, modalPreview: bool}
    })
}


/*<----------------Modal Files by Metadata----------------->*/
export const setOpenModalFilesMetadata = () => async (dispatch, getState) => {
    const { modalDocumentary } = getState();
    dispatch({
        type: SET_OPEN_MODALFILES_METADATA_DOCU,
        payload: {
            ...modalDocumentary, modalFiles:
            !modalDocumentary.modalFiles}
    })
};


/*<-----------------------Section Metadata File Document---------------------------->*/ 
// export const setOpenSectionFilesByMetadata = () => (dispatch, getState) => {
//     const { modalDocumentary } = getState();
//     dispatch({
//         type: SET_OPEN_SECTION_FILES_BYMETA,
//         payload: { ...modal}
//     })
// }