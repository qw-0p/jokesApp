import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import { Home } from './Home';

describe('Error component', () => {
    it('snapshot Error component', () => {
        const component = shallow( <Home />);
        expect(shallowToJson(component)).toMatchSnapshot();
    });
});