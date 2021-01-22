import { IAppState, AppActionTypes } from './appTypes';
export const SHOW_LOADER = 'ducks/app/SHOW_LOADER';
export const HIDE_LOADER = 'ducks/app/HIDE_LOADER';

const initialState: IAppState = {
    loading: false
};

const reducer = (state = initialState, action: AppActionTypes): IAppState => {
    switch (action.type) {
        case SHOW_LOADER:
            return { ...state, loading: true };
        case HIDE_LOADER:
            return { ...state, loading: false };
        default:
            return state;
    }
};

export const showLoader = (): AppActionTypes => {
    return {
        type: SHOW_LOADER
    };
};
export const hideLoader = (): AppActionTypes => {
    return {
        type: HIDE_LOADER
    };
};

export default reducer;
