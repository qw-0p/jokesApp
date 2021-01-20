import { call, put, spawn, takeEvery } from 'redux-saga/effects';
import { showLoader, hideLoader } from './app';

const FETCH_LIST = 'redux/jokes/FETCH_LIST';
const FILTER = 'redux/jokes/FILTER';
const INITIAL_FILTER = 'redux/jokes/INITIAL_FILTER';
const LOAD_JOKES = 'redux/jokes/LOAD_JOKES';

const initialState = {
    categories: [],
    filter: '',
    amount: '',
    jokes: []
};

const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
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

function* workerListData() {
    try {
        yield put(showLoader());
        const jokes = yield call(fetchJokes);
        const categories = yield call(fetchCategories);
        yield put(fetchList(jokes.value));
        yield put(initialFilter(categories.value));
        yield put(hideLoader());
    } catch (e) {
        yield put(hideLoader());
    }
}

function* watchFatchListData() {
    yield call(workerListData);
}

function* workerLoadingJokes({ payload: num }) {
    try {
        yield put(showLoader());
        const data = yield call(fetchJokes, num);
        yield put(fetchList(data.value));
        yield put(hideLoader());
    } catch (e) {
        yield put(hideLoader());
    }
}

function* watchLoadingJokes() {
    yield takeEvery(LOAD_JOKES, workerLoadingJokes);
}

export function* rootSaga() {
    yield spawn(watchFatchListData);
    yield spawn(watchLoadingJokes);
}

const fetchJokes = async (num = 10) => {
    const response = await fetch(`http://api.icndb.com/jokes/random/${num}`);
    return await response.json();
};

const fetchCategories = async () => {
    const response = await fetch('http://api.icndb.com/categories');
    return await response.json();
};

export default reducer;
