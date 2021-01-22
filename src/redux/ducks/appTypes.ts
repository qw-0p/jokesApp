
import { SHOW_LOADER, HIDE_LOADER } from './app';



type Loading = boolean

export interface IAppState {
	loading: Loading
}

interface IShowLoader {
	type: typeof SHOW_LOADER
}

interface IHideLoader {
	type: typeof HIDE_LOADER
}

export type AppActionTypes = IShowLoader | IHideLoader