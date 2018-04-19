// React
import React from 'react';

// Stories
import { storiesOf } from '@storybook/react';

// Components
import ShortProfile from '../../components/ShortProfile/ShortProfile';

const decorator = story => (
  <div style={{ width: '300px', margin: '20px' }}>
    { story() }
  </div>
);

const ShortProfileStory = storiesOf('ShortProfile', module)
  .addDecorator(decorator)
  .add('default', () => (
    <ShortProfile
      usuario={{
        imagem: 'https://static.publicocdn.com/files/starwars/img/luke/02.jpg',
        nome: 'Luke Skywalker',
        titulo: 'Jedi Master'
      }}
      dados={[
        {
          label: 'Total de classes',
          value: '8',
        },
        {
          label: 'Número de alunos',
          value: '320',
        },
        {
          label: 'Projetos disponíveis',
          value: '20',
        }
      ]}
    />
  ));

export { ShortProfileStory };
