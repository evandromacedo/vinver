// React
import React from 'react';

// Stories
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

// Components
import ButtonLight from '../../components/Button/ButtonLight';

const decorator = story => (
  <div style={{ width: '100px', margin: '20px' }}>
    { story() }
  </div>
);

const ButtonLightStory = storiesOf('ButtonLight', module)
  .addDecorator(decorator)
  .add('default', () => (
    <ButtonLight
      title="Normal"
      color="red"
      onClick={action('Click')}
      placeholder="Buscar no Vinver por..."
    />
  ))
  .add('active', () => (
    <ButtonLight
      title="Active"
      color="red"
      onClick={action('Click')}
      active
    />
  ))
  .add('disabled', () => (
    <ButtonLight
      title="Disabled"
      color="red"
      onClick={action('Click')}
      disabled
    />
  ));

export { ButtonLightStory };
