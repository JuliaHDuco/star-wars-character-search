// import * as React from 'react';
// import * as renderer from 'react-test-renderer';
// import FuzzySearchInput from '../FuzzySearchInput';
// import {configure, shallow} from 'enzyme';
//
// import * as Adapter from 'enzyme-adapter-react-16';
// import { testResults } from '../../utilities/tests/data/results';
//
// const fuzzySearchInput = require('../FuzzySearchInput');
//
// configure({ adapter: new Adapter() });
//
// const testRequest = () => {
//   return new Promise((resolve, reject) => {() =>
//     testResults ? resolve(testResults) : reject({error: 'No results found'})}
//   );
// }
//
// test('should match snapshot', () => {
//   const component = renderer.create(
//     <FuzzySearchInput />
//   );
// 
//   const tree = component.toJSON();
//   expect(tree).toMatchSnapshot();
// });
//
// test('should call componentDidUpdate and then search on change', () => {
//   const componentDidUpdateSpy = jest.spyOn(FuzzySearchInput.prototype, 'componentDidUpdate');
//   const searchSpy = jest.spyOn(fuzzySearchInput, 'search');
//
//   const component = shallow(<FuzzySearchInput />);
//   const input = component.find('input');
//   input.simulate('change', { target: { value: 'Skywalker' } })
//
//   expect(componentDidUpdateSpy.mock.calls.length).toBe(1);
//   expect(componentDidUpdateSpy).toBeCalledWith({}, {'results': [], 'searchString': ''});
//   expect(searchSpy.mock.calls.length).toBe(1);
// });
//
// test('should call handleChange on input change', () => {
//   const component = shallow(<FuzzySearchInput />);
//   const handleOnChangeSpy = jest.spyOn(fuzzySearchInput, 'handleOnChange');
//
//   component.find('input').simulate('change', {event: {target: {value: 'Skywalker'}}});
//
//   expect(handleOnChangeSpy.mock.calls.length).toBe(1);
//   expect(handleOnChangeSpy).toBeCalledWith({event: {target: {value: 'Skywalker'}}});
// });
//
// test('should handle async/await search', async () => {
//   expect.assertions(1);
//   await expect(testRequest()).resolves.toBe(testResults);
// });
