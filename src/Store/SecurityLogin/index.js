import axios from "axios";
import { LoginSuccessCore } from "../../Store/ModalCore";
import { SecurityServer } from "../../config/axios";
import toast, { Toaster } from "react-hot-toast";
import jwt_decode from "jwt-decode";

const initialState = {
    UserList: [],
    TockenUser: { token: "" },
    Route: "",
    TockenError: "",
    RolSesion: {},
};

const TOCKEN_USER_LOGIN_SUCCESS = "TOCKEN_USER_LOGIN_SUCCESS";
const TOCKEN_USER_LOGIN_ERROR = "TOCKEN_USER_LOGIN_ERROR";
const GET_ALL_USER_LIST_SECURITY = "GET_ALL_USER_LIST_SECURITY";
const GET_ALL_USER_LIST_SECURITY_ERROR = "GET_ALL_USER_LIST_SECURITY_ERROR";
const SAVE_TOCKEN_ROL_USERS = "SAVE_TOCKEN_ROL_USERS";
const SAVE_ROLL_USER_SECURITY = "SAVE_ROLL_USER_SECURITY";
const CLEAR_TOCKEN_SESION_CLOSE_SECURITY = "CLEAR_TOCKEN_SESION_CLOSE_SECURITY";

export default function SesionReducer(state = initialState, action) {
    switch (action.type) {
        case TOCKEN_USER_LOGIN_SUCCESS:
        case TOCKEN_USER_LOGIN_ERROR:
        case GET_ALL_USER_LIST_SECURITY:
        case GET_ALL_USER_LIST_SECURITY_ERROR:
        case SAVE_TOCKEN_ROL_USERS:
        case SAVE_ROLL_USER_SECURITY:
        case CLEAR_TOCKEN_SESION_CLOSE_SECURITY:
            return action.payload;
        default:
            return state;
    }
};

//obtener tocken de inicio de sesion 
export const setLoginUserTocken = (DataLogin) => async (dispatch, getState) => {
    const { sesion } = getState();
    axios({
        url: `${SecurityServer}user/login`,
        method: "POST",
        data: DataLogin,
        headers: {
            'Content-Type': "Application/json",
            'Access-Control-Allow-Origin': '*',

        },
    }).then(function (response) {
        console.log(response.status);
        if (response.status == 401) {
            dispatch({
                type: TOCKEN_USER_LOGIN_SUCCESS,
                payload: { ...sesion, TockenError: "Usuario no Autorizado", TockenError: "", Route: response.status }
            });
            toast.error("Acceso No Permitido");
        }
        if (response.status == 200) {
            dispatch({
                type: TOCKEN_USER_LOGIN_SUCCESS,
                payload: { ...sesion, TockenUser: response.data, TockenError: "", Route: response.status }
            });
            toast.success("Acceso Exitoso");
            dispatch(LoginSuccessCore());
            dispatch(saveAllRolUserSecurity());
        }
    }).catch(function (error) {
        console.log(error);
        dispatch({
            type: TOCKEN_USER_LOGIN_ERROR,
            payload: { ...sesion, TockenUser: [], TockenError: "Usuario o Contraseña Incorrecta", Route: "" }
        })
        toast.error("Acceso Denegado")
    })
};

//obtener rol de usuario 
export const saveAllRolUserSecurity = () => async (dispatch, getState) => {
    const { sesion } = getState();
    const { TockenUser } = sesion;
    const token = TockenUser.token;
    const decoded = jwt_decode(token);
    // console.log(decoded);
    // console.log(decoded.UserId);
    // console.log(decoded.Role);
    // console.log(decoded.UserName);
    dispatch({
        type: SAVE_ROLL_USER_SECURITY,
        payload: { ...sesion, RolSesion: decoded }
    })
}

//Limpiar tocken cierre de sesion 
export const setClearTockenInvalidate = () => async (dispatch, getState) => {
    const { sesion } = getState();
    dispatch({
        type: CLEAR_TOCKEN_SESION_CLOSE_SECURITY,
        payload: { sesion, TockenUser: {} },
    })
}


//peticion con autorizacion para listar usuarios
export const getAllUserListSecurity = () => async (dispatch, getState) => {
    const { sesion } = getState();
    const { TockenUser } = sesion;
    axios({
        url: `${SecurityServer}user`,
        method: "GET",
        headers: {
            Authorization: `Bearer ${TockenUser?.token}`
        }
    }).then(function (response) {
        console.log(response.data);
        if (response.status == 200) {
            dispatch({
                type: GET_ALL_USER_LIST_SECURITY,
                payload: {
                    ...sesion, UserList: response.data
                }
            })
        }
    }).catch(function (error) {
        console.log(error);
        dispatch({
            type: GET_ALL_USER_LIST_SECURITY_ERROR,
            payload: { ...sesion, UserList: [] }
        })
    });
}
