import * as React from 'react';
import * as renderer from 'react-test-renderer';
import Person from '../Person';
import {testPerson} from '../../utilities/tests/data/person';

test('should render Person', () => {
  const onHide = jest.fn();
  const component = renderer.create(
    <Person onHide={onHide} info={testPerson} />
  ).toJSON();
  expect(component).toMatchSnapshot();
});
