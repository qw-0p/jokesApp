import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import { ModalPage, ModalProps } from './ModalPage';

const props: ModalProps = {
    show: false,
    joke: '',
    onHide: () => {}
}

describe('ModalPage component', () => {
    it('snapshot ModalPage component', () => {
        const component = shallow( <ModalPage {...props} /> );
        expect(shallowToJson(component)).toMatchSnapshot();
    });
});