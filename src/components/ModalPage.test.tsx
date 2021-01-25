import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import { ModalPage } from './ModalPage';

describe('ModalPage component', () => {
    it('snapshot ModalPage component', () => {
        const component = shallow( <ModalPage /> );
        expect(shallowToJson(component)).toMatchSnapshot();
    });
});