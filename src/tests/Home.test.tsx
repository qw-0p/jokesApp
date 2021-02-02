import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import { Home } from '../components/Home';

describe('Home component', () => {
    it('snapshot', () => {
        const component = shallow( <Home />);
        expect(shallowToJson(component)).toMatchSnapshot();
    });
});