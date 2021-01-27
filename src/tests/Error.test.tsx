
import { shallow } from 'enzyme';
import { shallowToJson  } from 'enzyme-to-json';
import React from 'react';
import { Error } from '../components/Error';

describe('Error component', () => {
    it('renders Error component without crashing', () => {
        shallow(<Error />)
    })
    it('snapshot', () => {
        const component = shallow(<Error />);
        expect(shallowToJson (component)).toMatchSnapshot()
    });
});
