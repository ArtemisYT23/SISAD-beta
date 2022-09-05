import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import { DocumentServer } from "../../config/axios";
import toast, { Toaster } from 'react-hot-toast';

const initialState = {
    newMetadata: [],
    id: uuidv4(),
    value: "",
    indexId: "",
    documentId: "",
};

const CHANGE_NAME_VALUE_SUCCESS = "CHANGE_NAME_VALUE_SUCCESS";
const CHANGE_INDEXID_VALUE_SUCCESS = "CHANGE_INDEXID_VALUE_SUCCESS";
const CHANGE_DOCUMENTID_VALUE_SUCCESS = "CHANGE_DOCUMENTID_VALUE_SUCCESS";
const METADATA_DOC_NEW_SUCCESS = "METADATA_DOC_NEW_SUCCESS";

export default function MetadataReducer(state = initialState, action) {
    switch (action.type){
        case CHANGE_NAME_VALUE_SUCCESS:
        case CHANGE_INDEXID_VALUE_SUCCESS:
        case CHANGE_DOCUMENTID_VALUE_SUCCESS:
        case METADATA_DOC_NEW_SUCCESS:
            return action.payload;
        default:
            return state;
    }
};

//acciones 
//Cambio de estado de nombre
export const setGetNameMetaDocument = (value) => async(dispatch, getState) => {
    const { Meta } = getState();
    dispatch({
        type: CHANGE_NAME_VALUE_SUCCESS,
        payload:{ ...Meta, value:value }
    })
};


//Cambio de estado de indiceId
export const getIndexMetaDocument = (indexId) => async(dispatch, getState) => {
    const { Meta } = getState();
    dispatch({
        type: CHANGE_INDEXID_VALUE_SUCCESS,
        payload: { ...Meta, indexId: indexId}
    })
};

//cambio de estado de documentId
export const getDocumentIdDocument = (documentId) => async(dispatch, getState) => {
    const { Meta } = getState();
    dispatch({
        type: CHANGE_DOCUMENTID_VALUE_SUCCESS,
        payload: { ...Meta, documentId: documentId },
    })
}


//guardar array de datos de una metadata
export const setMetadataNewDoc = (formMeta) => async(dispatch, getState) => {
    const { Meta } = getState();
    dispatch({
        type: METADATA_DOC_NEW_SUCCESS,
        payload: { ...Meta, newMetadata: formMeta}
    })
}





//Creacion de nueva metadata 1 input
export const sendMetaDocument = (formMeta) => async(dispatch, getState) => {
    console.log(formMeta);
    axios({
        url:`${DocumentServer}metadata`,
        method: "PUT",
        data: formMeta,
        headers: { 'Content-Type': "Application/json",
        },
    })
    .then(function (response){
        console.log(response);
        if(response.status == 200){
            toast.success('Metadata Creada');
        }
    })
    .catch(function (error){
        console.log(error);
        toast.error('Metadata no Creada');
    })
}