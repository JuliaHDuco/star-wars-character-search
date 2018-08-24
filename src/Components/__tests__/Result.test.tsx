import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { testPerson } from '../../utilities/tests/data/person';
import Result from '../Result';

test('should match snapshot', () => {
  const component = renderer.create(
    <Result content={testPerson} />
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('should render Result showing the Person button', () => {
  const component = renderer.create(
    <Result content={testPerson} />
  );

  expect(component.root.findAllByType('button').length).toBe(1);
  expect(component.root.findAllByType('button')[0].props.children).toBe('Luke Skywalker');
});

test('should render Result showing the Person info', () => {
  const component = renderer.create(
    <Result content={testPerson} />
  );

  const button = component.root.findAllByType('button')[0];
  button.props.onClick({preventDefault: () => true});

  expect(component.toJSON()).toMatchSnapshot();
});

test('should hide all info on close', () => {
  const component = renderer.create(
    <Result content={testPerson} />
  );

  const button = component.root.findAllByType('button')[0];
  button.props.onClick({preventDefault: () => true});

  const closeButton = component.root.findAllByType('button')[0];
  closeButton.props.onClick({preventDefault: () => true});

  expect(component.root.findAllByType('button').length).toBe(1);
  expect(component.root.findAllByType('button')[0].props.children).toBe('Luke Skywalker');
});
