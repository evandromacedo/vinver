// React
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Styles
import './MakePost.css';

// Components
import ButtonLight from 'components/Button/ButtonLight';

class MakePost extends Component {
  render() {
    return (
      <div className="make-post">
        <div className="make-post__user-image"></div>
        <div>
          <textarea
            className="input make-post__textarea" rows="1"
            placeholder="Sobre o que você está pensando?"
          />
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
