import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../component/App';

configure({adapter : new Adapter()});

describe('<App> Testing', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<App />);
    });

    test("contains intervewer-ui-app div", () =>{
        expect(wrapper.find('.interviewer-ui-app')).toHaveLength(1);
    })

    test("contains Header component", () =>{
        expect(wrapper.find('Header')).toHaveLength(1);
    })

    test("contains Main component", () =>{
        expect(wrapper.find('Main')).toHaveLength(1);
    })
});