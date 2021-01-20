const SHOW_LOADER = 'ducks/app/SHOW_LOADER';
const HIDE_LOADER = 'ducks/app/HIDE_LOADER';

const initialState = {
    loading: false
};

const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case SHOW_LOADER:
            return { ...state, loading: true };
        case HIDE_LOADER:
            return { ...state, loading: false };
        default:
            return state;
    }
};

export const showLoader = () => {
    return {
        type: SHOW_LOADER
    };
};
export const hideLoader = () => {
    return {
        type: HIDE_LOADER
    };
};

export default reducer;
