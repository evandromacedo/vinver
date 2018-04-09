// React
import React from 'react';

// Stories
import { storiesOf } from '@storybook/react';

// Components
import Header from '../../containers/Header/Header';

const HeaderStory = storiesOf('Header', module)
  .add('default', () => (
    <Header />
  ));

export { HeaderStory };
