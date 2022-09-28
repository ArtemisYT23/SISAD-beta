import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import CoreReducer from "./Core";
import DocumentaryReducer from "./Documentary";
import OptionReducer from "./Managment";
import ModalCoreReducer from "./ModalCore";
import ModalDocumentaryReducer from "./ModalDocumentary";
import ModalConfigReducer from "./ModalConfig";
import ConfigDocumentReducer from "./ConfigDocumentary";
import FileReducer from "./Upload";
import MetadataReducer from "./Metadata";
import ModalSecurity from "./ModalSecurity";
import DownloadReducer from "./FileDownload";
import ActionReducer from "./ActionCore";
import ViewReducer from "./ViewCore";
import SaveReducer from "./SaveCore";
import SesionReducer from "./SecurityLogin";
import UserCreatedReducer from "./CreatedUserNew";

const rootReducer = combineReducers({
    core: CoreReducer,
    documentary: DocumentaryReducer,
    managment: OptionReducer,
    modalCore: ModalCoreReducer,
    modalDocumentary: ModalDocumentaryReducer,
    modalConfig: ModalConfigReducer,
    configDocument: ConfigDocumentReducer,
    uploader: FileReducer,
    Meta: MetadataReducer,
    modalSecurity: ModalSecurity,
    download:DownloadReducer,
    actionCore: ActionReducer,
    viewCore: ViewReducer,
    saveCore: SaveReducer,
    sesion: SesionReducer,
    changeUser: UserCreatedReducer,
});

export default function generateStore(){
    const store = createStore(
        rootReducer,
        composeWithDevTools(applyMiddleware(thunk))
    );
    return store;
}