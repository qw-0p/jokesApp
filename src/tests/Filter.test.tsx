import React from 'react'
import { shallow } from 'enzyme'

import { Filter } from '../components/Filter'

import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { shallowToJson } from 'enzyme-to-json';
import { IJokesState } from '../redux/ducks/jokesTypes';



describe('Filter component', () => {
	const initialState: IJokesState = {
		categories: [],
		filter: '',
		amount: '',
		jokes: []
	  }
	  const mockStore = configureStore()
	
	let component: any
	let store: any
	store = mockStore(initialState)
	beforeEach(() => {
		component = shallow(<Provider store={store}><Filter /></Provider>)
	})
  it('snapshot', () => {
    expect(shallowToJson(component)).toMatchSnapshot()
  })
})