const FETCH_LIST = 'redux/widgets/FETCH_LIST';
const FILTER = 'redux/widgets/FILTER';
const INITIAL_FILTER = 'redux/widgets/INITIAL_FILTER';
const SHOW_LOADER = 'redux/widgets/SHOW_LOADER';
const HIDE_LOADER = 'redux/widgets/HIDE_LOADER';
export const LOAD_JOKES = 'redux/widgets/LOAD_JOKES';

const initialState = {
    categories: [],
    filter: '',
    amount: '',
    jokes: [],
    loading: true
};

const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case SHOW_LOADER:
            return { ...state, loading: true };
        case HIDE_LOADER:
            return { ...state, loading: false };
        case FETCH_LIST:
            return {
                ...state,
                jokes: [...state.jokes, ...action.payload]
            };
        case INITIAL_FILTER:
            return {
                ...state,
                categories: action.payload
            };
        case FILTER:
            return {
                ...state,
                filter: action.payload
            };
        case LOAD_JOKES:
            return {
                ...state,
                amount: action.payload
            };
        default:
            return state;
    }
};

export const fetchList = (jokesArray) => {
    return {
        type: FETCH_LIST,
        payload: jokesArray
    };
};

export const initialFilter = (filterArray) => {
    return {
        type: INITIAL_FILTER,
        payload: filterArray
    };
};

export const filterList = (category) => {
    return {
        type: FILTER,
        payload: category
    };
};

export const loadJokes = (amount) => {
    return {
        type: LOAD_JOKES,
        payload: amount
    };
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
