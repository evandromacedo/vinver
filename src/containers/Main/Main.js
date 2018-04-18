// React
import React, { Component } from 'react';

// Styles
import './Main.css';

// Components
import MakePost from 'components/MakePost/MakePost';
import SamplePosts from './SamplePosts';

class Main extends Component {
  render() {
    return (
      <main className="main">
        <MakePost />
        <SamplePosts />
      </main>
    );
  }
}

export default Main;
