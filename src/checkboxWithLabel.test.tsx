import * as React from 'react';
import { shallow } from 'enzyme';
import { CheckboxWithLabel } from './checkboxWithLabel';

test('CheckboxWithLabel changes the test after a click ', () => {
  const checkbox = shallow(<CheckboxWithLabel labelOff="off" labelOn="on" />);
  expect(checkbox.text()).toEqual('off');
  checkbox.find('input').simulate('change');
  expect(checkbox.text()).toEqual('on');
})