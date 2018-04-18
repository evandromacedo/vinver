// React
import React, { Component } from 'react';

// Styles
import './Main.css';

// Components
import Post from 'components/Post/Post';
import MakePost from 'components/MakePost/MakePost';
import SamplePosts from './SamplePosts';

class Main extends Component {
  state = {
    posts: []
  }

  addPost = (post) => {
    const posts = [post, ...this.state.posts];
    this.setState({ posts });
  }

  render() {
    const { posts } = this.state;

    const classe = {
      materia: 'Mecânica',
      turma: 'Física - EM - 2º ano A'
    };

    const usuario = {
      imagem: 'https://static.publicocdn.com/files/starwars/img/luke/02.jpg',
      nome: 'Obi-Wan Kenobi',
      id: '@benkenobi'
    };

    return (
      <main className="main">
        <MakePost addPost={this.addPost} />
        {posts &&
          posts.map((post, index) => (
            <Post
              key={index}
              classe={classe}
              usuario={usuario}
              texto={post}
            />
          ))
        }
        <SamplePosts />
      </main>
    );
  }
}

export default Main;
