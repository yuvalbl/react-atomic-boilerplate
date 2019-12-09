import React from 'react';
import { action } from '@storybook/addon-actions';
import {Button} from './ButtonPrimary';

export default {
  title: 'Buttons',
};

export const ButtonPrimary = () => <Button onClick={action('clicked')}>Button Primary</Button>;
