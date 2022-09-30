import axios from "axios";
import { setChangeSelectView } from "../ViewCore";
import { CoreInstance, CoreServer, DocumentServer } from "../../config/axios";
import toast, { Toaster } from 'react-hot-toast';

//estados iniciales
const initialState = {
    options: [{
        "id": "423d4c69-0109-43eb-8c32-9f8872b917c2",
        "name": "Lista de datos"
    },
    {
        "id": "5674b607-2230-4700-b68e-d11c22f2c59c",
        "name": "Tipos de Archivos"
    },
    {
        "id": "80a3fae4-adaf-45aa-b5e8-ebd945e934ca",
        "name": "Indices"
    },
    {
        "id": "58e25fac-a7b7-44a2-b931-5c074bb0ce97",
        "name": "Tipos de datos"
    }
    ],
    optionsSecurity: [{
        "id": "423d4c69-0109-43eb-8c32-9f8872b917c2",
        "name": "Información de Usuario"
    },
    {
        "id": "5674b607-2230-4700-b68e-d11c22f2c59c",
        "name": "Panel de permisos"
    },
    {
        "id": "80a3fae4-adaf-45aa-b5e8-ebd945e934ca",
        "name": "Gestion de Seguridad"
    },
    {
        "id": "58e25fac-a7b7-44a2-b931-5c074bb0ce97",
        "name": "Gestion de Archivos"
    }
    ],
    optionsSecurityRead: [{
        "id": "423d4c69-0109-43eb-8c32-9f8872b917c2",
        "name": "Información de Usuario"
    }],
    ListData: [],
    TypeData: [],
    ElementList: [],
    TypeFile: [],
    IndexSelected: [],
    FilesFolders: [],
    FilesNoSelected: [],
    FilesCabinets: [],
    FilesNoCabinets: [],

    //filtro de 1 a 1
    SelectedOption: "",
    SelectedOptionSecurity: "",
    SelectedTypeData: null,
    SelectedList: null,
    selectedElement: [],
    SelectedTypeFile: null,
    TypeFileDefault: [],

    //filtro 1 a muchos
    ElementFilterList: [],
    ItemListMetadata: [],

    //elemento seleccionado 
    elementError: "",
    selected: "",

    SearchFiles: [],
};

//tag de acciones
//Menu filtro de 1 elemento
const SELECTED_OPTIONS_CONFIG = "SELECTED_OPTIONS_CONFIG";
const OPTIONS_ERRORS_CONFIG = "OPTIONS_ERRORS_CONFIG";
const SELECTED_OPTIONS_SECURITY_CONFIG = "SELECTED_OPTIONS_SECURITY_CONFIG";
const OPTIONS_SECURITY_ERRORS_CONFIG = "OPTIONS_SECURITY_ERRORS_CONFIG";
//filtro 1 a 1 
const SELECTED_TYPEDATA_CONFIG = "SELECTED_TYPEDATA_CONFIG";
const SELECTED_ERRORS_TYPEDATA_CONFIG = "SELECTED_ERRORS_TYPEDATA_CONFIG";
const GET_ALL_FYLETYPE_DEFAULT_CONFIG = "GET_ALL_FYLETYPE_DEFAULT_CONFIG";
const GET_ALL_FYLETYPE_DEFAULT_ERROR_CONFIG = "GET_ALL_FYLETYPE_DEFAULT_ERROR_CONFIG";
//filtro 1 a muchos
const FILTER_ELEMENTLIST_CONFIG = "FILTER_ELEMENTLIST_CONFIG";



// datos
const GET_ALL_TYPEDATA_CONFIG = "GET_ALL_TYPEDATA_CONFIG";

//guardado de datos
//tipo de datos
const DATATYPE_CREATED_CONFIG = "DATATYPE_CREATED_CONFIG";
const GET_ALL_TYPEDATA_ERROR_CONFIG = "GET_ALL_TYPEDATA_ERROR_CONFIG";
const UPDATE_TYPEDATA_CONFIG = "UPDATE_TYPEDATA_CONFIG";
const DELETE_TYPEDATA_CONFIG = "DELETE_TYPEDATA_CONFIG";
//lista de datos
const GET_ALL_LISTDATA_CONFIG = "GET_ALL_LISTDATA_CONFIG";
const GET_ALL_ELEMENTLIST_ERROR_CONFIG = "GET_ALL_ELEMENTLIST_ERROR_CONFIG";
const SELECTED_ERRORS_LIST_CONFIG = "SELECTED_ERRORS_LIST_CONFIG";
const SELECTED_LIST_CONFIG = "SELECTED_LIST_CONFIG";
const NOT_SELECTED_LIST_CONFIG = "NOT_SELECTED_LIST_CONFIG";
const GET_ALL_LISTDATA_ERROR_CONFIG = "GET_ALL_LISTDATA_ERROR_CONFIG";
//elementos de una lista
const GET_ALL_ELEMENTLIST_CONFIG = "GET_ALL_ELEMENTLIST_CONFIG";
const SET_SELECTED_ELEMENT_LIST_ITEM_ERRORS = "SET_SELECTED_ELEMENT_LIST_ITEM_ERRORS";
const SET_SELECTED_ELEMENT_LIST_ITEM = "SET_SELECTED_ELEMENT_LIST_ITEM";
const GET_ALL_ELEMENTLIST_ALL_METADATA_DOCU = "GET_ALL_ELEMENTLIST_ALL_METADATA_DOCU";
const GET_ALL_ELEMENTLIST_ALL_METADATA_FAILED_DOCU = "GET_ALL_ELEMENTLIST_ALL_METADATA_FAILED_DOCU";

//tipo de archivo
const GET_ALL_TYPE_FILE_CONFIG = "GET_ALL_TYPE_FILE_CONFIG";
const GET_ALL_TYPE_FILE_ERROR_CONFIG = "GET_ALL_TYPE_FILE_ERROR_CONFIG";
const SELECTED_ERRORS_TYPE_FILE_CONFIG = "SELECTED_ERRORS_TYPE_FILE_CONFIG";
const SELECTED_TYPEFILE_CONFIG = "SELECTED_TYPEFILE_CONFIG";
const FILE_TYPE_UPDATED_CONFIG = "FILE_TYPE_UPDATED_CONFIG";
const TYPE_FILE_DELETE_CONFIG = "TYPE_FILE_DELETE_CONFIG";
const TYPE_FILE_CREATED_CONFIG = "TYPE_FILE_CREATED_CONFIG";
const GET_FILETYPE_ALL_FOLDER_CONFIG = "GET_FILETYPE_ALL_FOLDER_CONFIG"
const GET_FILETYPE_ALL_FOLDER_ERRORS_CONFIG = "GET_FILETYPE_ALL_FOLDER_ERRORS_CONFIG";
const GET_FILETYPE_ALL_FOLDER_NO_SELECTED_CONFIG = "GET_FILETYPE_ALL_FOLDER_NO_SELECTED_CONFIG";
const GET_FILETYPE_ALL_FOLDER_NO_SELECTED_ERRORS_CONFIG = "GET_FILETYPE_ALL_FOLDER_NO_SELECTED_ERRORS_CONFIG";
const GET_ALL_TYPEFILE_BY_CABINET_SELECTED_CONFIG = "GET_ALL_TYPEFILE_BY_CABINET_SELECTED_CONFIG";
const GET_ALL_TYPEFILE_BY_CABINET_NOT_SELECTED_CONFIG = "GET_ALL_TYPEFILE_BY_CABINET_NOT_SELECTED_CONFIG";

//indice

const INDEXCABINET_CREATED_CONFIG = "INDEXCABINET_CREATED_CONFIG";

//guardar indice seleccionado
const SELECTED_INDEX_CABINET_CONFIG = "SELECTED_INDEX_CABINET_CONFIG";
const SELECTED_INDEX_CABINET_ERROR_CONFIG = "SELECTED_INDEX_CABINET_ERROR_CONFIG"
const GET_ALL_FILES_NAME_DATA_CORE = "GET_ALL_FILES_NAME_DATA_CORE";
const GET_ALL_FILES_NAME_DATA_ERRORS_CORE = "GET_ALL_FILES_NAME_DATA_ERRORS_CORE";


//payload de tag de acciones
export default function ConfigDocumentReducer(state = initialState, action) {
    switch (action.type) {
        case GET_ALL_TYPEDATA_CONFIG:
        case SELECTED_OPTIONS_CONFIG:
        case SELECTED_OPTIONS_SECURITY_CONFIG:
        case OPTIONS_SECURITY_ERRORS_CONFIG:
        case SELECTED_TYPEDATA_CONFIG:
        case SELECTED_ERRORS_TYPEDATA_CONFIG:
        case GET_ALL_FYLETYPE_DEFAULT_CONFIG:
        case GET_ALL_FYLETYPE_DEFAULT_ERROR_CONFIG:
        //typeData crud
        case DATATYPE_CREATED_CONFIG:
        case GET_ALL_TYPEDATA_ERROR_CONFIG:
        case UPDATE_TYPEDATA_CONFIG:
        case DELETE_TYPEDATA_CONFIG:
        //Lista de datos
        case GET_ALL_LISTDATA_CONFIG:
        case SELECTED_ERRORS_LIST_CONFIG:
        case SELECTED_LIST_CONFIG:
        case NOT_SELECTED_LIST_CONFIG:
        //elemento de listas
        case GET_ALL_ELEMENTLIST_CONFIG:
        case GET_ALL_ELEMENTLIST_ERROR_CONFIG:
        case GET_ALL_LISTDATA_ERROR_CONFIG:
        case FILTER_ELEMENTLIST_CONFIG:
        case SET_SELECTED_ELEMENT_LIST_ITEM_ERRORS:
        case SET_SELECTED_ELEMENT_LIST_ITEM:
        case GET_ALL_ELEMENTLIST_ALL_METADATA_DOCU:
        case GET_ALL_ELEMENTLIST_ALL_METADATA_FAILED_DOCU:
        //tipo de archivo
        case GET_ALL_TYPE_FILE_CONFIG:
        case GET_ALL_TYPE_FILE_ERROR_CONFIG:
        case SELECTED_ERRORS_TYPE_FILE_CONFIG:
        case SELECTED_TYPEFILE_CONFIG:
        case TYPE_FILE_CREATED_CONFIG:
        case FILE_TYPE_UPDATED_CONFIG:
        case TYPE_FILE_DELETE_CONFIG:
        case GET_FILETYPE_ALL_FOLDER_CONFIG:
        case GET_FILETYPE_ALL_FOLDER_ERRORS_CONFIG:
        case GET_FILETYPE_ALL_FOLDER_NO_SELECTED_CONFIG:
        case GET_FILETYPE_ALL_FOLDER_NO_SELECTED_ERRORS_CONFIG:
        case GET_ALL_TYPEFILE_BY_CABINET_SELECTED_CONFIG:
        case GET_ALL_TYPEFILE_BY_CABINET_NOT_SELECTED_CONFIG:
        //indices
        case INDEXCABINET_CREATED_CONFIG:
        //indice seleccionado
        case SELECTED_INDEX_CABINET_CONFIG:
        case SELECTED_INDEX_CABINET_ERROR_CONFIG:
        case GET_ALL_FILES_NAME_DATA_CORE:
        case GET_ALL_FILES_NAME_DATA_ERRORS_CORE:
            return action.payload;
        default:
            return state;
    }
};

//acciones

//Filtrar y guardar el dato seleccionado
export const setSelectedOptionsConfig = (id) => async (dispatch, getState) => {
    const { configDocument } = getState();
    const { options } = configDocument;
    const SelectedOption = options.find(option => option.id == id);

    if (SelectedOption == undefined) {
        dispatch({
            type: OPTIONS_ERRORS_CONFIG,
            payload: { ...configDocument, elementError: "El Id no existe" },
        });
        return;
    }

    dispatch({
        type: SELECTED_OPTIONS_CONFIG,
        payload: { ...configDocument, SelectedOption, selected: "opciones" },
    });
};

//Filtrar y guardar dato seleccionado para panel de seguridad
export const setSelectedOptionsSecurityConfig = (id) => async (dispatch, getState) => {
    const { configDocument } = getState();
    const { optionsSecurity } = configDocument;
    const SelectedOptionSecurity = optionsSecurity.find(optionsSecurity => optionsSecurity.id == id);

    if (SelectedOptionSecurity == undefined) {
        dispatch({
            type: OPTIONS_SECURITY_ERRORS_CONFIG,
            payload: { ...configDocument, elementError: "El Id no existe" },
        });
        return;
    }

    dispatch({
        type: SELECTED_OPTIONS_SECURITY_CONFIG,
        payload: { ...configDocument, SelectedOptionSecurity, selected: "opcionesSecurity" }
    })
}

//Traer todos los tipos de datos
export const getTypeDataConfig = () => async (dispatch, getState) => {
    const { configDocument, sesion } = getState();
    const { TockenUser } = sesion;
    axios({
        url: `${CoreServer}datatype`,
        method: "GET",
        headers: {
            Authorization: `Bearer ${TockenUser?.token}`
        }
    }).then(function (response) {
        if (response.status) {
            dispatch({
                type: GET_ALL_TYPEDATA_CONFIG,
                payload: { ...configDocument, TypeData: response.data },
            });
        }
    }).catch(function (error) {
        console.log(error);
        dispatch({
            type: GET_ALL_TYPEDATA_ERROR_CONFIG,
            payload: { ...configDocument, TypeData: [] }
        })
    })

};

//Guardar dato seleccionado filtro 1 a mucho
export const setSelectedTypeDataConfig = (id) => async (dispatch, getState) => {
    const { configDocument } = getState();
    const { TypeData } = configDocument;
    const SelectedTypeData = TypeData.find(TypeData => TypeData.id == id);

    if (SelectedTypeData == undefined) {
        dispatch({
            type: SELECTED_ERRORS_TYPEDATA_CONFIG,
            payload: { ...configDocument, elementError: "El id no existe" },
        });
        return;
    }
    dispatch({
        type: SELECTED_TYPEDATA_CONFIG,
        payload: { ...configDocument, SelectedTypeData, selected: "typeData" }
    });
};

//traer todas las listas de datos
export const getListDataConfig = () => async (dispatch, getState) => {
    const { configDocument, sesion } = getState();
    const { TockenUser } = sesion;
    axios({
        url: `${CoreServer}list`,
        method: "GET",
        headers: {
            Authorization: `Bearer ${TockenUser?.token}`
        }
    }).then(function (response) {
        if (response.status) {
            dispatch({
                type: GET_ALL_LISTDATA_CONFIG,
                payload: { ...configDocument, ListData: response.data },
            });
        }
    }).catch(function (error) {
        console.log(error);
        dispatch({
            type: GET_ALL_LISTDATA_ERROR_CONFIG,
            payload: { ...configDocument, ListData: [] }
        })
    })

};

// filtrar lista seleccionada 
export const SelectedListConfig = (id) => async (dispatch, getState) => {
    const { configDocument } = getState();
    const { ListData } = configDocument;
    const SelectedList = ListData.find(ListData => ListData.id == id);

    if (SelectedList == undefined) {
        dispatch({
            type: SELECTED_ERRORS_LIST_CONFIG,
            payload: { ...configDocument, elementError: "El id no existe" },
        });
        return;
    }
    dispatch({
        type: SELECTED_LIST_CONFIG,
        payload: { ...configDocument, SelectedList, selected: "list" },
    })
};

//Eliminar Lista seleccionada de memoria
export const SelectedNotSelectedListConfig = () => async (dispatch, getState) => {
    const { configDocument } = getState();
    dispatch({
        type: NOT_SELECTED_LIST_CONFIG,
        payload: { ...configDocument, SelectedList: null },
    })
}


//traer todos los elementos de un lista
export const getAllElementListConfig = () => async (dispatch, getState) => {
    const { configDocument, sesion } = getState();
    const { TockenUser } = sesion;
    axios({
        url: `${CoreServer}listelement`,
        method: "GET",
        headers: {
            Authorization: `Bearer ${TockenUser?.token}`
        }
    }).then(function (response) {
        dispatch({
            type: GET_ALL_ELEMENTLIST_CONFIG,
            payload: { ...configDocument, ElementList: response.data },
        });
    }).catch(function (error) {
        console.log(error);
        dispatch({
            type: GET_ALL_ELEMENTLIST_ERROR_CONFIG,
            payload: { ...configDocument, ElementList: [] }
        })
    })

};

//filtrar elementos de una lista
export const setElementListFilterConfig = (id) => async (dispatch, getState) => {
    const { configDocument } = getState();
    const { ElementList } = configDocument;
    dispatch({
        type: FILTER_ELEMENTLIST_CONFIG,
        payload: {
            ...configDocument, ElementFilterList: ElementList.filter(
                ElementList => ElementList.listId == id)
        },
    });
};

//filtrar elemento de la lista por id de lista endpoint
export const getElementListFilterConfig = (id) => async (dispatch, getState) => {
    const { configDocument, sesion } = getState();
    const { TockenUser } = sesion;
    try {
        const response = await axios({
            url: `${CoreServer}listelementbylist/${id}`,
            headers: {
                Authorization: `Bearer ${TockenUser?.token}`
            }
        });
        console.log(response.status);
        if (response.status == 200) {
            dispatch({
                type: GET_ALL_ELEMENTLIST_ALL_METADATA_DOCU,
                payload: { ...configDocument, ElementFilterList: response.data },
            });
        }
    } catch (error) {
        dispatch({
            type: GET_ALL_ELEMENTLIST_ALL_METADATA_FAILED_DOCU,
            payload: { ...configDocument, ElementFilterList: [] },
        });
    }
}


//filtrar elementos mediante el id de la lista
export const getItemElementByIdList = (id) => async (dispatch, getState) => {
    const { configDocument, sesion } = getState();
    const { TockenUser } = sesion;
    try {
        const response = await axios({
            url: `${CoreServer}listelementbylist/${id}`,
            headers: {
                Authorization: `Bearer ${TockenUser?.token}`
            }
        });

        console.log(response.status);
        if (response.status == 200) {
            dispatch({
                type: GET_ALL_ELEMENTLIST_ALL_METADATA_DOCU,
                payload: { ...configDocument, ItemListMetadata: response.data },
            });
        }
    } catch (error) {
        dispatch({
            type: GET_ALL_ELEMENTLIST_ALL_METADATA_FAILED_DOCU,
            payload: { ...configDocument, ItemListMetadata: [] },
        });
    }
};


//filtro para guardar elemento seleccionado
export const setSelectedElementConfig = (id) => async (dispatch, getState) => {
    const { configDocument } = getState();
    const { ElementList } = configDocument;
    const selectedElement = ElementList.find(ElementList => ElementList.id == id);

    if (selectedElement == undefined) {
        dispatch({
            type: SET_SELECTED_ELEMENT_LIST_ITEM_ERRORS,
            payload: { ...configDocument, elementError: "El id no existe" },
        });
        return;
    }
    dispatch({
        type: SET_SELECTED_ELEMENT_LIST_ITEM,
        payload: { ...configDocument, selectedElement, selected: "Element" },
    });
};

//Traer todos los tipos de archivos
export const getTypeFileConfig = () => async (dispatch, getState) => {
    const { configDocument, sesion } = getState();
    const { TockenUser } = sesion;
    axios({
        url: `${CoreServer}filetype`,
        method: "GET",
        headers: {
            Authorization: `Bearer ${TockenUser?.token}`
        }
    }).then(function (response) {
        if (response.status == 200) {
            dispatch({
                type: GET_ALL_TYPE_FILE_CONFIG,
                payload: { ...configDocument, TypeFile: response.data },
            });
        }
    }).catch(function (error) {
        console.log(error);
        dispatch({
            type: GET_ALL_TYPE_FILE_ERROR_CONFIG,
            payload: { ...configDocument, TypeFile: [] },
        });
    })

};

//Traer tipo de archivo por defecto 
export const getTypeFileDefault = () => async (dispatch, getState) => {
    const { configDocument, sesion } = getState();
    const { TockenUser } = sesion;
    axios({
        url: `${CoreServer}defaultfiletype`,
        method: "GET",
        headers: {
            Authorization: `Bearer ${TockenUser?.token}`
        }
    }).then(function (response) {
        if (response.status == 200) {
            dispatch({
                type: GET_ALL_FYLETYPE_DEFAULT_CONFIG,
                payload: { ...configDocument, TypeFileDefault: response.data }
            })
        }
    }).catch(function (error) {
        console.log(error);
        dispatch({
            type: GET_ALL_FYLETYPE_DEFAULT_ERROR_CONFIG,
            payload: { ...configDocument, TypeFileDefault: [] }
        })
    })
}

//Traer todos los tipos de archivos por carpeta
export const getTypeFileByFolder = (id) => async (dispatch, getState) => {
    const { configDocument, sesion } = getState();
    const { TockenUser } = sesion;
    try {
        const res = await axios({
            url: `${CoreServer}FolderFileType/GetNamesBydFolder/${id}`,
            headers: {
                Authorization: `Bearer ${TockenUser?.token}`
            }
        });
        if (res.status == 200) {
            dispatch({
                type: GET_FILETYPE_ALL_FOLDER_CONFIG,
                payload: { ...configDocument, FilesFolders: res.data }
            });
            dispatch(getTypeFileConfig());
        }
    } catch (error) {
        dispatch(getTypeFileConfig());
        dispatch({
            type: SELECTED_INDEX_CABINET_ERROR_CONFIG,
            payload: { ...configDocument, FilesFolders: [] }
        });
    }
}

//traer los tipos de archivos seleccionado para gabinete
export const getTypeFileByCabinet = (id) => async (dispatch, getState) => {
    const { configDocument, sesion } = getState();
    const { TockenUser } = sesion;
    try {
        const res = await axios({
            url: `${CoreServer}CabinetFileType/GetAllBydCabinet/${id}`,
            headers: {
                Authorization: `Bearer ${TockenUser?.token}`
            }
        });
        if (res.status == 200) {
            dispatch({
                type: GET_ALL_TYPEFILE_BY_CABINET_SELECTED_CONFIG,
                payload: { ...configDocument, FilesCabinets: res.data }
            })
            dispatch(getTypeFileByCabinetNoSelected(id));
        }
    } catch (error) {
        console.log(error);
    }
}


//traer los tipos de archivos no seleccionados para gabinetas

export const getTypeFileByCabinetNoSelected = (id) => async (dispatch, getState) => {
    console.log(id);
    const { configDocument, sesion } = getState();
    const { TockenUser } = sesion;
    try {
        const res = await axios({
            url: `${CoreServer}getcabinetfiletypetoadd/${id}`,
            headers: {
                Authorization: `Bearer ${TockenUser?.token}`
            }
        });
        if (res.status == 200) {
            dispatch({
                type: GET_ALL_TYPEFILE_BY_CABINET_NOT_SELECTED_CONFIG,
                payload: { ...configDocument, FilesNoCabinets: res.data }
            })
        }
    } catch (error) {
        console.log(error);
    }
}

//tipos de archivos por el nombre
export const getTypeFileByFolderFolder = (id) => async (dispatch, getState) => {
    const { configDocument, sesion } = getState();
    const { TockenUser } = sesion;
    try {
        const res = await axios({
            url: `${CoreServer}FolderFileType/GetNamesBydFolder/${id}`,
            headers: {
                Authorization: `Bearer ${TockenUser?.token}`
            }
        });
        if (res.status == 200) {
            dispatch({
                type: GET_FILETYPE_ALL_FOLDER_CONFIG,
                payload: { ...configDocument, FilesFolders: res.data }
            });
            dispatch(getTypeFileByFolderNoSelected(id));
        }
    } catch (error) {
        dispatch({
            type: SELECTED_INDEX_CABINET_ERROR_CONFIG,
            payload: { ...configDocument, FilesFolders: [] }
        });
    }
}


//filtrar tipo de archivo no seleccionado para actualizar el carpeta
export const getTypeFileByFolderNoSelected = (id) => async (dispatch, getState) => {
    const { configDocument, sesion } = getState();
    const { TockenUser } = sesion;
    try {
        const res = await axios({
            url: `${CoreServer}FolderFileType/getfolderfiletypetoadd/${id}`,
            headers: {
                Authorization: `Bearer ${TockenUser?.token}`
            }
        });
        if (res.status == 200) {
            dispatch({
                type: GET_FILETYPE_ALL_FOLDER_NO_SELECTED_CONFIG,
                payload: { ...configDocument, FilesNoSelected: res.data }
            })
        }
    } catch (error) {
        console.log(error);
        dispatch({
            type: GET_FILETYPE_ALL_FOLDER_NO_SELECTED_ERRORS_CONFIG,
            payload: { ...configDocument, FilesNoSelected: [] }
        })
    }
}



//Filtrar Tipo de archivo seleccionado 
export const setSelectedTypeFileConfig = (id) => async (dispatch, getState) => {
    const { configDocument } = getState();
    const { TypeFile } = configDocument;
    const SelectedTypeFile = TypeFile.find(TypeFile => TypeFile.id == id);

    if (SelectedTypeFile == undefined) {
        dispatch({
            type: SELECTED_ERRORS_TYPE_FILE_CONFIG,
            payload: { ...configDocument, elementError: "El id no existe" },
        });
        return;
    }
    dispatch({
        type: SELECTED_TYPEFILE_CONFIG,
        payload: { ...configDocument, SelectedTypeFile, selected: "TypeFile" }
    });
}


//traer indice seleccionado
export const SelectedIndexConfig = (id) => async (dispatch, getState) => {
    const { configDocument, sesion } = getState();
    const { TockenUser } = sesion;
    try {
        const response = await axios({
            url: `${CoreServer}index / ${id}`,
            headers: {
                Authorization: `Bearer ${TockenUser?.token}`
            }
        });
        console.log(response.status);
        if (response.status == 200) {
            dispatch({
                type: SELECTED_INDEX_CABINET_CONFIG,
                payload: { ...configDocument, IndexSelected: response.data }
            });
        }
    } catch (error) {
        console.log(error);
        dispatch({
            type: SELECTED_INDEX_CABINET_ERROR_CONFIG,
            payload: { ...configDocument, IndexSelected: [] },
        })
    }
}



/*<---------------Guardado de datos Managment crud----------------------->*/

//Guardar nuevo tipo de dato y actualizar el estado global
export const CreatedTypeDataConfig = (newData) => async (dispatch, getState) => {
    const { sesion } = getState();
    const { TockenUser } = sesion;
    axios({
        url: `${CoreServer}datatype`,
        method: "PUT",
        data: newData,
        headers: {
            "Content-Type": "Application/json",
            Authorization: `Bearer ${TockenUser?.token}`
        },
    }).then(function (response) {
        if (response.status == 200) {
            dispatch(getTypeDataConfig());
            toast.success('Tipo de Dato Creado.');
        }
    }).catch(function (error) {
        console.log(error);
        toast.error('Tipo de Dato no Creado.');
    });
};

//Editar tipo de dato y estado global
export const UpdateTypeDataConfig = (UpdateData, id) => async (dispatch, getState) => {
    const { configDocument, sesion } = getState();
    const { TockenUser } = sesion;
    axios({
        url: `${CoreServer}datatype / ${id}`,
        method: "PUT",
        data: UpdateData,
        headers: {
            "Content-Type": "Application/json",
            Authorization: `Bearer ${TockenUser?.token}`
        },
    })
        .then(function (response) {
            if (response.status == 200) {
                dispatch(getTypeDataConfig());
                toast.success('Tipo de Dato Actualizado.');
            }
        }).catch(function (error) {
            console.log(error);
            toast.error('Tipo de Dato no Actualizado');
        });
};

//Eliminar tipo de dato y actualizar estado 
export const DeleteTypeDataConfig = (DeleteData, id) => async (dispatch, getState) => {
    const { sesion } = getState();
    const { TockenUser } = sesion;
    axios({
        url: `${CoreServer}datatype / ${id}`,
        method: "DELETE",
        data: DeleteData,
        headers: {
            "Content-Type": "Application/json",
            Authorization: `Bearer ${TockenUser?.token}`
        },
    }).then(function (response) {
        if (response.status == 200) {
            dispatch(getTypeDataConfig());
            toast.success('Tipo de Dato Eliminado');
        }
    }).catch(function (error) {
        console.log(error);
        toast.error('Tipo de Dato no Eliminado');
    });
};

//Crear nuevo tipo de archivo
export const CreatedTypeFileConfig = (newFile) => async (dispatch, getState) => {
    const { sesion } = getState();
    const { TockenUser } = sesion;
    axios({
        url: `${CoreServer}filetype`,
        method: "PUT",
        data: newFile,
        headers: {
            "Content-Type": "Application/json",
            Authorization: `Bearer ${TockenUser?.token}`
        },
    }).then(function (response) {
        if (response.status == 200) {
            dispatch(getTypeFileConfig());
            toast.success('Tipo de Archivo Creado');
        }
    }).catch(function (error) {
        console.log(error);
        toast.error('Tipo de Archivo no Creado');
    });
};


//Editar tipo de archivo y actualizar estado global 
export const UpdateTypeFileConfig = (update, id) => async (dispatch, getState) => {
    const { sesion } = getState();
    const { TockenUser } = sesion;
    axios({
        url: `${CoreServer}filetype / ${id}`,
        method: "PUT",
        data: update,
        headers: {
            "Content-Type": "Application/json",
            Authorization: `Bearer ${TockenUser?.token}`
        },
    }).then(function (response) {
        if (response.status == 200) {
            dispatch(getTypeFileConfig());
            toast.success('Tipo de Archivo Actualizado');
        }
    }).catch(function (error) {
        console.log(error);
        toast.error('Tipo de Archivo no Actualizado');
    });
};

//eliminar tipo de archivo y actualizar estado global
export const DeleteTypeFileConfig = (update, id) => async (dispatch, getState) => {
    const { sesion } = getState();
    const { TockenUser } = sesion;
    axios({
        url: `${CoreServer}filetype / ${id}`,
        method: "DELETE",
        data: update,
        headers: {
            "Content-Type": "Application/json",
            Authorization: `Bearer ${TockenUser?.token}`
        },
    }).then(function (response) {
        if (response.status == 200) {
            dispatch(getTypeFileConfig());
            toast.success('Tipo de Archivo Eliminado');
        }
    }).catch(function (error) {
        console.log(error);
        toast.error('Tipo de Archivo no Eliminado');
    });
};


/*<----------------Listas-------------------->*/
//crear lista de datos nueva
export const CreatedListConfig = (newList) => async (dispatch, getState) => {
    const { sesion } = getState();
    const { TockenUser } = sesion;
    axios({
        url: `${CoreServer}list`,
        method: "PUT",
        data: newList,
        headers: {
            "Content-Type": "Application/json",
            Authorization: `Bearer ${TockenUser?.token}`
        },
    }).then(function (response) {
        if (response.status == 200) {
            dispatch(getListDataConfig())
            toast.success('Lista Creada');
        }
    }).catch(function (error) {
        console.log(error);
        toast.error('Lista no Creada');
    })
};

//actualizar Lista 
export const UpdateElementConfig = (UpdateList, id) => async (dispatch, getState) => {
    const { sesion } = getState();
    const { TockenUser } = sesion;
    axios({
        url: `${CoreInstance}list / ${id}`,
        method: "PUT",
        data: UpdateList,
        headers: {
            "Content-type": "Application/json",
            Authorization: `Bearer ${TockenUser?.token}`
        },
    }).then(function (response) {
        if (response.status == 200) {
            dispatch(getListDataConfig());
            toast.success('Lista Actualizada');
        }
    }).catch(function (error) {
        console.log(error);
        toast.error('Lista no Actualizada');
    });
}

//Crear Elemento de la lista
export const CreatedElementListConfig = (newElement, listId) => async (dispatch, getState) => {
    const { sesion } = getState();
    const { TockenUser } = sesion;
    axios({
        url: `${CoreServer}listelement`,
        method: "PUT",
        data: newElement,
        headers: {
            "Content-Type": "Application/json",
            Authorization: `Bearer ${TockenUser?.token}`
        },
    }).then(function (response) {
        if (response.status == 200) {
            dispatch(getElementListFilterConfig(listId));
            toast.success('Elemento Creado');
            dispatch(setElementListFilterConfig(listId));
        }
    }).catch(function (error) {
        console.log(error);
        toast.error('Elemento no Creado');
    });
};


//Actualizar elemento de la lista
export const UpdateElementListConfig = (UpdateElement, id, listId) => async (dispatch, getState) => {
    const { sesion } = getState();
    const { TockenUser } = sesion;
    axios({
        url: `${CoreServer}listelement / ${id}`,
        method: "PUT",
        data: UpdateElement,
        headers: {
            "Content-type": "Application/json",
            Authorization: `Bearer ${TockenUser?.token}`
        },
    }).then(function (response) {
        if (response.status == 200) {
            dispatch(getAllElementListConfig());
            dispatch(setElementListFilterConfig(listId));
            toast.success('Elemento Actualizado');
        }
    }).catch(function (error) {
        console.log(error);
        toast.error('Elemento no Actualizado');
    });
};

//Eliminar Elemento de la lista
export const DeleteElementListConfig = (DeleteEle, id, listId) => async (dispatch, getState) => {
    const { sesion } = getState();
    const { TockenUser } = sesion;
    axios({
        url: `${CoreServer}listelement / ${id}`,
        method: "DELETE",
        data: DeleteEle,
        headers: {
            "Content-type": "Application/json",
            Authorization: `Bearer ${TockenUser?.token}`
        },
    }).then(function (response) {
        if (response.status == 200) {
            dispatch(setElementListFilterConfig(listId));
            toast.success('Elemento Eliminado');
        }
    }).catch(function (error) {
        console.log(error);
        toast.error('Elemento no Eliminado');
    });
}


//filtrar a nivel de archivos
export const setFilterFileByName = (name) => async (dispatch, getState) => {
    const { configDocument, sesion } = getState();
    const { TockenUser } = sesion;
    try {
        const response = await axios({
            url: `${DocumentServer}filebytext/${name}`,
            headers: {
                Authorization: `Bearer ${TockenUser?.token}`
            }
        });
        if (response.status == 200) {
            dispatch({
                type: GET_ALL_FILES_NAME_DATA_CORE,
                payload: { ...configDocument, SearchFiles: response.data },
            });
            dispatch(setChangeSelectView("search"));
        }
    } catch (error) {
        console.log(error);
        dispatch({
            type: GET_ALL_FILES_NAME_DATA_ERRORS_CORE,
            payload: { ...configDocument, SearchFiles: [] }
        });
    }
}