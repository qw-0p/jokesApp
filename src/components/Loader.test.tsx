import React from 'react'
import { shallow } from 'enzyme'

import { Loader } from './Loader'

import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { shallowToJson } from 'enzyme-to-json';
import { IAppState } from '../redux/ducks/appTypes';



describe('Filter component', () => {
	const initialState: IAppState = {
		loading: false
	  }
	  const mockStore = configureStore()
	
	let component: any
	let store: any
	store = mockStore(initialState)
	beforeEach(() => {
		component = shallow(<Provider store={store}><Loader /></Provider>)
	})
  it('snapshot', () => {
    expect(shallowToJson(component)).toMatchSnapshot()
  })
})