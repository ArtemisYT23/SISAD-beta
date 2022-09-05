import { CoreInstance, CoreServer, DocumentServer } from "../../config/axios";
import toast, { Toaster } from 'react-hot-toast';

import axios from "axios";

//estados iniciales
const initialState = {
  groups: [],
  cabinets: [],
  foldersCore: [],
  files: [],
  IndexAllCabinet: [],
  //Traer todos los indices con name
  IndexCabinetGetAllName: [],
  //Traer Folder por gabinete
  foldersAllCabinet: [
    {
      "id": "6bd9caef-4baf-4fad-9c5c-92154e5297ba",
      "name": "RECURSOS HUMANOS",
      "description": "Recursos Humanos",
      "path": "../Root",
      "folderId": "null",
      "cabinetId": "de5d8cf4-69c2-4e49-bde4-a804e26cb55c"
    }
  ],
  //Filtro 1 a muchos
  GroupsCabinet: [],
  FoldersCabinet: [],
  //Filtro indices x gabinete
  IndexByCabinet: [],

  //Filtro 1 a 1
  SelectedGroup: null,
  SelectedCabinet: null,
  SelectedFolder: null,
  SelectedTraditional: null,
  SelectedFolderTraditional: null,
  SelectedFile: null,
  SelectedUrlFile: "",
  //Elemento Seleccionado
  selected: "",
  selectedView: "grid",
  selectedSearch: "",

  //Error
  elementError: null,
  RespuestaServer: ""
};

//tags de identificacion
//gabinetes
const GET_ALL_CABINETS_CORE = "GET_ALL_CABINETS_CORE";
const SELECTED_CABINET_CORE = "SELECTED_CABINET_CORE";
const SELECTED_ERRORS_CABINET_CORE = "SELECTED_ERRORS_CABINET_CORE";
const SELECTED_CABINET_TRADITIONAL_CORE = "SELECTED_CABINET_TRADITIONAL_CORE";
const SELECTED_ERRORS_CABINET_TRADITIONAL_CORE = "SELECTED_ERRORS_CABINET_TRADITIONAL_CORE";
//grupos
const GET_ALL_GROUPS_CORE = "GET_ALL_GROUPS_CORE";
const SET_FILTER_GROUPS_CORE = "SET_FILTER_GROUPS_CORE";
//Carpetas
const GET_ALL_FOLDERS_CORE = "GET_ALL_FOLDERS_CORE";
const SET_FILTER_FOLDERS_CORE = "SET_FILTER_FOLDERS_CORE";
const SELECTED_FOLDER_CORE = "SELECTED_FOLDER_CORE";
const SELECTED_ERRORS_FOLDER_CORE = "SELECTED_ERRORS_FOLDER_CORE";
const SELECTED_GROUP_CORE = "SELECTED_GROUP_CORE";
const SELECTED_ERRORS_GROUP_CORE = "SELECTED_ERRORS_FOLDER_CORE";
const GET_ALL_FOLDERS_ALL_CABINET_CORE = "GET_ALL_FOLDERS_ALL_CABINET_CORE";
const GET_ALL_FOLDERS_ALL_CABINET_FAILED_CORE = "GET_ALL_FOLDERS_ALL_CABINET_FAILED_CORE";
const SELECTED_FOLDERS_TRADITIONAL_CORE = "SELECTED_FOLDERS_TRADITIONAL_CORE";
const SELECTED_ERRORS_FOLDERS_TRADITIONAL_CORE = "SELECTED_ERRORS_FOLDERS_TRADITIONAL_CORE";
const GET_CABINET_ALL_CABINET_CORE = "GET_CABINET_ALL_CABINET_CORE";
const UPDATE_FOLDER_CORE_ERRORS = "UPDATE_FOLDER_CORE_ERRORS";

//indices
const GET_INDEX_BY_CABINET_CONFIG = "GET_INDEX_BY_CABINET_CONFIG";
const GET_INDEX_BY_CABINET_FAILED_CONFIG =
  "GET_INDEX_BY_CABINET_FAILED_CONFIG";
//gabinete por indices
const GET_ALL_INDEX_BY_CABINET_CORE = "GET_ALL_INDEX_BY_CABINET_CORE";
const GET_ALL_INDEX_BY_CABINET_ERRORS_CORE =
  "GET_ALL_INDEX_BY_CABINET_CORE";
const GET_INDEX_CABINET_GET_ALL_CONFIG = "GET_INDEX_CABINET_GET_ALL_CONFIG";
const GET_INDEX_CABINET_GET_ALL_ERRORS_CONFIG = "GET_INDEX_CABINET_GET_ALL_ERRORS_CONFIG";

//actualizacion de estado y guardado
const CREATED_GROUP_CORE = "CREATED_GROUP_CORE";
const CREATED_CABINETS_CORE = "CREATED_CABINETS_CORE";
const UPDATE_CABINETS_CORE = "UPDATE_CABINETS_CORE";
const CREATED_FOLDER_CORE = "CREATED_FOLDER_CORE";
const UPDATE_FOLDER_CORE = "UPDATE_FOLDER_CORE";
const DELETE_FOLDER_CORE = "DELETE_FOLDER_CORE";
const UPDATE_GROUP_CORE = "UPDATE_GROUP_CORE";
const DELETE_GROUP_CORE = "DELETE_GROUP_CORE";


const GET_FILES_DOCU = "GET_FILES_DOCU";
const GET_FILES_DOCU_ERRORS = "GET_FILES_DOCU_ERRORS";
const SELECTED_FILE_DOCUMENT = "SELECTED_FILE_DOCUMENT";
const SELECTED_FILE_ERRORS_DOCUMENT = "SELECTED_FILE_ERRORS_DOCUMENT";
const VIEW_GRID_TRADITIONAL = "VIEW_GRID_TRADITIONAL";
const VIEW_LIST_TRADITIONAL = "VIEW_LIST_TRADITIONAL";
const VIEW_SEARCH_TRADITIONAL = "VIEW_SEARCH_TRADITIONAL";
const SELECTED_INITIAL_CORE = "SELECTED_INITIAL_CORE";
const DELETE_CABINETS_CORE = "DELETE_CABINETS_CORE";
const FILTER_CREATED_FOLDER_CORE = "FILTER_CREATED_FOLDER_CORE";
const VIEW_GROUP_MANTENIMIENT_TRADITIONAL = "VIEW_GROUP_MANTENIMIENT_TRADITIONAL";
const SET_FILTER_FILES_BY_NAME_CORE = "SET_FILTER_FILES_BY_NAME_CORE";
const GET_INDEX_DATA_CABINET_CORE = "GET_INDEX_DATA_CABINET_CORE";
//limpiar estado de selected para metadata
const SELECTED_SEARCH_SELECTED_CORE = "SELECTED_SEARCH_SELECTED_CORE";
const SELECTED_SEARCHTREE_SELECTED_CORE = "SELECTED_SEARCHTREE_SELECTED_CORE";
const SELECTED_SEARCHTREEMETADATA_CORE = "SELECTED_SEARCHTREEMETADATA_CORE";
const SELECTED_URLFILE_CORE = "SELECTED_URLFILE_CORE";

//lanzamiento de payload de casos
export default function CoreReducer(state = initialState, action) {
  switch (action.type) {
    //gabinetes
    case GET_ALL_CABINETS_CORE:
    case SELECTED_CABINET_CORE:
    case SELECTED_ERRORS_CABINET_CORE:
    case SELECTED_CABINET_TRADITIONAL_CORE:
    case SELECTED_ERRORS_CABINET_TRADITIONAL_CORE:
    //grupos
    case GET_ALL_GROUPS_CORE:
    case SET_FILTER_GROUPS_CORE:
    case SELECTED_GROUP_CORE:
    case SELECTED_ERRORS_GROUP_CORE:
    //folders
    case GET_ALL_FOLDERS_CORE:
    case SET_FILTER_FOLDERS_CORE:
    case SELECTED_FOLDER_CORE:
    case SELECTED_ERRORS_FOLDER_CORE:
    case GET_ALL_FOLDERS_ALL_CABINET_CORE:
    case GET_ALL_FOLDERS_ALL_CABINET_FAILED_CORE:
    case SELECTED_FOLDERS_TRADITIONAL_CORE:
    case SELECTED_ERRORS_FOLDERS_TRADITIONAL_CORE:
    case GET_CABINET_ALL_CABINET_CORE:
    case UPDATE_FOLDER_CORE_ERRORS:

    //Actualizacion y guardado
    case CREATED_GROUP_CORE:
    case UPDATE_GROUP_CORE:
    case DELETE_GROUP_CORE:
    case CREATED_CABINETS_CORE:
    case UPDATE_CABINETS_CORE:
    case CREATED_FOLDER_CORE:
    case UPDATE_FOLDER_CORE:
    case DELETE_FOLDER_CORE:
    //indices
    case GET_INDEX_BY_CABINET_CONFIG:
    case GET_INDEX_BY_CABINET_FAILED_CONFIG:
    case GET_INDEX_CABINET_GET_ALL_CONFIG:
    case GET_INDEX_CABINET_GET_ALL_ERRORS_CONFIG:
    //indice por gabinete
    case GET_ALL_INDEX_BY_CABINET_CORE:
    case GET_ALL_INDEX_BY_CABINET_ERRORS_CORE:
    case GET_FILES_DOCU:
    case GET_FILES_DOCU_ERRORS:
    case SELECTED_FILE_DOCUMENT:
    case SELECTED_FILE_ERRORS_DOCUMENT:
    case VIEW_GRID_TRADITIONAL:
    case VIEW_LIST_TRADITIONAL:
    case VIEW_SEARCH_TRADITIONAL:
    case SELECTED_INITIAL_CORE:
    case DELETE_CABINETS_CORE:
    case FILTER_CREATED_FOLDER_CORE:
    case VIEW_GROUP_MANTENIMIENT_TRADITIONAL:
    case SET_FILTER_FILES_BY_NAME_CORE:
    case GET_INDEX_DATA_CABINET_CORE:
    //Limpiar estado de selected de metadata 
    case SELECTED_SEARCH_SELECTED_CORE:
    case SELECTED_SEARCHTREE_SELECTED_CORE:
    case SELECTED_SEARCHTREEMETADATA_CORE:
    case SELECTED_URLFILE_CORE:
      return action.payload;
    default:
      return state;
  }
};

//acciones 

//guardar url del file seleccionado 
export const setSelectedUrlFileCore = (Url) => async (dispatch, getState) => {
  const { core } = getState();
  dispatch({
    type: SELECTED_URLFILE_CORE,
    payload: { ...core, SelectedUrlFile: Url }
  })
};

//Limpiar accion del selected
export const setSelectedNullCore = () => async (dispatch, getState) => {
  const { core } = getState();
  dispatch({
    type: SELECTED_INITIAL_CORE,
    payload: { ...core, selected: "" },
  });
};

//limpiar estado del selectedSearch para metadata
export const setSelectedSearchNullCore = () => async (dispatch, getState) => {
  const { core } = getState();
  dispatch({
    type: SELECTED_SEARCH_SELECTED_CORE,
    payload: { ...core, selectedSearch: "" }
  })
};

//Cambiar a estado de Search filter a TreeView para gabinetes, grupos
export const setSelectedSearchTreeCore = () => async (dispatch, getState) => {
  const { core } = getState();
  dispatch({
    type: SELECTED_SEARCHTREE_SELECTED_CORE,
    payload: { ...core, selectedSearch: "TraditionalTree" }
  })
};


//Cambiar a estado de Search filter a View Metadata para documentos
export const setSelectedSearchMetadataCore = () => async (dispatch, getState) => {
  const { core } = getState();
  dispatch({
    type: SELECTED_SEARCHTREEMETADATA_CORE,
    payload: { ...core, selectedSearch: "MetadataSearch" }
  })
};


//Cambiar estado para vista de grid a lista con Search Metadata
export const getAllViewListAndTraditional = () => async (dispatch, getState) => {
  const { core } = getState();
  dispatch({
    type: VIEW_GRID_TRADITIONAL,
    payload: { ...core, selectedView: "list" },
  });
};

//Cambiar estado de vista lista a grid
export const getAllViewGridAndTraditional = () => async (dispatch, getState) => {
  const { core } = getState();
  dispatch({
    type: VIEW_LIST_TRADITIONAL,
    payload: { ...core, selectedView: "grid" },
  });
};

//Cambiar estado para vista tradicional con searh normal y visualizacion de gabinetes por defecto
export const ChangeCabinetGetAll = () => async (dispatch, getState) => {
  const { core } = getState();
  dispatch({
    type: VIEW_SEARCH_TRADITIONAL,
    payload: { ...core, selectedSearch: "TraditionalTree", selected: "CabinetAll" },
  });
};



//Cambiar a estado para vista tradicional de grupos para mantenimiento
export const ChangeGroupGetAll = () => async (dispatch, getState) => {
  const { core } = getState();
  dispatch({
    type: VIEW_GROUP_MANTENIMIENT_TRADITIONAL,
    payload: { ...core, selectedSearch: "TraditionalTree", selected: "GroupMantent" },
  })
};


//Traer todos los gabinetes
export const getAllCabinetsCore = () => async (dispatch, getState) => {
  const res = await CoreInstance.get("cabinet");
  const { core } = getState();
  dispatch({
    type: GET_ALL_CABINETS_CORE,
    payload: { ...core, cabinets: res.data },
  });
};

//Filtrar Gabinete Seleccionado
export const setSelectedCabinetCore = id => async (dispatch, getState) => {
  const { core } = getState();
  const { cabinets } = core;
  const SelectedCabinet = cabinets.find(cabinets => cabinets.id == id);

  if (SelectedCabinet == undefined) {
    dispatch({
      type: SELECTED_ERRORS_CABINET_CORE,
      payload: { ...core, elementError: "El Id no existe" },
    });
    return;
  }

  dispatch({
    type: SELECTED_CABINET_CORE,
    payload: { ...core, SelectedCabinet, selected: "cabinet" },
  });
};

export const setSelectedCabinetCoreNoSelected = id => async (dispatch, getState) => {
  const { core } = getState();
  const { cabinets } = core;
  const SelectedCabinet = cabinets.find(cabinets => cabinets.id == id);

  if (SelectedCabinet == undefined) {
    dispatch({
      type: SELECTED_ERRORS_CABINET_CORE,
      payload: { ...core, elementError: "El Id no existe" },
    });
    return;
  }

  dispatch({
    type: SELECTED_CABINET_CORE,
    payload: { ...core, SelectedCabinet },
  });
  dispatch(setIndexbyCabinetCore(id));
};


//Filtro de gabinete seleccionado vista tradicional
export const setSelectedCabinetCoreNotTraditional = id => async (dispatch, getState) => {
  const { core } = getState();
  const { cabinets } = core;
  const SelectedTraditional = cabinets.find(cabinets => cabinets.id == id);

  if (SelectedTraditional == undefined) {
    dispatch({
      type: SELECTED_ERRORS_CABINET_TRADITIONAL_CORE,
      payload: { ...core, elementError: "El Id no existe" },
    });
    return;
  }

  dispatch({
    type: SELECTED_CABINET_TRADITIONAL_CORE,
    payload: { ...core, SelectedTraditional },
  });
};

//Filtro de gabinete seleccionado vista tradicional por nombre
export const setSelectedCabinetCoreNotTraditionalName = name => async (dispatch, getState) => {
  const { core } = getState();
  const { cabinets } = core;
  const SelectedTraditional = cabinets.find(cabinets => cabinets.name == name);

  if (SelectedTraditional == undefined) {
    dispatch({
      type: SELECTED_ERRORS_CABINET_TRADITIONAL_CORE,
      payload: { ...core, elementError: "El Id no existe" },
    });
    return;
  }

  dispatch({
    type: SELECTED_CABINET_TRADITIONAL_CORE,
    payload: { ...core, SelectedTraditional },
  });
};


//Filtrar Gabinete Seleccionado
export const setSelectedCabinetCoreNotSelected = id => async (dispatch, getState) => {
  const { core } = getState();
  const { cabinets } = core;
  const SelectedCabinet = cabinets.find(cabinets => cabinets.id == id);

  if (SelectedCabinet == undefined) {
    dispatch({
      type: SELECTED_ERRORS_CABINET_CORE,
      payload: { ...core, elementError: "El Id no existe" },
    });
    return;
  }

  dispatch({
    type: SELECTED_CABINET_CORE,
    payload: { ...core, SelectedCabinet, selected: "ConfigIndex" },
  });
};


//Traer todos los indices sin selector
export const getIndexCabinetGetAllConfig = () => async (dispatch, getState) => {
  const { core } = getState();
  try {
    const res = await axios({
      url: `${CoreServer}getallnamesdata`,
    });
    console.log(res.status);
    if (res.status == 200) {
      dispatch({
        type: GET_INDEX_CABINET_GET_ALL_CONFIG,
        payload: { ...core, IndexCabinetGetAllName: res.data }
      });
    }
  } catch (error) {
    dispatch({
      type: GET_INDEX_CABINET_GET_ALL_ERRORS_CONFIG,
      payload: { ...core, IndexCabinetGetAllName: [] }
    });
  }
}

//Traer indices con filtro
export const getIndexCabinetGetAllConfigFilter = (Name) => async (dispatch, getState) => {
  const { core } = getState();
  try {
    const res = await axios({
      url: `${CoreServer}getallnamesdata`,
    });
    console.log(res.status);
    if (res.status == 200) {
      dispatch({
        type: GET_INDEX_CABINET_GET_ALL_CONFIG,
        payload: { ...core, IndexCabinetGetAllName: res.data }
      });
    }
    dispatch(getIndexAllCabinetConfig(Name));
  } catch (error) {
    dispatch({
      type: GET_INDEX_CABINET_GET_ALL_ERRORS_CONFIG,
      payload: { ...core, IndexCabinetGetAllName: [] }
    });
  }
}

//Filtrar indices por cada gabinete con selected
export const getIndexAllCabinetConfig = name => async (dispatch, getState) => {
  console.log(name);
  const { core } = getState();
  const { IndexCabinetGetAllName } = core;
  try {
    dispatch({
      type: GET_INDEX_DATA_CABINET_CORE,
      payload: {
        ...core, IndexAllCabinet: IndexCabinetGetAllName.filter(
          Index => Index.cabinetName == name), selected: "ConfigIndex"
      }
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: GET_INDEX_BY_CABINET_FAILED_CONFIG,
      payload: { ...core, IndexAllCabinet: [] },
    });
  }
};




//filtrar indices por gabinete sin selected
export const getIndexAllCabinetConfigNotSelect = (id) => async (dispatch, getState) => {
  const { core } = getState();
  console.log(id)
  try {
    const response = await axios({
      url: `${CoreServer}indexesbycabinet/${id}`,
    });
    console.log(response.status);
    if (response.status == 200) {
      dispatch({
        type: GET_INDEX_BY_CABINET_CONFIG,
        payload: { ...core, IndexAllCabinet: response.data }
      });
    }
  } catch (error) {
    dispatch({
      type: GET_INDEX_BY_CABINET_FAILED_CONFIG,
      payload: { ...core, IndexAllCabinet: [] },
    });
  }
};


//traer todos los grupos 
export const getAllGroupsCore = () => async (dispatch, getState) => {
  const res = await CoreInstance.get("group");
  const { core } = getState();
  dispatch({
    type: GET_ALL_GROUPS_CORE,
    payload: { ...core, groups: res.data },
  });
};

//Filtrar gabinetes por grupo
export const setFilterGroupsCore = id => async (dispatch, getState) => {
  const { core } = getState();
  const { cabinets } = core;
  dispatch({
    type: SET_FILTER_GROUPS_CORE,
    payload: {
      ...core, GroupsCabinet: cabinets.filter(cabinets => cabinets.groupId == id)
    },
  });
};

//Filtrar grupo con selected
export const setSelectedGroupNotSelectedCore = id => async (dispatch, getState) => {
  const { core } = getState();
  const { groups } = core;
  const SelectedGroup = groups.find(groups => groups.id == id);

  if (SelectedGroup == undefined) {
    dispatch({
      type: SELECTED_ERRORS_GROUP_CORE,
      payload: { ...core, elementError: "El Id no existe" },
    });
    return;
  }

  dispatch({
    type: SELECTED_GROUP_CORE,
    payload: { ...core, SelectedGroup },
  });
};

//Filtrar Grupo seleccionado
export const setSelectedGroupCore = id => async (dispatch, getState) => {
  const { core } = getState();
  const { groups } = core;
  const SelectedGroup = groups.find(groups => groups.id == id);

  if (SelectedGroup == undefined) {
    dispatch({
      type: SELECTED_ERRORS_GROUP_CORE,
      payload: { ...core, elementError: "El Id no existe" },
    });
    return;
  }

  dispatch({
    type: SELECTED_GROUP_CORE,
    payload: { ...core, SelectedGroup, selected: "group" },
  });
};


//traer todas las carpetas
export const getAllFoldersCore = () => async (dispatch, getState) => {
  const res = await CoreInstance.get("folder");
  const { core } = getState();
  dispatch({
    type: GET_ALL_FOLDERS_CORE,
    payload: { ...core, foldersCore: res.data },
  });
};

//Filtrar Carpetas por gabinetes
export const setFilterFoldersCore = (cabinetId) => async (dispatch, getState) => {
  const { core } = getState();
  const { foldersCore } = core;
  dispatch({
    type: SET_FILTER_FOLDERS_CORE,
    payload: {
      ...core, FoldersCabinet: foldersCore.filter(foldersCore => foldersCore.cabinetId == cabinetId)
    },
  });
};

//Filtrar carpeta seleccionada desde vista tradicional
export const setSelectedFolderTraditionalCore = id => async (dispatch, getState) => {
  const { core } = getState();
  const { foldersCore } = core;
  const SelectedFolderTraditional = foldersCore.find(foldersCore => foldersCore.id == id);

  if (SelectedFolderTraditional == undefined) {
    dispatch({
      type: SELECTED_ERRORS_FOLDERS_TRADITIONAL_CORE,
      payload: { ...core, elementError: "El Id no existe" },
    });
    return;
  }

  dispatch({
    type: SELECTED_FOLDERS_TRADITIONAL_CORE,
    payload: { ...core, SelectedFolderTraditional, },
  });
};

//Filtrar Carpeta Seleccionada
export const setSelectedFolderCore = id => async (dispatch, getState) => {
  const { core } = getState();
  const { foldersCore } = core;
  const SelectedFolder = foldersCore.find(foldersCore => foldersCore.id == id);

  if (SelectedFolder == undefined) {
    dispatch({
      type: SELECTED_ERRORS_FOLDER_CORE,
      payload: { ...core, elementError: "El Id no existe" },
    });
    return;
  }

  dispatch({
    type: SELECTED_FOLDER_CORE,
    payload: { ...core, SelectedFolder, selected: "folder" },
  });
};

//traer Carpetas desde endpoint por gabinete
export const getFoldersAllCabinet = (id) => async (dispatch, getState) => {
  console.log(id);
  const { core } = getState();
  try {
    const response = await axios({
      url: `${CoreServer}foldersbycabinet/${id}`,
    });

    console.log(response.status);
    if (response.status == 200) {
      dispatch({
        type: GET_ALL_FOLDERS_ALL_CABINET_CORE,
        payload: { ...core, foldersAllCabinet: response.data },
      });
      dispatch(setIndexbyCabinetCore(id));
    }
  } catch (error) {
    dispatch({
      type: GET_ALL_FOLDERS_ALL_CABINET_FAILED_CORE,
      payload: { ...core, foldersAllCabinet: [] },
    });
  }
};


//Traer indices x id de gabinete configIndice
export const setIndexbyCabinetCore = (id) => async (dispatch, getState) => {
  const { core } = getState();
  try {
    const response = await axios({
      url: `${CoreServer}indexesbycabinet/${id}`,
    });
    console.log(response.status);
    dispatch({
      type: GET_ALL_INDEX_BY_CABINET_CORE,
      payload: { ...core, IndexByCabinet: response.data },
    });
  } catch (error) {
    dispatch({
      type: GET_ALL_INDEX_BY_CABINET_ERRORS_CORE,
      payload: { ...core, IndexByCabinet: [] },
    });
  }
};



/*<------------------------------------------------------------------>*/
//Crear indice de gabinete y actualizar estado
export const setIndexCabinetCreatedConfig = (newIndex, Name) => async (dispatch, getState) => {
  axios({
    url: `${CoreServer}index`,
    method: "PUT",
    data: newIndex,
    headers: {
      "Content-Type": "Application/json",
    },
  })
    .then(function (response) {
      console.log(response)
      if (response.status == 200) {
        dispatch(getIndexCabinetGetAllConfigFilter(Name));
      }
      toast.success('Indice Creado');
    })
    .catch(function (error) {
      console.log(error);
      toast.error('Indice no Creado.');
    });
};

//Actualizar Indice de gabinete y actualizar estado
export const setIndexCabinetUpdateConfig = (updateIndex, id, cabinetName) => async (dispatch, getState) => {
  axios({
    url: `${CoreServer}index/${id}`,
    method: "PUT",
    data: updateIndex,
    headers: {
      "Content-Type": "Application/json",
    },
  })
    .then(function (response) {
      console.log(response)
      if (response.status == 200) {
        dispatch(getIndexCabinetGetAllConfigFilter(cabinetName));
      }
      toast.success('Indice Actualizado');
    })
    .catch(function (error) {
      console.log(error);
      toast.error('Indice no Actualizado');
    });
};


//Eliminar Indice de gabinetey actualizar estado
export const setIndexCabinetDeleteConfig = (deleteIndex, id, cabinetId, CabinetName) => async (dispatch, getState) => {
  console.log(id)
  console.log(cabinetId);
  axios({
    url: `${CoreServer}index/${id}/${cabinetId}`,
    method: "DELETE",
    data: deleteIndex,
    headers: {
      "Content-Type": "Application/json",
    },
  })
    .then(function (response) {
      console.log(response)
      if (response.status == 200) {
        dispatch(getIndexCabinetGetAllConfigFilter(CabinetName));
      }
      toast.success('Indice Eliminado');
    })
    .catch(function (error) {
      console.log(error);
      toast.error('Indice no Eliminado');
    });
};

//GUARDADO Y ACTUALIZACION DE ESTADOS
/*<----------------------GRUPOS------------------------> */
export const CreateGroupNew = (newGroup) =>
  (dispatch, getState) => {
    console.log(newGroup);
    const { core } = getState();
    axios({
      url: `${CoreServer}Group`,
      method: "PUT",
      data: newGroup,
      headers: {
        "Content-Type": "Application/json",
      },
    })
      .then(async function (response) {
        const res = await CoreInstance.get("group");
        console.log(response);
        if (response.status == 200) {
          dispatch({
            type: CREATED_GROUP_CORE,
            payload: { ...core, groups: res.data }
          });
          toast.success('Grupo Creado.');
        };
      }).catch(function (error) {
        console.log(error);
        toast.error('Grupo no Creado.');
      })
  };


//Actualizar un grupo
export const UpdateGroupNew = (UpdateGroup, id) =>
  (dispatch, getState) => {
    console.log(UpdateGroup);
    const { core } = getState();
    axios({
      url: `${CoreServer}Group/${id}`,
      method: "PUT",
      data: UpdateGroup,
      headers: {
        "Content-Type": "Application/json",

      },
    })
      .then(async function (response) {
        const res = await CoreInstance.get("group");
        console.log(response);
        if (response.status == 200) {
          dispatch({
            type: UPDATE_GROUP_CORE,
            payload: { ...core, groups: res.data }
          });
          toast.success('Grupo Actualizado');
        };
      }).catch(function (error) {
        console.log(error);
        toast.error('Grupo No Actualizado');

      })
  };

//eliminar un grupo
export const DeleteGroupNew = (DeleteGroup, id) =>
  (dispatch, getState) => {
    console.log(DeleteGroup);
    const { core } = getState();
    axios({
      url: `${CoreServer}Group/${id}`,
      method: "DELETE",
      data: DeleteGroup,
      headers: {
        "Content-Type": "Application/json",

      },
    })
      .then(async function (response) {
        const res = await CoreInstance.get("group");
        console.log(response);
        if (response.status == 200) {
          dispatch({
            type: DELETE_GROUP_CORE,
            payload: { ...core, groups: res.data }
          });
          toast.success('Grupo Eliminado');
        };
      }).catch(function (error) {
        console.log(error);
        toast.error('Gabinete no Eliminado.');
      })
  };



/*<------------GABINETES--------------->*/
//Guardar nuevo Gabinete y actualizar estado
export const CreateCabinetNew = (newCabinet) =>
  (dispatch, getState) => {
    console.log(newCabinet);
    const { core } = getState();
    axios({
      url: `${CoreServer}Cabinet`,
      method: "PUT",
      data: newCabinet,
      headers: {
        "Content-Type": "Application/json",

      },
    })
      .then(async function (response) {
        const res = await CoreInstance.get("cabinet");
        console.log(response);
        if (response.status == 200) {
          dispatch({
            type: CREATED_CABINETS_CORE,
            payload: { ...core, cabinets: res.data, RespuestaServer: res.status }
          });
          toast.success('Gabinete Creado.');
        };
      }).catch(function (error) {
        console.log(error);
        toast.error('Gabinete no Creado.');
      })
  };

//Actualizar Gabinete y Actualizar estado inicial
export const UpdateCabinetCore = (newGabi, id, groupId) => (dispatch, getState) => {
  console.log(newGabi);
  const { core } = getState();
  axios({
    url: `${CoreServer}Cabinet/${id}`,
    method: "PUT",
    data: newGabi,
    headers: {
      "Content-Type": "Application/json",
    },
  })
    .then(async function (response) {
      const res = await CoreInstance.get("cabinet");
      console.log(response);
      if (response.status == 200) {
        dispatch({
          type: UPDATE_CABINETS_CORE,
          payload: { ...core, cabinets: res.data }
        });
        toast.success('Gabinete Actualizado');
      };
      dispatch(setFilterGroupsCore(groupId));
    }).catch(function (error) {
      console.log(error);
      toast.error('Gabinete no Actualizado.');
    })
};

//Eliminar Gabinete y Actualizar estado inicial
export const DeleteCabinetCore = (newGabi, id) => (dispatch, getState) => {
  console.log(newGabi);
  console.log(id);
  const { core } = getState();
  axios({
    url: `${CoreServer}Cabinet/${id}`,
    method: "DELETE",
    data: newGabi,
    headers: {
      "Content-Type": "Application/json",
    },
  })
    .then(async function (response) {
      const res = await CoreInstance.get("cabinet");
      console.log(response);
      if (response.status == 200) {
        dispatch({
          type: DELETE_CABINETS_CORE,
          payload: { ...core, cabinets: res.data }
        })
        toast.success('Gabinete Eliminado');
      }
    }).catch(function (error) {
      console.log(error);
      toast.error('Gabinete no Eliminado.');
    })
};


/*<------------FOLDER---------------->*/
//Guardar nueva carpeta y actualizar estado inicial
export const CreateFolderNew = (newFolder, cabinetId) => async (dispatch, getState) => {
  console.log(newFolder);
  console.log(cabinetId);
  const { core } = getState();
  axios({
    url: `${CoreServer}folder`,
    method: "PUT",
    data: newFolder,
    headers: {
      'Content-Type': "Application/json",
    },
  })
    .then(async function (response) {
      const res = await CoreInstance.get("folder");
      console.log(response);
      if (response.status == 200) {
        dispatch({
          type: CREATED_FOLDER_CORE,
          payload: { ...core, foldersCore: res.data }
        });
        toast.success('Carpeta Creada.');
      };
      dispatch(setFilterFoldersCore(cabinetId));
    }).catch(function (error) {
      console.log(error);
      toast.error('Carpeta no Creada.');
    })
};

//Actualizar Carpeta y actualizar estado inicial
export const UpdateFolderCore = (newFolder, id, cabinetId) => async (dispatch, getState) => {
  console.log(newFolder);
  console.log(id);
  console.log(cabinetId);
  const { core } = getState();
  axios({
    url: `${CoreServer}folder/${id}`,
    method: "PUT",
    data: newFolder,
    headers: {
      'Content-Type': "Application/json",
    },
  })
    .then(async function (response) {
      const res = await CoreInstance.get("folder");
      console.log(response);
      if (response.status == 200) {
        dispatch({
          type: UPDATE_FOLDER_CORE,
          payload: { ...core, foldersCore: res.data }
        });
        toast.success('Carpeta Actualizada.');
      };
      dispatch(setFilterFoldersCore(cabinetId));
    }).catch(function (error) {
      console.log(error);
      toast.error('Gabinete no Actualizado.');
    })
};

//Eliminar Carpeta y actualizar estado inicial
export const DeleteFolderCore = (newFolder, id, cabinetId) => async (dispatch, getState) => {
  console.log(newFolder);
  console.log(id);
  console.log(cabinetId);
  const { core } = getState();
  axios({
    url: `${CoreServer}folder/${id}`,
    method: "DELETE",
    data: newFolder,
    headers: {
      'Content-Type': "Application/json",
    },
  })
    .then(async function (response) {
      console.log(response);
      try {
        const response = await axios({
          url: `${CoreServer}folder`,
        });
        console.log(response.status);
        if (response.status == 200) {
          console.log(response.data);
          toast.success('Carpeta Eliminada.');
          dispatch({
            type: GET_CABINET_ALL_CABINET_CORE,
            payload: { ...core, foldersCore: response.data }
          });
          dispatch(setFilterFoldersCore(cabinetId));
        }
      } catch (error) {
        dispatch({
          type: UPDATE_FOLDER_CORE_ERRORS,
          payload: { ...core, foldersCore: [], FoldersCabinet: [] }
        });
        toast.error('Carpeta no Eliminada.');
      }
    }).catch(function (error) {
      console.log(error);
      toast.error('Carpeta no Eliminada.');
    })
};

//Traer todos los archivos por documento
export const getFileAllDocument = (id) => async (dispatch, getState) => {
  console.log(id);
  const { core } = getState();
  try {
    const response = await axios({
      url: `${DocumentServer}filebydocument/${id}`,
    });

    console.log(response.status);
    if (response.status == 200) {
      dispatch({
        type: GET_FILES_DOCU,
        payload: { ...core, files: response.data, selected: "files" },
      });
      console.log(response.data);
    }
  } catch (error) {
    console.log(error);
    dispatch({
      type: GET_FILES_DOCU_ERRORS,
      payload: { ...core, files: [], selected: "files" },
    });
  }
};

//Eliminar un archivo y actualizar estado de los archivos por documento
export const setDeleteFileDocumentary = (id, documentId, file) => async (dispatch, getState) => {
  console.log(id);
  console.log(documentId);
  const { core } = getState();
  axios({
    url: `${DocumentServer}file/${id}`,
    method: "DELETE",
    data: file,
    headers: {
      'Content-Type': "Application/json",
    },
  })
  .then(function (response){
    console.log(response);
      if(response.status == 200) {
        toast.success('Archivo Eliminado');
        dispatch(getFileAllDocument(documentId));
      }
  }).catch(function (error) {
    console.log(error);
    toast.error('Archivo no Eliminado')
  })
}


//Filtrar Archivo Seleccionado
export const setSelectedFileDocumentary = (id) => async (dispatch, getState) => {
  const { core } = getState();
  const { files } = core;
  const SelectedFile = files.find(files => files.id == id);

  if (SelectedFile == undefined) {
    dispatch({
      type: SELECTED_FILE_ERRORS_DOCUMENT,
      payload: { ...core, elementError: "El id no existe" },
    });
    return;
  }

  dispatch({
    type: SELECTED_FILE_DOCUMENT,
    payload: { ...core, SelectedFile }
  })
}

//filtrar con el buscador 1 solo archivo 
export const setFilterFilesByName = (name) => async (dispatch, getState) => {
  const { core } = getState();
  const { files } = core;
  dispatch({
    type: SET_FILTER_FILES_BY_NAME_CORE,
    payload: {
      ...core, files: files.filter((files) => {
        if (files.name.toString().toLowerCase().includes(name.toLowerCase())
        ) {
          return files;
        }
      })
    }
  });
}