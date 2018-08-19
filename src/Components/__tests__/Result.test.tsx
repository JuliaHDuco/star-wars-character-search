import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { testPerson } from '../../utilities/tests/data/person';
import Result from '../Result';

test('should render Result with buttons', () => {
  const component = renderer.create(
    <Result content={testPerson} />
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
