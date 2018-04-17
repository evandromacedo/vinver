// React
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Styles
import './MakePost.css';

// Components
import ButtonLight from 'components/Button/ButtonLight';

class MakePost extends Component {
  state = {
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

  render() {
    const { expanded } = this.state;

    return (
      <div className="make-post">
        <div className="make-post__user-image"></div>
        <div>
          <textarea
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
  onPost: PropTypes.func
};

MakePost.defaultProps = {
  userImage: '',
  onPost: () => null
};

export default MakePost;
