import { FETCH_LIST, INITIAL_FILTER, FILTER, LOAD_JOKES } from './jokes';

export type Jokes = {
    id: string,
    joke: string
    categories: string[] 
};

export interface IJokesState {
    categories: string[],
    filter: string,
    amount: string,
    jokes: Jokes[],
};

interface IFetchList {
	readonly type: typeof FETCH_LIST
	payload: any[]
};

export type Filters = string

interface IInitialFilter {
	readonly type: typeof INITIAL_FILTER
	payload: Filters
};

export type Filter = string

interface IFilter {
	readonly type: typeof FILTER
	payload: Filter
};

interface ILoadJokes {
	readonly type: typeof LOAD_JOKES
	payload: string
};

export type JokesActionTypes = IFetchList | IInitialFilter | IFilter | ILoadJokes;