import React from 'react';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from '../redux/store/configureStore.js'
import Main from '../component/Main';
import InterviewersPage from '../component/InterviewersPage';
import StaffingPage from '../component/StaffingPage';
import Requirements from '../component/Requirements';
import Contacts from '../component/Contacts';

configure({adapter : new Adapter()});

const renderRoutes = path =>
  mount(
    <Provider store={store}>
        <MemoryRouter initialEntries={[path]}>
            <Main />
        </MemoryRouter>
    </Provider>
  );

describe('<Main> Route Testing', () => {
    it("renders home page on initial route", () => {
        const component = renderRoutes("/");
        expect(component.find(InterviewersPage)).toHaveLength(1);
    });

    it("renders page for staffing", () => {
        const component = renderRoutes("/staffing");
        expect(component.find(StaffingPage)).toHaveLength(1);
    });
    
    it("renders page for requirements", () => {
        const component = renderRoutes("/requirements");
        expect(component.find(Requirements)).toHaveLength(1);
    });

    it("renders page for contacts", () => {
        const component = renderRoutes("/contacts");
        expect(component.find(Contacts)).toHaveLength(1);
    });

    // it("renders home page on invalid route", () => {
    //     const component = renderRoutes("/random");
    //     expect(component.find(InterviewersPage)).toHaveLength(1);
    // });
});