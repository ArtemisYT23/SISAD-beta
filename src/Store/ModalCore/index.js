//estado inicial
const initialState = {
    GroupCreated: false,
    GroupUpdate: false,
    GroupDelete: false,
    CabinetCreated: false,
    CabinetUpdate: false,
    CabinetDelete: false,
    FolderCreated: false,
    FolderUpdate: false,
    FolderDelete: false,
    //ContextMenu
    ContextGroup: false,
    ContextFolder: false, 
    ContextDocument: false,
    ContextFile: false,
    ContextOptionMeta: false,
    ModalLogin: false,
    instance: "",
    Selection: "SUCCESS_LOGIN",
};

// tag de acciones
const OPEN_MODAL_CREATE_GROUP_CORE = "OPEN_MODAL_CREATE_GROUP_CORE";
const OPEN_MODAL_UPDATE_GROUP_CORE = "OPEN_MODAL_UPDATE_GROUP_CORE";
const OPEN_MODAL_DELETE_GROUP_CORE = "OPEN_MODAL_DELETE_GROUP_CORE";
const OPEN_MODAL_CREATE_CABINET_CORE = "OPEN_MODAL_CREATE_CABINET_CORE";
const OPEN_MODAL_UPDATE_CABINET_CORE = "OPEN_MODAL_UPDATE_CABINET_CORE";
const OPEN_MODAL_DELETE_CABINET_CORE = "OPEN_MODAL_DELETE_CABINET_CORE";
const OPEN_MODAL_CREATE_FOLDER_CORE = "OPEN_MODAL_CREATE_FOLDER_CORE";
const OPEN_MODAL_UPDATE_FOLDER_CORE = "OPEN_MODAL_UPDATE_FOLDER_CORE";
const OPEN_MODAL_DELETE_FOLDER_CORE = "OPEN_MODAL_DELETE_FOLDER_CORE";
const SET_OPEN_MENUCONTEXT_GROUP = "SET_OPEN_MENUCONTEXT_GROUP";
const GET_STATE_OPEN_MODAL_EDIT_CABINET = "GET_STATE_OPEN_MODAL_EDIT_CABINET";
const GET_OPEN_NEW_EDIT_CABINET = "GET_OPEN_NEW_EDIT_CABINET";
const SET_OPEN_MENUCONTEXT_FOLDER = "SET_OPEN_MENUCONTEXT_FOLDER";
const SET_OPEN_MENUCONTEXT_DOCUMENT = "SET_OPEN_MENUCONTEXT_DOCUMENT";
const SET_OPEN_MENUCONTEXT_FILE = "SET_OPEN_MENUCONTEXT_FILE";
const SET_OPEN_MENUCONTEXT_OPTIONS_META = "SET_OPEN_MENUCONTEXT_OPTIONS_META";
const OPEN_MODAL_LOGIN_USER_CORE = "OPEN_MODAL_LOGIN_USER_CORE";
const LOGIN_SUCCESS_SYSTEM = "LOGIN_SUCCESS_SYSTEM";

const SET_CLOSE_MENUCONTEXT_FOLDER = "SET_CLOSE_MENUCONTEXT_FOLDER";
const SET_CLOSE_MENUCONTEXT_DOCUMENT = "SET_CLOSE_MENUCONTEXT_DOCUMENT";
const SET_CLOSE_MENUCONTEXT_OPTIONS_META = "SET_CLOSE_MENUCONTEXT_OPTIONS_META";
const SET_CLOSE_MENUCONTEXT_FILE = "SET_CLOSE_MENUCONTEXT_FILE";

//payload de tag de acciones
export default function ModalCoreReducer(state = initialState, action) {
    switch (action.type) {
        case OPEN_MODAL_CREATE_GROUP_CORE:
        case OPEN_MODAL_UPDATE_GROUP_CORE:
        case OPEN_MODAL_DELETE_GROUP_CORE:
        case OPEN_MODAL_CREATE_CABINET_CORE:
        case OPEN_MODAL_UPDATE_CABINET_CORE:
        case OPEN_MODAL_DELETE_CABINET_CORE:
        case OPEN_MODAL_CREATE_FOLDER_CORE:
        case OPEN_MODAL_UPDATE_FOLDER_CORE:
        case OPEN_MODAL_DELETE_FOLDER_CORE:
        case SET_OPEN_MENUCONTEXT_GROUP:
        case GET_STATE_OPEN_MODAL_EDIT_CABINET:
        case GET_OPEN_NEW_EDIT_CABINET:
        case SET_OPEN_MENUCONTEXT_FOLDER:
        case SET_OPEN_MENUCONTEXT_DOCUMENT:
        case SET_OPEN_MENUCONTEXT_FILE:
        case SET_OPEN_MENUCONTEXT_OPTIONS_META:
        case OPEN_MODAL_LOGIN_USER_CORE:
        case LOGIN_SUCCESS_SYSTEM:

        case SET_CLOSE_MENUCONTEXT_FOLDER:
        case SET_CLOSE_MENUCONTEXT_DOCUMENT:
        case SET_CLOSE_MENUCONTEXT_OPTIONS_META:
        case SET_CLOSE_MENUCONTEXT_FILE:
            return action.payload;
        default:
            return state;
    }
};

//acciones

/*<-----------GABINETES-------------->*/
//Modal para guardar nuevo Gabinete 
export const setOpenModalCabinetCreated = () => async (dispatch, getState) => {
    const { modalCore } = getState();
    dispatch({
        type: OPEN_MODAL_CREATE_CABINET_CORE,
        payload: {
            ...modalCore, CabinetCreated:!modalCore.CabinetCreated
        }
    });
};

//Modal para actualizar Gabinete
export const setOpenModalCabinetUpdate = () => async(dispatch, getState) => {
    const { modalCore } = getState();
    dispatch({
        type: OPEN_MODAL_UPDATE_CABINET_CORE,
        payload: {
            ...modalCore, CabinetUpdate:!modalCore.CabinetUpdate
        }
    });
};

//Modal para Eliminar Gabinete
export const setOpenModalCabinetDelete = () => async(dispatch, getState) => {
    const { modalCore } = getState();
    dispatch({
        type: OPEN_MODAL_DELETE_CABINET_CORE,
        payload: {
            ...modalCore, CabinetDelete:!modalCore.CabinetDelete 
        }
    });
};


/*<--------------FOLDER------------------>*/
//Modal para guardar nueva carpeta
export const setOpenModalFolderCreated = () => async(dispatch, getState) => {
    const { modalCore } = getState();
    dispatch({
        type: OPEN_MODAL_CREATE_FOLDER_CORE,
        payload: {
            ...modalCore, FolderCreated:!modalCore.FolderCreated 
        }
    });
};

//Modal para actualizar nueva carpeta
export const setOpenModalFolderUpdate = () => async(dispatch, getState) => {
    const { modalCore } = getState();
    dispatch({
        type: OPEN_MODAL_UPDATE_FOLDER_CORE,
        payload: {
            ...modalCore, FolderUpdate:!modalCore.FolderUpdate 
        }
    });
};

//Modal para Borrar Carpeta
export const setOpenModalFolderDelete = () => async(dispatch, getState) => {
    const { modalCore } = getState();
    dispatch({
        type: OPEN_MODAL_DELETE_FOLDER_CORE,
        payload: {
            ...modalCore, FolderDelete:!modalCore.FolderDelete 
        }
    });
};

/*<----------------------------GROUPS------------------------------------->*/
//Modal para crear grupos
export const setOpenModalGroupCreated = () => async(dispatch, getState) => {
    const { modalCore } = getState();
    dispatch({
        type: OPEN_MODAL_CREATE_GROUP_CORE,
        payload: { 
            ...modalCore, GroupCreated:!modalCore.GroupCreated
        }
    });
};

//Modal para Actualizar Un Grupo de gabinetes
export const setOpenModalGroupUpdate = () => async(dispatch, getState) => {
    const { modalCore } = getState();
    dispatch({
        type: OPEN_MODAL_UPDATE_GROUP_CORE,
        payload: { 
            ...modalCore, GroupUpdate:!modalCore.GroupUpdate
        }
    });
};

//Modal para eliminar un grupo de gabinetes
export const setOpenModalGroupDelete = () => async(dispatch, getState) => {
    const { modalCore } = getState();
    dispatch({
        type: OPEN_MODAL_DELETE_GROUP_CORE,
        payload: { 
            ...modalCore, GroupDelete:!modalCore.GroupDelete
        }
    });
};


/*<-----------------------------Menu Contextual--------------------------->*/

//menu crear gabinetes y grupos
export const setOpenMenuContextGroup = () => async(dispatch, getState) => {
    const { modalCore } = getState();
    dispatch({
        type: SET_OPEN_MENUCONTEXT_GROUP,
        payload: { ...modalCore, ContextGroup:!modalCore.ContextGroup }
    })
};

//cerrar modal de gabinetes y grupos
export const setOpenContextEdit = () => async(dispatch, getState) => {
    const { modalCore } = getState();
    dispatch({
        type: GET_STATE_OPEN_MODAL_EDIT_CABINET,
        payload: { ...modalCore, instance: "success"}
    }); 
}

//limpiar estado para aperturas de modales
export const setOpenContextNewEdit = () => async(dispatch, getState) => {
    const { modalCore } = getState();
    dispatch({
        type: GET_OPEN_NEW_EDIT_CABINET,
        payload: { ...modalCore, instance: ""}
    });
}

//Menu Contextual para carpetas  
export const setOpenContextFolder = () => async (dispatch, getState) => {
    const { modalCore } = getState();
    dispatch({
        type: SET_OPEN_MENUCONTEXT_FOLDER,
        payload: { ...modalCore, ContextFolder:!modalCore.ContextFolder }
    })
};

export const setCloseContextFolder = (bool) => async(dispatch, getState) => {
    const { modalCore } = getState();
    dispatch({
        type: SET_CLOSE_MENUCONTEXT_FOLDER,
        payload: { ...modalCore, ContextFolder: bool}
    })
}

//Menu Contextual para documentos
export const setOpenMenuContextDocument = () => async (dispatch, getState) => {
    const { modalCore } = getState();
    dispatch({
        type: SET_OPEN_MENUCONTEXT_DOCUMENT,
        payload: { ...modalCore, ContextDocument:!modalCore.ContextDocument }
    })
};

export const setCloseMenuContextualDocument = (bool) => async(dispatch, getState) => {
    const { modalCore } = getState();
    dispatch({
        type: SET_CLOSE_MENUCONTEXT_DOCUMENT,
        payload: { ...modalCore, ContextDocument: bool}
    })
}

//Menu Contextual para Archivos
export const setOpenMenuContextFile = () => async (dispatch, getState) => {
    const { modalCore } = getState();
    dispatch({
        type: SET_OPEN_MENUCONTEXT_FILE,
        payload: { ...modalCore, ContextFile:!modalCore.ContextFile }
    })
};

export const setCloseMenuContextFile = (bool) => async(dispatch, getState) => {
    const { modalCore } = getState();
    dispatch({
        type: SET_CLOSE_MENUCONTEXT_FILE,
        payload: { ...modalCore,
        ContextFile: bool}
    })
}


//Menu Contextual para opciones de metadata
export const setOpenMenuContextOptionMeta = () => async (dispatch, getState) => {
    const { modalCore } = getState();
    dispatch({
        type: SET_OPEN_MENUCONTEXT_OPTIONS_META,
        payload: { ...modalCore, ContextOptionMeta:!modalCore.ContextOptionMeta }
    })
}

export const setCloseMenuContextOptionMeta = (bool) => async (dispatch, getState) => {
    const { modalCore } = getState();
    dispatch({
        type: SET_CLOSE_MENUCONTEXT_OPTIONS_META,
        payload: { ...modalCore, ContextOptionMeta: bool}
    })
}

/*<--------------------------Modal login------------------------>*/ 
export const setOpenModalLoginCore = () => (dispatch, getState) => {
    const { modalCore } = getState();
    dispatch({
        type: OPEN_MODAL_LOGIN_USER_CORE,
        payload: { ...modalCore, ModalLogin:!modalCore.ModalLogin }
    });
    
}

export const LoginSuccessCore = () => (dispatch, getState) => {
    const { modalCore } = getState();
    dispatch({
        type: LOGIN_SUCCESS_SYSTEM,
        payload: { ...modalCore, Selection: "SUCCESS_LOGIN" }
    });
}
