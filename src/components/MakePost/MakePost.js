// React
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Styles
import './MakePost.css';

// Components
import ButtonLight from 'components/Button/ButtonLight';

class MakePost extends Component {
  state = {
    text: '',
    expanded: false
  };

  hideOnClickOutside = (event) => {
    if (event.target.closest('.make-post') !== null) {
      if (!this.state.expanded) {
        this.setState({ expanded: true });
      }
    }
    else {
      if (this.state.expanded) {
        this.setState({ expanded: false });
      }
    }
  }

  componentDidMount() {
    document.addEventListener('click', this.hideOnClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.hideOnClickOutside);
  }

  updateText = (e) => {
    this.setState({ text: e.target.value });
  }

  publicar = () => {
    const { text } = this.state;

    if (text) {
      this.props.addPost(text);
      this.setState({
        text: '',
        expanded: false
      });
    }
  }

  render() {
    const { expanded } = this.state;

    return (
      <div className="make-post">
        <div className="make-post__user-image"></div>
        <div>
          <textarea
            value={this.state.text}
            onChange={this.updateText}
            rows="1"
            className={`input make-post__textarea ${expanded ? 'input make-post__textarea--expanded' : ''}`}
            placeholder="Sobre o que você está pensando?"
          />
          {expanded &&
            <div className="make-post__options">
              <a href="#">🖼</a>
              <a href="#">📊</a>
              <a href="#">📎</a>
              <a href="#">
                🎓 <span className="caption-2 dark-disabled">Todas as classes</span>
              </a>
              <ButtonLight
                color="blue"
                title="Publicar"
                onClick={this.publicar}
              />
            </div>
          }
        </div>
      </div>
    );
  }
}

MakePost.propTypes = {
  userImage: PropTypes.string,
  addPost: PropTypes.func
};

MakePost.defaultProps = {
  userImage: '',
  addPost: () => null
};

export default MakePost;
