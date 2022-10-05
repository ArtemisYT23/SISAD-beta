import { CoreInstance, CoreServer, DocumentServer } from "../../config/axios";
import {
  setFilterFoldersCore,
  setFilterGroupsCore
} from "../ActionCore";
import {
  setChangeSelectView
} from "../ViewCore";
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
  foldersAllCabinet: [],
  //Filtro indices x gabinete
  IndexByCabinet: [],

  //Filtro 1 a 1
  SelectedFile: null,
  SelectedUrlFile: "",

  //filtro global
  SearchCabinet: [],

  //Error
  elementError: null,
  RespuestaServer: ""
};

//tags de identificacion
//gabinetes
const GET_ALL_CABINETS_CORE = "GET_ALL_CABINETS_CORE";
const GET_ALL_CABINETS_ERROR_CORE = "GET_ALL_CABINETS_ERROR_CORE";
//grupos
const GET_ALL_GROUPS_CORE = "GET_ALL_GROUPS_CORE";
const GET_ALL_GROUPS_ERROR_CORE = "GET_ALL_GROUPS_ERROR_CORE";
//Carpetas
const GET_ALL_FOLDERS_CORE = "GET_ALL_FOLDERS_CORE";
const GET_ALL_FOLDERS_ERROR_CORE = "GET_ALL_FOLDERS_ERROR_CORE";
const GET_ALL_FOLDERS_ALL_CABINET_CORE = "GET_ALL_FOLDERS_ALL_CABINET_CORE";
const GET_ALL_FOLDERS_ALL_CABINET_FAILED_CORE = "GET_ALL_FOLDERS_ALL_CABINET_FAILED_CORE";
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
const DELETE_CABINETS_CORE = "DELETE_CABINETS_CORE";
const FILTER_CREATED_FOLDER_CORE = "FILTER_CREATED_FOLDER_CORE";
const SET_FILTER_FILES_BY_NAME_CORE = "SET_FILTER_FILES_BY_NAME_CORE";
const GET_INDEX_DATA_CABINET_CORE = "GET_INDEX_DATA_CABINET_CORE";
//limpiar estado de selected para metadata
const SELECTED_URLFILE_CORE = "SELECTED_URLFILE_CORE";
const CLEARNER_FILES_ALL_DOCUMENT = "CLEARNER_FILES_ALL_DOCUMENT";

//busquedas globales
//cabinets
const GET_ALL_CABINET_NAME_DATA_CORE = "GET_ALL_CABINET_NAME_DATA_CORE";
const GET_ALL_CABINET_NAME_DATA_ERRORS_CORE = "GET_ALL_CABINET_NAME_DATA_ERRORS_CORE";

const SET_CLEANER_DATA_MEMORY_CORE = "SET_CLEANER_DATA_MEMORY_CORE";
const ORDER_CABINET_BY_ASC_CORE = "ORDER_CABINET_BY_ASC_CORE";

//lanzamiento de payload de casos
export default function CoreReducer(state = initialState, action) {
  switch (action.type) {
    //gabinetes
    case GET_ALL_CABINETS_CORE:
    case GET_ALL_CABINETS_ERROR_CORE:
    //grupos
    case GET_ALL_GROUPS_CORE:
    case GET_ALL_GROUPS_ERROR_CORE:
    //folders
    case GET_ALL_FOLDERS_CORE:
    case GET_ALL_FOLDERS_ERROR_CORE:
    case GET_ALL_FOLDERS_ALL_CABINET_CORE:
    case GET_ALL_FOLDERS_ALL_CABINET_FAILED_CORE:
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
    case DELETE_CABINETS_CORE:
    case FILTER_CREATED_FOLDER_CORE:
    case SET_FILTER_FILES_BY_NAME_CORE:
    case GET_INDEX_DATA_CABINET_CORE:
    case ORDER_CABINET_BY_ASC_CORE:

    //Limpiar estado de selected de metadata 
    case SELECTED_URLFILE_CORE:
    case CLEARNER_FILES_ALL_DOCUMENT:
    //busquedas globales
    case GET_ALL_CABINET_NAME_DATA_CORE:
    case GET_ALL_CABINET_NAME_DATA_ERRORS_CORE:
    case SET_CLEANER_DATA_MEMORY_CORE:
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

//traer todos los grupos 
export const getAllGroupsCore = () => async (dispatch, getState) => {
  const { core, sesion } = getState();
  const { TockenUser } = sesion;
  axios({
    url: `${CoreServer}group`,
    method: "GET",
    headers: {
      Authorization: `Bearer ${TockenUser?.token}`
    }
  }).then(function (response) {
    if (response.status == 200) {
      dispatch({
        type: GET_ALL_GROUPS_CORE,
        payload: { ...core, groups: response.data },
      });
      dispatch(getAllCabinetsCore());
    }
  }).catch(function (error) {
    console.log(error);
    dispatch({
      type: GET_ALL_GROUPS_ERROR_CORE,
      payload: { ...core, groups: [] },
    });
  })
};

//Traer todos los gabinetes
export const getAllCabinetsCore = () => async (dispatch, getState) => {
  const { core, sesion } = getState();
  const { TockenUser } = sesion;
  axios({
    url: `${CoreServer}cabinet`,
    headers: {
      Authorization: `Bearer ${TockenUser?.token}`
    }
  }).then(function (response) {
    if (response.status == 200) {
      dispatch({
        type: GET_ALL_CABINETS_CORE,
        payload: { ...core, cabinets: response.data },
      });
      dispatch(getAllFoldersCore());
    }
  }).catch(function (error) {
    console.log(error);
    dispatch({
      type: GET_ALL_CABINETS_ERROR_CORE,
      payload: { ...core, cabinets: [] }
    })
  })
};

//traer todas las carpetas
export const getAllFoldersCore = () => async (dispatch, getState) => {
  const { core, sesion } = getState();
  const { TockenUser } = sesion;
  axios({
    url: `${CoreServer}folder`,
    method: "GET",
    headers: {
      Authorization: `Bearer ${TockenUser?.token}`
    }
  }).then(function (response) {
    if (response.status == 200) {
      dispatch({
        type: GET_ALL_FOLDERS_CORE,
        payload: { ...core, foldersCore: response.data },
      });
    }
  }).catch(function (error) {
    console.log(error);
    dispatch({
      type: GET_ALL_FOLDERS_ERROR_CORE,
      payload: { ...core, foldersCore: [] }
    })
  })

};

//Traer todos los indices sin selector
export const getIndexCabinetGetAllConfig = () => async (dispatch, getState) => {
  const { core, sesion } = getState();
  const { TockenUser } = sesion;
  try {
    const res = await axios({
      url: `${CoreServer}getallnamesdata`,
      headers: {
        Authorization: `Bearer ${TockenUser?.token}`
      }
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
  const { core, sesion } = getState();
  const { TockenUser } = sesion;
  try {
    const res = await axios({
      url: `${CoreServer}getallnamesdata`,
      headers: {
        Authorization: `Bearer ${TockenUser?.token}`
      }
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
  const { core, sesion } = getState();
  const { TockenUser } = sesion;
  try {
    const response = await axios({
      url: `${CoreServer}indexesbycabinet/${id}`,
      headers: {
        Authorization: `Bearer ${TockenUser?.token}`
      }
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

//traer Carpetas desde endpoint por gabinete
export const getFoldersAllCabinet = (id) => async (dispatch, getState) => {
  const { core, sesion } = getState();
  const { TockenUser } = sesion;
  try {
    const response = await axios({
      url: `${CoreServer}foldersbycabinet/${id}`,
      headers: {
        Authorization: `Bearer ${TockenUser?.token}`
      }
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
  const { core, sesion } = getState();
  const { TockenUser } = sesion;
  try {
    const response = await axios({
      url: `${CoreServer}indexesbycabinet/${id}`,
      headers: {
        Authorization: `Bearer ${TockenUser?.token}`
      }
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
  const { sesion } = getState();
  const { TockenUser } = sesion;
  axios({
    url: `${CoreServer}index`,
    method: "PUT",
    data: newIndex,
    headers: {
      "Content-Type": "Application/json",
      Authorization: `Bearer ${TockenUser?.token}`
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
  const { sesion } = getState();
  const { TockenUser } = sesion;
  axios({
    url: `${CoreServer}index/${id}`,
    method: "PUT",
    data: updateIndex,
    headers: {
      "Content-Type": "Application/json",
      Authorization: `Bearer ${TockenUser?.token}`
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
  const { sesion } = getState();
  const { TockenUser } = sesion;
  axios({
    url: `${CoreServer}index/${id}/${cabinetId}`,
    method: "DELETE",
    data: deleteIndex,
    headers: {
      "Content-Type": "Application/json",
      Authorization: `Bearer ${TockenUser?.token}`
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
    const { core, sesion } = getState();
    const { TockenUser } = sesion;
    axios({
      url: `${CoreServer}Group`,
      method: "PUT",
      data: newGroup,
      headers: {
        Authorization: `Bearer ${TockenUser?.token}`
      },
    })
      .then(function (response) {
        if (response.status == 200) {
          dispatch({
            type: CREATED_GROUP_CORE,
            payload: { ...core, groups: response.data }
          });
          toast.success('Grupo Creado.');
          dispatch(getAllGroupsCore());
        };
        dispatch()
      }).catch(function (error) {
        console.log(error);
        toast.error('Grupo no Creado.');
      })
  };


//Actualizar un grupo
export const UpdateGroupNew = (UpdateGroup, id) =>
  (dispatch, getState) => {
    console.log(UpdateGroup);
    const { sesion } = getState();
    const { TockenUser } = sesion;
    axios({
      url: `${CoreServer}Group/${id}`,
      method: "PUT",
      data: UpdateGroup,
      headers: {
        "Content-Type": "Application/json",
        Authorization: `Bearer ${TockenUser?.token}`
      },
    })
      .then(function (response) {
        if (response.status == 200) {
          toast.success('Grupo Actualizado');
          dispatch(getAllGroupsCore());
        };
      }).catch(function (error) {
        console.log(error);
        toast.error('Grupo No Actualizado');
      })
  };

//eliminar un grupo
export const DeleteGroupNew = (DeleteGroup, id) =>
  (dispatch, getState) => {
    const { sesion } = getState();
    const { TockenUser } = sesion;
    axios({
      url: `${CoreServer}Group/${id}`,
      method: "DELETE",
      data: DeleteGroup,
      headers: {
        "Content-Type": "Application/json",
        Authorization: `Bearer ${TockenUser?.token}`
      },
    })
      .then(function (response) {
        console.log(response);
        if (response.status == 200) {
          toast.success('Grupo Eliminado');
          dispatch(getAllGroupsCore());
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
    const { core, sesion } = getState();
    const { TockenUser } = sesion;
    axios({
      url: `${CoreServer}Cabinet`,
      method: "PUT",
      data: newCabinet,
      headers: {
        "Content-Type": "Application/json",
        Authorization: `Bearer ${TockenUser?.token}`
      },
    })
      .then(function (response) {
        if (response.status == 200) {
          toast.success('Gabinete Creado.');
          dispatch(getAllCabinetsCore());
        };
      }).catch(function (error) {
        console.log(error);
        toast.error('Gabinete no Creado.');
      })
  };

//Actualizar Gabinete y Actualizar estado inicial
export const UpdateCabinetCore = (newGabi, id, groupId) => (dispatch, getState) => {
  const { sesion } = getState();
  const { TockenUser } = sesion;
  axios({
    url: `${CoreServer}Cabinet/${id}`,
    method: "PUT",
    data: newGabi,
    headers: {
      "Content-Type": "Application/json",
      Authorization: `Bearer ${TockenUser?.token}`
    },
  })
    .then(function (response) {
      if (response.status == 200) {
        toast.success('Gabinete Actualizado');
        dispatch(getAllCabinetsCore());
        dispatch(setFilterGroupsCore(groupId));
      };
    }).catch(function (error) {
      console.log(error);
      toast.error('Gabinete no Actualizado.');
    })
};

//Eliminar Gabinete y Actualizar estado inicial
export const DeleteCabinetCore = (newGabi, id) => (dispatch, getState) => {
  const { sesion } = getState();
  const { TockenUser } = sesion;
  axios({
    url: `${CoreServer}Cabinet/${id}`,
    method: "DELETE",
    data: newGabi,
    headers: {
      "Content-Type": "Application/json",
      Authorization: `Bearer ${TockenUser?.token}`
    },
  })
    .then(function (response) {
      if (response.status == 200) {
        toast.success('Gabinete Eliminado');
        dispatch(getAllCabinetsCore());
      }
    }).catch(function (error) {
      console.log(error);
      toast.error('Gabinete no Eliminado.');
    })
};


/*<------------FOLDER---------------->*/
//Guardar nueva carpeta y actualizar estado inicial
export const CreateFolderNew = (newFolder, cabinetId) => async (dispatch, getState) => {
  const { sesion } = getState();
  const { TockenUser } = sesion;
  axios({
    url: `${CoreServer}folder`,
    method: "PUT",
    data: newFolder,
    headers: {
      'Content-Type': "Application/json",
      Authorization: `Bearer ${TockenUser?.token}`
    },
  })
    .then(function (response) {
      if (response.status == 200) {
        toast.success('Carpeta Creada.');
        dispatch(getAllFoldersCore());
        dispatch(setFilterFoldersCore(cabinetId));
      };
    }).catch(function (error) {
      console.log(error);
      toast.error('Carpeta no Creada.');
    })
};

//Actualizar Carpeta y actualizar estado inicial
export const UpdateFolderCore = (newFolder, id, cabinetId) => async (dispatch, getState) => {
  const { sesion } = getState();
  const { TockenUser } = sesion;
  axios({
    url: `${CoreServer}folder/${id}`,
    method: "PUT",
    data: newFolder,
    headers: {
      'Content-Type': "Application/json",
      Authorization: `Bearer ${TockenUser?.token}`
    },
  })
    .then(function (response) {
      if (response.status == 200) {
        toast.success('Carpeta Actualizada.');
        dispatch(getAllFoldersCore());
        dispatch(setFilterFoldersCore(cabinetId));
      };
    }).catch(function (error) {
      console.log(error);
      toast.error('Gabinete no Actualizado.');
    })
};

//Eliminar Carpeta y actualizar estado inicial
export const DeleteFolderCore = (newFolder, id, cabinetId) => async (dispatch, getState) => {
  const { sesion } = getState();
  const { TockenUser } = sesion;
  axios({
    url: `${CoreServer}folder/${id}`,
    method: "DELETE",
    data: newFolder,
    headers: {
      'Content-Type': "Application/json",
      Authorization: `Bearer ${TockenUser?.token}`
    },
  })
    .then(function (response) {
      if (response.status == 200) {
        dispatch(getAllCabinetsCore());
        toast.success('Carpeta Eliminada.');
        dispatch(setFilterFoldersCore(cabinetId));
      };
    }).catch(function (error) {
      console.log(error);
      toast.error('Carpeta no Eliminada.');
    })
};

//Traer todos los archivos por documento
export const getFileAllDocument = (id) => async (dispatch, getState) => {
  console.log(id);
  const { core, sesion } = getState();
  const { TockenUser } = sesion;
  try {
    const response = await axios({
      url: `${DocumentServer}filebydocument/${id}`,
      headers: {
        Authorization: `Bearer ${TockenUser?.token}`
      }
    });
    console.log(response.status);
    if (response.status == 200) {
      dispatch({
        type: GET_FILES_DOCU,
        payload: { ...core, files: response.data },
      });
      console.log(response.data);
    }
  } catch (error) {
    console.log(error);
    dispatch({
      type: GET_FILES_DOCU_ERRORS,
      payload: { ...core, files: [] },
    });
  }
};

//Limpiar estado de files al momento de cambiar entre carpeta
export const setFileCleanerAllDocument = () => async (dispatch, getState) => {
  const { core } = getState();
  dispatch({
    type: CLEARNER_FILES_ALL_DOCUMENT,
    payload: { ...core, files: [] }
  })
}

//Eliminar un archivo y actualizar estado de los archivos por documento
export const setDeleteFileDocumentary = (id, documentId, file) => async (dispatch, getState) => {
  console.log(id);
  console.log(documentId);
  const { sesion } = getState();
  const { TockenUser } = sesion;
  axios({
    url: `${DocumentServer}file/${id}`,
    method: "DELETE",
    data: file,
    headers: {
      'Content-Type': "Application/json",
      Authorization: `Bearer ${TockenUser?.token}`
    },
  })
    .then(function (response) {
      console.log(response);
      if (response.status == 200) {
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

//filtrar a nivel de gabinetes
export const setFilterCabinetsByName = (name) => async (dispatch, getState) => {
  const { core, sesion } = getState();
  const { TockenUser } = sesion;
  try {
    const response = await axios({
      url: `${CoreServer}getcabinetbycabinet/${name}`,
      headers: {
        Authorization: `Bearer ${TockenUser?.token}`
      }
    });
    if (response.status == 200) {
      dispatch({
        type: GET_ALL_CABINET_NAME_DATA_CORE,
        payload: { ...core, SearchCabinet: response.data },
      });
      dispatch(setChangeSelectView("search"));
    }
  } catch (error) {
    console.log(error);
    dispatch({
      type: GET_ALL_CABINET_NAME_DATA_ERRORS_CORE,
      payload: { ...core, SearchCabinet: [] }
    });
  }
}

//Realizar ordenado de datos en orden ascendete para gabinetes
export const orderCabinetByAscCore = () => async(dispatch, getState) => {
  const { core } = getState();
  const { cabinets } = core;
  dispatch({
    type: ORDER_CABINET_BY_ASC_CORE,
    payload: { ...core, cabinet: cabinets.sort((a, b) => {
      if (a.name.toLowerCase() < b.name.toLowerCase()) {
        return -1;
      }
    })}
  })
}


//Limpiar Memoria Global de Core por cierre de sesion
export const setCleanerMemoryDataCore = () => async(dispatch, getState) => {
  const { core } = getState();
  dispatch({
    type: SET_CLEANER_DATA_MEMORY_CORE,
    payload: { ...core, 
      groups: [],
      cabinets: [],
      foldersCore: [],
      files: [],
      IndexAllCabinet: [],
      IndexCabinetGetAllName: [],
      foldersAllCabinet: [],
      IndexByCabinet: [],
      SelectedFile: null,
      SelectedUrlFile: "",
      SearchCabinet: [],
      elementError: null,
      RespuestaServer: ""
    }
  })
} 