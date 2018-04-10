// React
import React from 'react';

// Stories
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

// Components
import Input from '../../components/Input/Input';

const decorator = story => (
  <div style={{ width: '500px', margin: '20px' }}>
    { story() }
  </div>
);

const InputStory = storiesOf('Input', module)
  .addDecorator(decorator)
  .add('default', () => (
    <Input onChange={action('change')} placeholder="Buscar no Vinver por..." />
  ))
  .add('disabled', () => (
    <Input
      onChange={action('change')}
      placeholder="Buscar no Vinver por..."
      disabled
    />
  ))
  .add('error', () => (
    <Input
      onChange={action('change')}
      placeholder="Buscar no Vinver por..."
      hasError
    />
  ));

export { InputStory };
