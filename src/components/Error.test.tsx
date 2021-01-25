import { shallow } from 'enzyme';
import { shallowToJson  } from 'enzyme-to-json';
import { Error } from './Error';

describe('Error component', () => {
    it('snapshot Error component', () => {
        const component = shallow(<Error />);
        expect(shallowToJson(component)).toMatchSnapshot()
    });
});
