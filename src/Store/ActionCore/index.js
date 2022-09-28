import { setChangeSelectView } from "../ViewCore";
import { setIndexbyCabinetCore } from "../Core";

//estados Iniciales
const initialState = {
    //<------GRUPOS---->
    SelectedGroup: null,
    //Filtro de gabinetes por grupo
    GroupsCabinet: [],
    //<------GABINETES---->
    SelectedCabinet: null,
    SelectedTraditional: null,
    //<------CARPETAS---->
    //Filtro de carpetas x gabinete
    FoldersCabinet: [],
    SelectedFolder: null,
    SelectedFolderTraditional: null,
    //log de errores
    elementError: "",
}

//tag de acciones
/*<-----------GRUPOS----------> */
const SET_FILTER_GROUPS_CORE = "SET_FILTER_GROUPS_CORE";
const SELECTED_GROUP_CORE = "SELECTED_GROUP_CORE";
const SELECTED_ERRORS_GROUP_CORE = "SELECTED_ERRORS_GROUP_CORE";
/*<-----------GABINETES----------->*/
const SELECTED_CABINET_CORE = "SELECTED_CABINET_CORE";
const SELECTED_ERRORS_CABINET_CORE = "SELECTED_ERRORS_CABINET_CORE";
const SELECTED_CABINET_TRADITIONAL_CORE = "SELECTED_CABINET_TRADITIONAL_CORE";
const SELECTED_ERRORS_CABINET_TRADITIONAL_CORE = "SELECTED_ERRORS_CABINET_TRADITIONAL_CORE";
/*<-----------FOLDER------------->*/
const SET_FILTER_FOLDERS_CORE = "SET_FILTER_FOLDERS_CORE";
const SELECTED_FOLDER_CORE = "SELECTED_FOLDER_CORE";
const SELECTED_ERRORS_FOLDER_CORE = "SELECTED_ERRORS_FOLDER_CORE";
const SELECTED_FOLDERS_TRADITIONAL_CORE = "SELECTED_FOLDERS_TRADITIONAL_CORE";
const SELECTED_ERRORS_FOLDERS_TRADITIONAL_CORE = "SELECTED_ERRORS_FOLDERS_TRADITIONAL_CORE";

//payload de acciones
export default function ActionReducer(state = initialState, action) {
    switch (action.type) {
        /*<-----------GRUPOS----------> */
        //filtro de gabinetes por grupo
        case SET_FILTER_GROUPS_CORE:
        //grupo seleccionado
        case SELECTED_GROUP_CORE:
        case SELECTED_ERRORS_GROUP_CORE:
        /*<-----------GABINETES----------->*/
        //filtrar gabinete seleccionado
        case SELECTED_CABINET_CORE:
        case SELECTED_ERRORS_CABINET_CORE:
        case SELECTED_CABINET_TRADITIONAL_CORE:
        case SELECTED_ERRORS_CABINET_TRADITIONAL_CORE:
        /*<-----------FOLDER------------->*/
        //filtro de carpetas por gabinete
        case SET_FILTER_FOLDERS_CORE:
        //carpeta seleccionada 
        case SELECTED_FOLDER_CORE:
        case SELECTED_ERRORS_FOLDER_CORE:
        //seleccion carpeta vista tradicional
        case SELECTED_FOLDERS_TRADITIONAL_CORE:
        case SELECTED_ERRORS_FOLDERS_TRADITIONAL_CORE:
            return action.payload;
        default:
            return state;
    }
}

/*<-------------GRUPOS------------------> */
//Filtrar gabinetes por grupo
export const setFilterGroupsCore = id => async (dispatch, getState) => {
    const { actionCore, core } = getState();
    const { cabinets } = core;
    dispatch({
        type: SET_FILTER_GROUPS_CORE,
        payload: {
            ...actionCore, GroupsCabinet: cabinets.filter(cabinets => cabinets.groupId == id)
        },
    });
};

//Filtrar Grupo Seleccionado con cambio de pantalla
export const setSelectedGroupCore = id => async (dispatch, getState) => {
    const { actionCore, core } = getState();
    const { groups } = core;
    const SelectedGroup = groups.find(groups => groups.id == id);
  
    if (SelectedGroup == undefined) {
      dispatch({
        type: SELECTED_ERRORS_GROUP_CORE,
        payload: { ...actionCore, elementError: "El Id no existe" },
      });
      return;
    }
  
    dispatch({
      type: SELECTED_GROUP_CORE,
      payload: { ...actionCore, SelectedGroup },
    });
    dispatch(setChangeSelectView("group"));
  };

//Filtrar Grupo sin cambio de pantalla
export const setSelectedGroupNotSelectedCore = id => async (dispatch, getState) => {
    const { actionCore, core } = getState();
    const { groups } = core;
    const SelectedGroup = groups.find(groups => groups.id == id);
  
    if (SelectedGroup == undefined) {
      dispatch({
        type: SELECTED_ERRORS_GROUP_CORE,
        payload: { ...actionCore, elementError: "El Id no existe" },
      });
      return;
    }
  
    dispatch({
      type: SELECTED_GROUP_CORE,
      payload: { ...actionCore, SelectedGroup },
    });
  };

/*<-----------GABINETES----------->*/

//Filtrar Gabinete Seleccionado con cambio de pantalla
export const setSelectedCabinetCore = id => async (dispatch, getState) => {
    const { actionCore, core } = getState();
    const { cabinets } = core;
    const SelectedCabinet = cabinets.find(cabinets => cabinets.id == id);

    if (SelectedCabinet == undefined) {
        dispatch({
            type: SELECTED_ERRORS_CABINET_CORE,
            payload: { ...actionCore, elementError: "El Id no existe" },
        });
        return;
    }

    dispatch({
        type: SELECTED_CABINET_CORE,
        payload: { ...actionCore, SelectedCabinet },
    });
    dispatch(setChangeSelectView("cabinet"));
};

//Filtrar Gabinete Seleccionado Sin cambio de pantalla
export const setSelectedCabinetCoreNoSelected = id => async (dispatch, getState) => {
    const { actionCore, core } = getState();
    const { cabinets } = core;
    const SelectedCabinet = cabinets.find(cabinets => cabinets.id == id);

    if (SelectedCabinet == undefined) {
        dispatch({
            type: SELECTED_ERRORS_CABINET_CORE,
            payload: { ...actionCore, elementError: "El Id no existe" },
        });
        return;
    }

    dispatch({
        type: SELECTED_CABINET_CORE,
        payload: { ...actionCore, SelectedCabinet },
    });
    dispatch(setIndexbyCabinetCore(id));
};

//Filtro de gabinete seleccionado vista tradicional
export const setSelectedCabinetCoreNotTraditional = id => async (dispatch, getState) => {
    const { actionCore, core } = getState();
    const { cabinets } = core;
    const SelectedTraditional = cabinets.find(cabinets => cabinets.id == id);

    if (SelectedTraditional == undefined) {
        dispatch({
            type: SELECTED_ERRORS_CABINET_TRADITIONAL_CORE,
            payload: { ...actionCore, elementError: "El Id no existe" },
        });
        return;
    }

    dispatch({
        type: SELECTED_CABINET_TRADITIONAL_CORE,
        payload: { ...actionCore, SelectedTraditional },
    });
};

//Filtro de gabinete seleccionado vista tradicional por nombre
export const setSelectedCabinetCoreNotTraditionalName = name => async (dispatch, getState) => {
    const { actionCore, core } = getState();
    const { cabinets } = core;
    const SelectedTraditional = cabinets.find(cabinets => cabinets.name == name);

    if (SelectedTraditional == undefined) {
        dispatch({
            type: SELECTED_ERRORS_CABINET_TRADITIONAL_CORE,
            payload: { ...actionCore, elementError: "El Id no existe" },
        });
        return;
    }

    dispatch({
        type: SELECTED_CABINET_TRADITIONAL_CORE,
        payload: { ...actionCore, SelectedTraditional },
    });
};

//Filtrar Gabinete Seleccionado Para configuracion de gabinete
export const setSelectedCabinetCoreNotSelected = id => async (dispatch, getState) => {
    const { actionCore, core } = getState();
    const { cabinets } = core;
    const SelectedCabinet = cabinets.find(cabinets => cabinets.id == id);
  
    if (SelectedCabinet == undefined) {
      dispatch({
        type: SELECTED_ERRORS_CABINET_CORE,
        payload: { ...actionCore, elementError: "El Id no existe" },
      });
      return;
    }
  
    dispatch({
      type: SELECTED_CABINET_CORE,
      payload: { ...actionCore, SelectedCabinet },
    });
    dispatch(setChangeSelectView("ConfigIndex"));
  };

/*<--------------CARPETAS-------------------> */
//Filtrar Carpetas por gabinetes
export const setFilterFoldersCore = (cabinetId) => async (dispatch, getState) => {
    const { actionCore, core } = getState();
    const { foldersCore } = core;
    dispatch({
        type: SET_FILTER_FOLDERS_CORE,
        payload: {
            ...actionCore, FoldersCabinet: foldersCore.filter(foldersCore => foldersCore.cabinetId == cabinetId)
        },
    });
};

//Filtrar Carpeta Seleccionada con cambio de pantalla
export const setSelectedFolderCore = id => async (dispatch, getState) => {
    const { actionCore, core } = getState();
    const { foldersCore } = core;
    const SelectedFolder = foldersCore.find(foldersCore => foldersCore.id == id);
  
    if (SelectedFolder == undefined) {
      dispatch({
        type: SELECTED_ERRORS_FOLDER_CORE,
        payload: { ...actionCore, elementError: "El Id no existe" },
      });
      return;
    }
  
    dispatch({
      type: SELECTED_FOLDER_CORE,
      payload: { ...actionCore, SelectedFolder },
    });
    dispatch(setChangeSelectView("folder"));
  };

//Filtrar carpeta seleccionada desde vista tradicional
export const setSelectedFolderTraditionalCore = id => async (dispatch, getState) => {
    const { actionCore, core } = getState();
    const { foldersCore } = core;
    const SelectedFolderTraditional = foldersCore.find(foldersCore => foldersCore.id == id);
  
    if (SelectedFolderTraditional == undefined) {
      dispatch({
        type: SELECTED_ERRORS_FOLDERS_TRADITIONAL_CORE,
        payload: { ...actionCore, elementError: "El Id no existe" },
      });
      return;
    }
  
    dispatch({
      type: SELECTED_FOLDERS_TRADITIONAL_CORE,
      payload: { ...actionCore, SelectedFolderTraditional, },
    });
  };