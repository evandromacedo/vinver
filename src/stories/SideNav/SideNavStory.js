// React
import React from 'react';

// Stories
import { storiesOf } from '@storybook/react';

// Components
import SideNav from '../../containers/SideNav/SideNav';

const decorator = story => (
  <div style={{ width: '300px', margin: '20px' }}>
    { story() }
  </div>
);

const SideNavStory = storiesOf('SideNav', module)
  .addDecorator(decorator)
  .add('default', () => (
    <SideNav />
  ));

export { SideNavStory };
