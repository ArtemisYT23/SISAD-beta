const initialState = {

};

const SET_SAVE_CABINET = "SET_SAVE_CABINET";

export default function SaveReducer(state = initialState, action) {
    switch (action.type) { 
        case SET_SAVE_CABINET:
            return action.payload;
        default:
            return state;
    }
};