import { IAppState } from './appTypes';
import reducer, { hideLoader, showLoader, SHOW_LOADER, HIDE_LOADER} from './app'

describe('app', () => {
	describe('reducer', () => {
		let initialState: IAppState = {
			loading: false
		}
		it('should handle SHOW_LOADER', () => {
			expect(
			  reducer(initialState, showLoader())
			).toEqual({loading: true})
		})
		it('should handle HIDE_LOADER', () => {
			expect(
			  reducer(initialState, hideLoader())
			).toEqual({loading: false})
		})

		it('should return initial state', () => {
			const testAction = (): any => {
				return {type: 'TEST'}
			}
			expect(reducer(undefined, testAction())).toEqual(initialState)
		})
	})
	describe('actions', () => {
		let expectedAction: any;
		beforeEach(() => {
			expectedAction = (type: any) => ({type})
		})
		it('should create an action showLoader', () => {
			expect(showLoader()).toEqual(expectedAction(SHOW_LOADER))
		  })
		it('should create an action hideLoader', () => {
			expect(hideLoader()).toEqual(expectedAction(HIDE_LOADER))
		  })
	});

})