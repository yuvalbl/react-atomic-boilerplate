import React from 'react';
import {action} from '@storybook/addon-actions';
import {Checkbox} from './Checkbox';

export default {
  title: 'Checkbox',
};

export const text = () => <Checkbox onClick={action('clicked')}/>;
