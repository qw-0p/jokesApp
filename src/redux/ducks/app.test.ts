import { IAppState } from './appTypes';
import reducer, { hideLoader, showLoader, SHOW_LOADER, HIDE_LOADER} from './app'

describe('app', () => {
	describe('actions', () => {
		it('should create an action showLoader', () => {
			const expectedAction = {
			  type: SHOW_LOADER,
			}
			expect(showLoader()).toEqual(expectedAction)
		  })
		it('should create an action hideLoader', () => {
			const expectedAction = {
			  type: HIDE_LOADER,
			}
			expect(hideLoader()).toEqual(expectedAction)
		  })
	});
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

		it('should return state', () => {
			const testAction = (): any => {
				return {type: 'TEST'}
			}
			expect(reducer(undefined, testAction())).toEqual(initialState)
		})
	})
})