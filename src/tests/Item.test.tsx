import React from 'react'
import { shallow } from 'enzyme'

import { Item, ItemProps } from '../components/Item'

import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { shallowToJson } from 'enzyme-to-json';
import { IJokesState } from '../redux/ducks/jokesTypes';



describe('Item component', () => {
	const initialState: IJokesState = {
		categories: [],
		filter: '',
		amount: '',
		jokes: []
	  }
	  const mockStore = configureStore()
	const props: ItemProps = {
		id: '',
		joke: ''
	}
	let component: any
	let store: any
	store = mockStore(initialState)
	beforeEach(() => {
		component = shallow(<Provider store={store}><Item {...props} /></Provider>)
	})
  it('snapshot', () => {
    expect(shallowToJson(component)).toMatchSnapshot()
  })
})