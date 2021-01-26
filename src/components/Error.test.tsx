
import { shallow } from 'enzyme';
import { shallowToJson  } from 'enzyme-to-json';
import React from 'react';
import { Error } from './Error';

describe('Error component', () => {
    it('renders Error component without crashing', () => {
        shallow(<Error />)
    })
    it('snapshot Error component', () => {
        const component = shallow(<Error />);
        expect(shallowToJson (component)).toMatchSnapshot()
    });
});
