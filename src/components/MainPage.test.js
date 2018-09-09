import React from 'react';
import { shallow, mount, render } from 'enzyme';
import MainPage from './MainPage';

let wrapper;

beforeEach(() => {
	const mockProps = {
		onRequestRobots: jest.fn(),
		robots: [],
		searchField: '',
		isPending: false
	};
	wrapper = shallow(<MainPage {...mockProps} />)
})

it('renders MainPage without crashing', () => {
	expect(wrapper).toMatchSnapshot();
})