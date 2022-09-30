import axios from "axios";
import { SecurityServer } from "../../config/axios";
import { getAllUserListSecurity } from "../SecurityLogin";
import toast, { Toaster } from "react-hot-toast";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  id: uuidv4(),
  userName: "",
  password: "",
  email: "",
  profileId: "e4b558f3-bdab-4248-8fd2-357457090347",
  businessId: "33a72cf9-e989-4e3b-9f7e-388e2dcae266",
  usersData: {
    citizenShipCard: "0926570201",
    name: "Eduardo Paul",
    surName: "Cando Reyes",
    area: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    departament: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    photo: null,
  },
  SelectionUser: [],
  IdUsuario: "",
  Usuario: "",
  Correo: "",
  Perfil: "",
  Operation: true,
  CreatedAt: "",
  business: "33a72cf9-e989-4e3b-9f7e-388e2dcae266",
};

const CHANGE_NAME_CREATED_USER = "CHANGE_NAME_CREATED_USER";
const CHANGE_PASS_CREATED_PASS = "CHANGE_PASS_CREATED_PASS";
const CHANGE_EMAIL_CREATED_EMAIL = "CHANGE_EMAIL_CREATED_EMAIL";
const CHANGE_CLEAR_DATA_USER = "CHANGE_CLEAR_DATA_USER";
const GET_USER_SELECTED_SECURITY = "GET_USER_SELECTED_SECURITY";
const CHARGED_NAME_UPDATE_USER = "CHARGED_NAME_UPDATE_USER";
const CHARGED_CORREO_UPDATE_USER = "CHARGED_CORREO_UPDATE_USER";
const CHARGED_IDUSER_UPDATE_USER = "CHARGED_IDUSER_UPDATE_USER";
const CHANGE_PERFIL_UPDATE_USER = "CHANGE_PERFIL_UPDATE_USER";
const CHARGED_CREATED_UPDATED_USER = "CHARGED_CREATED_UPDATED_USER";

export default function UserCreatedReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_NAME_CREATED_USER:
    case CHANGE_PASS_CREATED_PASS:
    case CHANGE_EMAIL_CREATED_EMAIL:
    case CHANGE_CLEAR_DATA_USER:
    case GET_USER_SELECTED_SECURITY:
    case CHARGED_NAME_UPDATE_USER:
    case CHARGED_CORREO_UPDATE_USER:
    case CHARGED_IDUSER_UPDATE_USER:
    case CHANGE_PERFIL_UPDATE_USER:
    case CHARGED_CREATED_UPDATED_USER:
      return action.payload;
    default:
      return state;
  }
}

//llenar campo de id de usuario 
export const setIdUserChangeUser = (Id) => async (dispatch, getState) => {
  const { changeUser } = getState();
  dispatch({
    type: CHARGED_IDUSER_UPDATE_USER,
    payload: { ...changeUser, IdUsuario: Id }
  })
};

//LLenar campo de usuario
export const setNameChargedUser = (name) => async (dispatch, getState) => {
  const { changeUser } = getState();
  dispatch({
    type: CHARGED_NAME_UPDATE_USER,
    payload: { ...changeUser, Usuario: name }
  })
};

//llenar campo de correo
export const setCorreoChargedUser = (correo) => async (dispatch, getState) => {
  const { changeUser } = getState();
  dispatch({
    type: CHARGED_CORREO_UPDATE_USER,
    payload: { ...changeUser, Correo: correo }
  })
};

//LLenar Campo de perfil
export const setPerfilChargedUser = (perfil) => async (dispatch, getState) => {
  const { changeUser } = getState();
  dispatch({
    type: CHANGE_PERFIL_UPDATE_USER,
    payload: { ...changeUser, Perfil: perfil }
  })
};


//llenar campo de creacion 
export const setCreatedChargedUser = (creat) => async (dispatch, getState) => {
  const { changeUser } = getState();
  dispatch({
    type: CHARGED_CREATED_UPDATED_USER,
    payload: { ...changeUser, userName: creat }
  })
};


//Obtener datos para nombre del usuario
export const setNameChangeUser = (name) => async (dispatch, getState) => {
  const { changeUser } = getState();
  dispatch({
    type: CHANGE_NAME_CREATED_USER,
    payload: { ...changeUser, userName: name }
  })
};

//Obtener datos para contraseña del usuario
export const setPasswordChangeUser = (pass) => async (dispatch, getState) => {
  const { changeUser } = getState();
  dispatch({
    type: CHANGE_PASS_CREATED_PASS,
    payload: { ...changeUser, password: pass }
  })
};

//Obtener datos para email del usuario
export const setEmailChangeUser = (mail) => async (dispatch, getState) => {
  const { changeUser } = getState();
  dispatch({
    type: CHANGE_EMAIL_CREATED_EMAIL,
    payload: { ...changeUser, email: mail }
  })
};

//limpiar datos para el campo nombre
export const setNameClearUserData = () => async (dispatch, getState) => {
  const { changeUser } = getState();
  dispatch({
    type: CHANGE_CLEAR_DATA_USER,
    payload: { ...changeUser, userName: "", password: "", email: "" },
  });
};

//Enviar datos de creacion de usuario
export const setUserCreatedSecurity = (UserNew) => async (dispatch, getState) => {
  const { sesion } = getState();
  const { TockenUser } = sesion;
  axios({
    url: `${SecurityServer}user/register`,
    method: "POST",
    data: UserNew,
    headers: {
      "Content-Type": "Application/json",
      Authorization: `Bearer ${TockenUser?.token}`,
    },
  })
    .then(function (response) {
      console.log(response);
      if (response.status == 200) {
        toast.success("Usuario Creado Exitosamente");
        dispatch(getAllUserListSecurity());
      }
    })
    .catch(function (error) {
      console.log(error);
      toast.error("Error Usuario No Creado");
    });
};


//Traer Usuario Seleccionado
export const setUserSelectionSecurity = (id) => async (dispatch, getState) => {
  console.log(id);
  const { sesion, changeUser } = getState();
  const { TockenUser } = sesion;
  try {
    const res = await axios({
      url: `${SecurityServer}user/${id}`,
      headers: {
        Authorization: `Bearer ${TockenUser?.token}`,
      }
    })
    if(res.status == 200){
      dispatch({
        type: GET_USER_SELECTED_SECURITY,
        payload: { ...changeUser, SelectionUser: res.data}
      })
    }
  } catch (error) {
    console.log(error);
  }
} 

//Actualizar datos de creacion de usuario
export const setUserUpdateSecurity = (id, UserUp) => async (dispatch, getState) => {
  const { sesion } = getState();
  const { TockenUser } = sesion;
  axios({
    url: `${SecurityServer}user/${id}`,
    method: "PUT",
    data: UserUp,
    headers: {
      "Content-Type": "Application/json",
      Authorization: `Bearer ${TockenUser?.token}`,
    },
  })
    .then(function (response) {
      console.log(response);
      if (response.status == 200) {
        toast.success("Usuario Actualizado Exitosamente");
        dispatch(getAllUserListSecurity());
      }
    })
    .catch(function (error) {
      console.log(error);
      toast.error("Error Usuario No Actualizado");
    });
};

//Eliminar Datos de creacion de usuario
export const setUserDeleteSecurity = (id) => async (dispatch, getState) => {
  const { sesion } = getState();
  const { TockenUser } = sesion;
  axios({
    url: `${SecurityServer}user/${id}`,
    method: "DELETE",
    headers: {
      "Content-Type": "Application/json",
      Authorization: `Bearer ${TockenUser?.token}`,
    },
  })
    .then(function (response) {
      console.log(response);
      if (response.status == 200) {
        toast.success("Usuario Eliminado Exitosamente");
        dispatch(getAllUserListSecurity());
      }
    })
    .catch(function (error) {
      console.log(error);
      toast.error("Error Usuario No Eliminado");
    });
};