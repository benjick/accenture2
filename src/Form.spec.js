import React from 'react';
import {mount} from 'enzyme';
import renderer from 'react-test-renderer';
import Form from './Form';

describe('Form Component', () => {
  it('should do something', () => {
    const cb = jest.fn();
    const component = mount(<Form sendMessage={cb} />);
    component.find('.qa-name').simulate('change', {
      target: {
        value: 'Irene',
      },
    });
    component.find('.qa-message').simulate('change', {
      target: {
        value: 'Hello2',
      },
    });
    component.find('form').simulate('submit');
    expect(cb.mock.calls.length).toBe(1);
    expect(cb.mock.calls[0][0]).toBe('Irene');
    expect(cb.mock.calls[0][1]).toBe('Hello2');
  });

  it('should render the same snapshot every time', () => {
    const cb = jest.fn();
    const tree = renderer.create(<Form sendMessage={cb} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
