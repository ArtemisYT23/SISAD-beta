import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import { getFileAllDocument } from "../Core";
import { getFilesByDocument, getMetadataByFolder } from "../Documentary";
import { DocumentServer } from "../../config/axios";
import toast, { Toaster } from 'react-hot-toast';

const initialState = {
    idSelected: "",
    id: uuidv4(),
    Name: "",
    Description: "",
    File: null,
    FileTypeId: "",
    DocumentId: "",
    NameFile: "",
};

const GET_NAME_FILE_DOCU = "GET_NAME_FILE_DOCU";
const GET_ID_FILE_DOCU = "GET_ID_FILE_DOCU";
const GET_DESCRIPTION_FILE_DOCU = "GET_DESCRIPTION_FILE_DOCU";
const GET_FILE_FILE_DOCU = "GET_FILE_FILE_DOCU";
const GET_FILETYPE_FILE_DOCU = "GET_FILETYPE_FILE_DOCU";
const GET_DOCUMENT_FILE_DOCU = "GET_DOCUMENT_FILE_DOCU";
const GET_NAME_TYPEFILE_DOCU = "GET_NAME_TYPEFILE_DOCU";

export default function FileReducer(state = initialState, action) {
    switch (action.type) {
        case GET_ID_FILE_DOCU:
        case GET_NAME_FILE_DOCU:
        case GET_DESCRIPTION_FILE_DOCU:
        case GET_FILE_FILE_DOCU:
        case GET_FILETYPE_FILE_DOCU:
        case GET_DOCUMENT_FILE_DOCU:
        case GET_NAME_TYPEFILE_DOCU:
            return action.payload;
        default:
            return state;
    }
}


//Cambiar estado del nombre del tipo de archivo en apertura del modal de subir archivo
export const setGetNameTypeFileNameDocu = (name) => async (dispatch, getState) => {
    const { uploader } = getState();
    dispatch({
        type: GET_NAME_TYPEFILE_DOCU,
        payload: { ...uploader, NameFile: name }
    })
};

//cambiar estado al id del file seleccionado
export const setGetIdFileDocu = (id) => async (dispatch, getState) => {
    const { uploader } = getState();
    dispatch({
        type: GET_ID_FILE_DOCU,
        payload: { ...uploader, idSelected: id }
    })
}

// Cambiar Estado Nombre por valor del input
export const setGetNameFileDocu = (Name) => async (dispatch, getState) => {
    const { uploader } = getState();
    dispatch({
        type: GET_NAME_FILE_DOCU,
        payload: { ...uploader, Name: Name }
    })
};

//cambiar estado descripcion por valor del input
export const setGetDescriptionFileDocu = (Description) => async (dispatch, getState) => {
    const { uploader } = getState();
    dispatch({
        type: GET_DESCRIPTION_FILE_DOCU,
        payload: { ...uploader, Description: Description }
    })
};

//cambiar estado por archivo subido del input file
export const setGetFileFileDocu = (File) => async (dispatch, getState) => {
    const { uploader } = getState();
    dispatch({
        type: GET_FILE_FILE_DOCU,
        payload: { ...uploader, File: File }
    })
}

//cambiar estado de id del tipo de archivo 
export const setGetFileTypeFileDocu = (FileTypeId) => async (dispatch, getState) => {
    const { uploader } = getState();
    dispatch({
        type: GET_FILETYPE_FILE_DOCU,
        payload: { ...uploader, FileTypeId: FileTypeId }
    })
}

//cambiar estado de documentoId
export const setDocumentFileDocu = (DocumentId) => async (dispatch, getState) => {
    const { uploader } = getState();
    dispatch({
        type: GET_DOCUMENT_FILE_DOCU,
        payload: { ...uploader, DocumentId: DocumentId }
    })
}


//enviar formulario multipart/formdata de subida de archivo
export const sendFileDocumentaryDocu = (formFile, documentId, MetaFolderSelected) => async (dispatch, getState) => {
    console.log(formFile.get("Id"));
    console.log(formFile.get("Name"));
    console.log(formFile.get("Description"));
    console.log(formFile.get("File"));
    console.log(formFile.get("FileTypeId"));
    console.log(formFile.get("DocumentId"));
    const { sesion } = getState();
    const { TockenUser } = sesion();
    toast.loading('Subiendo Archivo');
    axios({
        url: `${DocumentServer}file`,
        method: "PUT",
        data: formFile,
        headers: {
            Accept: 'application/json',
            'Content-Type': "multipart/form-data",
            Authorization: `Bearer ${TockenUser?.token}`
        },
    })
        .then(function (response) {
            console.log(response);
            if (response.status == 200) {
                dispatch(getFileAllDocument(documentId))
                {
                    MetaFolderSelected != "" && (
                        dispatch(getMetadataByFolder(MetaFolderSelected)),
                        dispatch(getFilesByDocument(documentId))
                    )
                }
                toast.success('Archivo Subido Correctamente');
            }
        })
        .catch(function (error) {
            console.log(error);
            toast.error('Error Archivo no Subido');
        })
}

//Actualizar file subida de archivo
export const updateFileDocumentaryDocu = ( id, formFile, documentId, MetaFolderSelected) => async (dispatch, getState) => {
    console.log(MetaFolderSelected);
    console.log(formFile.get("Id"));
    console.log(formFile.get("Name"));
    console.log(formFile.get("Description"));
    console.log(formFile.get("File"));
    console.log(formFile.get("FileTypeId"));
    console.log(formFile.get("DocumentId"));
    const { sesion } = getState();
    const { TockenUser } = sesion;
    toast.loading('Actualizando Archivo');
    axios({
        url: `${DocumentServer}file/${id}`,
        method: "PUT",
        data: formFile,
        headers: {
            Accept: 'application/json',
            'Content-Type': "multipart/form-data",
            Authorization: `Bearer ${TockenUser?.token}`
        },
    })
    .then(function (response) {
        console.log(response);
        if (response.status == 200){
            dispatch(getFileAllDocument(documentId))
            {
                MetaFolderSelected != "" && (
                    dispatch(getMetadataByFolder(MetaFolderSelected)),
                    dispatch(getFilesByDocument(documentId))
                )
            }
            toast.success('Archivo Actualizado Correctamente');
        }
    })
    .catch( function (error) {
        console.log(error);
        toast.error('Error Archivo no Subido');
    })
}