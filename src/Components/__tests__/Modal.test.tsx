import * as React from 'react';
import * as renderer from 'react-test-renderer';
import Modal from '../Modal';

const onHideMock = jest.fn();
const children = <div>Hi</div>;

test('should match snapshot', () => {
  const component = renderer.create(
    <Modal onHide={onHideMock} children={children}/>
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('should call onHide', () => {
  const component = renderer.create(
    <Modal onHide={onHideMock} children={children} />
  );
  const button = component.root.findAllByType('button')[0];

  button!.props.onClick();
  expect(onHideMock.mock.calls.length).toBe(1);
});
