import { FETCH_LIST, INITIAL_FILTER, FILTER, LOAD_JOKES } from './jokes';



export type Jokes = {
    id: number,
    joke: string
    categories: string[] 
}

export interface IJokesState {
    categories: string[],
    filter: string,
    amount: string,
    jokes: Jokes[],
    
}

interface IFetchList {
	type: typeof FETCH_LIST
	payload: any[]
}

export type Filters = string

interface IInitialFilter {
	type: typeof INITIAL_FILTER
	payload: Filters
}

export type Filter = string

interface IFilter {
	type: typeof FILTER
	payload: Filter
}



interface ILoadJokes {
	type: typeof LOAD_JOKES
	payload: string
}

export type JokesActionTypes = IFetchList | IInitialFilter | IFilter | ILoadJokes