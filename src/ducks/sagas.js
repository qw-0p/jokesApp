import { call, put, spawn, takeEvery } from 'redux-saga/effects';

import { fetchList, initialFilter, showLoader, hideLoader, LOAD_JOKES } from './widgets';

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

export default function* rootSaga() {
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
