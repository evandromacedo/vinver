// React
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

// Styles
import './Feed.css';

// Libs
import shortid from 'shortid';

// Components
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Post from 'app_aluno/components/Post/Post';
import MakePost from 'app_aluno/components/MakePost/MakePost';
import SamplePosts from './SamplePosts';

class Feed extends Component {
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
    const type = this.props.match.params.type === 'perfil' ? 'perfil' : 'all';

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
      <section className="feed">
        <MakePost addPost={this.addPost} />
        <ReactCSSTransitionGroup
          className="feed"
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
          <SamplePosts type={type} />
        </ReactCSSTransitionGroup>
      </section>
    );
  }
}

export default withRouter(Feed);
