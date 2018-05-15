// React
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Styles
import './MakePost.css';

// Components
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import ButtonLight from 'common/Button/ButtonLight';
import InsertPhoto from 'common/Icon/InsertPhoto';
import PieChart from 'common/Icon/PieChart';
import Link from 'common/Icon/Link';
import School from 'common/Icon/School';

class MakePost extends Component {
  state = {
    text: '',
    expanded: false
  };

  hideOnClickOutside = (event) => {
    // Referência:
    // https://stackoverflow.com/a/3028037

    if (event.target.closest('.make-post') !== null) {
      if (!this.state.expanded) {
        this.setState({ expanded: true });
      }
    }
    else {
      if (this.state.expanded) {
        this.setState({ expanded: false });
        this.textarea.blur();
      }
    }
  }

  componentDidMount() {
    document.addEventListener('click', this.hideOnClickOutside);
    document.addEventListener('touchend', this.hideOnClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.hideOnClickOutside);
    document.removeEventListener('touchend', this.hideOnClickOutside);
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
            ref={node => this.textarea = node}
            value={this.state.text}
            onChange={this.updateText}
            rows="1"
            className={`input make-post__textarea ${expanded ? 'input make-post__textarea--expanded' : ''}`}
            placeholder="Sobre o que você está pensando?"
          />
          <ReactCSSTransitionGroup
            transitionName="post-options"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={300}
          >
            {expanded &&
              <div className="make-post__options">
                <span className="cursor-pointer"><InsertPhoto fill="grey-6" /></span>
                <span className="cursor-pointer"><PieChart fill="grey-6" /></span>
                <span className="cursor-pointer"><Link fill="grey-6" /></span>
                <span className="make-post__options__school cursor-pointer">
                  <School fill="orange-fill" /> <span className="caption-2 light-disabled">Todas as classes</span>
                </span>
                <ButtonLight
                  color="orange"
                  title="Publicar"
                  onClick={this.publicar}
                />
              </div>
            }
          </ReactCSSTransitionGroup>
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
