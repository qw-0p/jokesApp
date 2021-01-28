import { IJokesState } from './jokesTypes';
import reducer, { FETCH_LIST, INITIAL_FILTER, FILTER, LOAD_JOKES, fetchList, initialFilter, filterList, loadJokes } from './jokes'

describe('jokes state', () => {
	describe('reducer', () => {
		let state: IJokesState = {
			categories: [],
			filter: '',
			amount: '',
			jokes: []
		}
		it('should handle FETCH_LIST', () => {
			expect(
				reducer(state, fetchList(['Array jokes']))
			).toEqual({...state, jokes: [...state.jokes, ...['Array jokes']]})
		});
		it('should handle INITIAL_FILTER', () => {
			expect(
				reducer(state, initialFilter('Filter'))
			).toEqual({...state, categories: [...state.categories, ...'Filter']})
		});
		it('should handle FILTER', () => {
			expect(
				reducer(state, filterList('Filter list'))
			).toEqual({...state, filter: 'Filter list'})
		});
		it('should handle LOAD_JOKES', () => {
			expect(
				reducer(state, loadJokes('Amount jokes'))
			).toEqual({...state, amount: 'Amount jokes'})
		});
		it('should return initial state', () => {
			const testAction = (): any => {
				return {type: 'TEST'}
			}
			expect(
				reducer(undefined, testAction())
			).toEqual(state)
		});
	});
	describe('actions', () => {
		let expectedAction: any
		beforeEach(() => {
			expectedAction = (type: any, payload: any) => ({type, payload})
		})
		it('should create an action FETCH_LIST', () => {
			const text = ['test']
			expect(fetchList(text)).toEqual(expectedAction(FETCH_LIST, text))
		})
		it('should create an action INITIAL_FILTER', () => {
			const text = 'test'
			expect(initialFilter(text)).toEqual(expectedAction(INITIAL_FILTER, text))
		})
		it('should create an action FILTER', () => {
			const text = 'test'
			expect(filterList(text)).toEqual(expectedAction(FILTER, text))
		})
		it('should create an action LOAD_JOKES', () => {
			const text = 'test'
			expect(loadJokes(text)).toEqual(expectedAction(LOAD_JOKES, text))
		})
	});
	
})