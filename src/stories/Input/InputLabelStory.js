// React
import React from 'react';

// Stories
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

// Components
import InputLabel from '../../components/Input/InputLabel';

const decorator = story => (
  <div style={{ width: '500px', margin: '20px' }}>
    { story() }
  </div>
);

const InputLabelStory = storiesOf('InputLabel', module)
  .addDecorator(decorator)
  .add('default', () => (
    <InputLabel
      label="Label"
      onChange={action('change')}
      placeholder="Buscar no Vinver por..."
    />
  ))
  .add('disabled', () => (
    <InputLabel
      label="Label"
      onChange={action('change')}
      placeholder="Buscar no Vinver por..."
      disabled
    />
  ))
  .add('error', () => (
    <InputLabel
      label="Label"
      onChange={action('change')}
      placeholder="Buscar no Vinver por..."
      hasError
    />
  ));

export { InputLabelStory };
