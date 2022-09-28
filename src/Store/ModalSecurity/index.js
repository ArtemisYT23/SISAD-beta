//estados iniciales
const initialState = {
    CorreoEditing: false,
    FotoEditing: false,
    TelefonoEditing: false,
    CompañiaEditing: false,
    NombreEditing: false,
    UserCreated: false,
    UserUpdate: false,
    UserDelete: false,

};

//tag de acciones
const OPEN_MODALSECURITY_CORREO_DOCU = "OPEN_MODALSECURITY_CORREO_DOCU";
const OPEN_MODALSECURITY_FOTO_DOCU = "OPEN_MODALSECURITY_FOTO_DOCU";
const OPEN_MODALSECURITY_TELEFONO_DOCU = "OPEN_MODALSECURITY_TELEFONO_DOCU";
const OPEN_MODALSECURITY_COMPAÑIA_DOCU = "OPEN_MODALSECURITY_COMPAÑIA_DOCU";
const OPEN_MODALSECURITY_NOMBRE_DOCU = "OPEN_MODALSECURITY_NOMBRE_DOCU";

//crud usuarios
const OPEN_MODAL_CREATED_USER_DOCU = "OPEN_MODAL_CREATED_USER_DOCU";
const OPEN_MODAL_UPDATE_USER_DOCU = "OPEN_MODAL_UPDATE_USER_DOCU";
const OPEN_MODAL_DELETE_USER_DOCU = "OPEN_MODAL_DELETE_USER_DOCU";

//payload de tag de acciones
export default function ModalSecurityReducer(state = initialState, action) {
    switch (action.type) {
        case OPEN_MODALSECURITY_CORREO_DOCU:
        case OPEN_MODALSECURITY_FOTO_DOCU:
        case OPEN_MODALSECURITY_TELEFONO_DOCU:
        case OPEN_MODALSECURITY_COMPAÑIA_DOCU:
        case OPEN_MODALSECURITY_NOMBRE_DOCU:
        
        //crud de usuarios
        case OPEN_MODAL_CREATED_USER_DOCU:
        case OPEN_MODAL_UPDATE_USER_DOCU:
        case OPEN_MODAL_DELETE_USER_DOCU:
            return action.payload;
        default:
            return state;
    }
};

/*<-----------------Modales Security Panel Usuario---------------> */
//Correo Modal
export const setOpenModalCorreoSecurity = () => async(dispatch, getState) => {
    const { modalSecurity } = getState();
    dispatch({
        type: OPEN_MODALSECURITY_CORREO_DOCU,
        payload: { ...modalSecurity, CorreoEditing:!modalSecurity.CorreoEditing }
    });
}

//Modal Foto
export const setOpenModalFotoSecurity = () => async(dispatch, getState) => {
    const { modalSecurity } = getState();
    dispatch({
        type: OPEN_MODALSECURITY_FOTO_DOCU,
        payload: { ...modalSecurity, FotoEditing:!modalSecurity.FotoEditing }
    });
}


//Modal Telefono
export const setOpenModalTelefonoSecurity = () => async(dispatch, getState) => {
    const { modalSecurity } = getState();
    dispatch({
        type: OPEN_MODALSECURITY_TELEFONO_DOCU,
        payload: { ...modalSecurity, TelefonoEditing:!modalSecurity.TelefonoEditing }
    });
}


//Modal Compañia
export const setOpenModalCompañiaSecurity = () => async(dispatch, getState) => {
    const { modalSecurity } = getState();
    dispatch({
        type: OPEN_MODALSECURITY_COMPAÑIA_DOCU,
        payload: { ...modalSecurity, CompañiaEditing:!modalSecurity.CompañiaEditing }
    });
}


//ModalNombre
export const setOpenModalNombreSecurity = () => async(dispatch, getState) => {
    const { modalSecurity } = getState();
    dispatch({
        type: OPEN_MODALSECURITY_NOMBRE_DOCU,
        payload: { ...modalSecurity, NombreEditing:!modalSecurity.NombreEditing }
    });
}

/*<-------------CRUD DE USUARIOS--------------->*/
//creacion de usuarios 
export const setOpenModalCreatedUser = () => async(dispatch, getState) => {
    const { modalSecurity } = getState();
    dispatch({
        type: OPEN_MODAL_CREATED_USER_DOCU,
        payload: { ...modalSecurity, UserCreated:!modalSecurity.UserCreated}
    })
}

//actualizacion de usuarios
export const setOpenModalUpdateUser = () => async(dispatch, getState) => {
    const { modalSecurity } = getState();
    dispatch({
        type: OPEN_MODAL_UPDATE_USER_DOCU,
        payload: { ...modalSecurity, UserUpdate:!modalSecurity.UserUpdate}
    })
}

//eliminacion de usuarios
export const setOpenModalDeleteUser = () => async(dispatch, getState) => {
    const { modalSecurity } = getState();
    dispatch({
        type: OPEN_MODAL_DELETE_USER_DOCU,
        payload: { ...modalSecurity, UserDelete:!modalSecurity.UserDelete}
    })
}