// React
import React from 'react';

// Stories
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

// Components
import ButtonGrey from 'common/Button/ButtonGrey';

const decorator = story => (
  <div style={{ width: '100px', margin: '20px' }}>
    { story() }
  </div>
);

const ButtonGreyStory = storiesOf('ButtonGrey', module)
  .addDecorator(decorator)
  .add('default', () => (
    <ButtonGrey
      title="Normal"
      type="6"
      onClick={action('Click')}
    />
  ))
  .add('active', () => (
    <ButtonGrey
      title="Active"
      type="6"
      onClick={action('Click')}
      active
    />
  ))
  .add('disabled', () => (
    <ButtonGrey
      title="Disabled"
      type="6"
      onClick={action('Click')}
      disabled
    />
  ));

export { ButtonGreyStory };
