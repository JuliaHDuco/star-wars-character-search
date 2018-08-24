import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { testResults } from '../../utilities/tests/data/results';
import Results from '../Results';

test('should match snapshot', () => {
  const component = renderer.create(
    <Results results={testResults} />
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('should render loader if no results', () => {
  const component = renderer.create(
    <Results results={[]} />
  );
  const loader = component.root.findAllByType('div')[0];
  
  expect(loader.props.children).toBe('Searching...');
});
