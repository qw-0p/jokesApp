import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import { Home } from './Home';

describe('Home component', () => {
    it('snapshot Home component', () => {
        const component = shallow( <Home />);
        expect(shallowToJson(component)).toMatchSnapshot();
    });
});