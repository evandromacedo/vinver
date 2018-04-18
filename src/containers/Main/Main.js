// React
import React, { Component } from 'react';

// Styles
import './Main.css';

// Libs
import shortid from 'shortid';

// Components
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Post from 'components/Post/Post';
import MakePost from 'components/MakePost/MakePost';
import SamplePosts from './SamplePosts';

class Main extends Component {
  state = {
    posts: []
  }

  addPost = (texto) => {
    const posts = [
      { id: shortid.generate(), texto },
      ...this.state.posts
    ];
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
        <ReactCSSTransitionGroup
          className="main"
          transitionName="new-post"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
        >
          {posts.map((post, index) => (
            <Post
              key={post.id}
              classe={classe}
              usuario={usuario}
              texto={post.texto}
            />
          ))}
        </ReactCSSTransitionGroup>
        <SamplePosts />
      </main>
    );
  }
}

export default Main;
