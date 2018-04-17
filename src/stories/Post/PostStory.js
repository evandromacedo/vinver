// React
import React from 'react';

// Stories
import { storiesOf } from '@storybook/react';

// Components
import Post from '../../components/Post/Post';

const decorator = story => (
  <div style={{ width: '500px', margin: '20px' }}>
    { story() }
  </div>
);

const PostStory = storiesOf('Post', module)
  .addDecorator(decorator)
  .add('default', () => (
    <Post
      classe={{
        materia: 'Mecânica',
        turma: 'Física - EM - 2º ano A'
      }}
      usuario={{
        imagem: 'https://topicimages.mrowl.com/large/jack_attack/the_force_is_strong/characters/prequeltrilogy/obi_wankenobi__1.jpg',
        nome: 'Obi-Wan Kenobi',
        id: '@benkenobi'
      }}
      texto="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis saepe porro nobis excepturi? Iusto aperiam, doloremque est quo quasi laboriosam, qui error totam, magnam possimus corrupti a dolor hic ea! Recusandae, enim impedit. Sequi, recusandae. Cum fugiat cupiditate corporis nobis temporibus repellendus esse tenetur non voluptatibus iure, consequatur dolores sint minima maxime nesciunt nostrum omnis rem nam ab delectus accusantium expedita nulla ipsum! Quisquam nobis et expedita facilis, delectus ex amet perspiciatis laboriosam obcaecati. Voluptatem optio repellat quos similique nostrum ad, laboriosam, ullam fugit est suscipit, officia fuga placeat fugiat aut aperiam ab. Repellendus sequi, asperiores, quos sit dicta aut ratione incidunt voluptatem alias ex natus fugit sint quod vero reiciendis. Molestias consequuntur ullam libero exercitationem. Nostrum earum velit, nobis corrupti maxime numquam quam nisi totam deleniti inventore magnam. Fuga quos distinctio, incidunt laborum reiciendis aliquid harum. Vero beatae ad neque sed sequi at deserunt ipsam exercitationem aperiam. Sapiente illum molestias maxime incidunt, voluptates laboriosam quae iure aut maiores minus numquam vel neque cumque! Praesentium debitis commodi autem facilis, adipisci deleniti eveniet corporis iusto facere, voluptas perferendis. Atque exercitationem quasi consequuntur optio, nobis, eos, mollitia aperiam in et recusandae blanditiis temporibus unde natus! Libero qui suscipit architecto, laborum quisquam repellendus!"
      curtidas={20}
      comentarios={3}
    />
  ));

export { PostStory };
