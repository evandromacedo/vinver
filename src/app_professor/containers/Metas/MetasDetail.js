// React
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Styles
import './Metas.css';

// Components
import Meta from 'app_professor/components/Meta/Meta';
import Feed from 'app_professor/containers/Feed/Feed';
import { metasSample } from './MetasSample';

class MetasDetail extends Component {
  constructor(props) {
    super(props);
    this.meta = metasSample.find(meta => meta.numero === this.props.match.params.id);
    if (!this.meta) {
      this.props.history.push('/metas');
    }
  }

  render() {
    return (
      <div className="metas-detail">
        <Meta type="large" {...this.meta} />
        <MetasInfo linkTo="#" nameInfo="Classes" infos={classesList} />
        <MetasInfo linkTo="#" nameInfo="Alunos" infos={alunosList} />
        <Feed />
      </div>
    );
  }
}

const MetasInfo = ({ nameInfo, infos, linkTo }) => (
  <div className="metas-info">
    <p className="metas-info__title headline dark-primary">{nameInfo}</p>
    <div className="metas-info__wrap">
      <div className="metas-info__list">
        {infos.map((info, index) => (
          <Link
            key={index}
            to={info.linkTo}
            style={{ '--image-url': `url(${info.image})` }}
            className="metas-info__list__item"
          />
        ))}
      </div>
      <Link to={linkTo} className="title-3 dark-secondary">
        →
      </Link>
    </div>
  </div>
);

// Mocks
const classesList = [
  {
    image: '',
    linkTo: '#'
  },
  {
    image: '',
    linkTo: '#'
  },
  {
    image: '',
    linkTo: '#'
  },
  {
    image: '',
    linkTo: '#'
  },
  {
    image: '',
    linkTo: '#'
  },
  {
    image: '',
    linkTo: '#'
  },
  {
    image: '',
    linkTo: '#'
  }
];

const alunosList = [
  {
    image: 'https://static.publicocdn.com/files/starwars/img/luke/02.jpg',
    linkTo: '#'
  },
  {
    image:
      'https://topicimages.mrowl.com/large/jack_attack/the_force_is_strong/characters/prequeltrilogy/obi_wankenobi__1.jpg',
    linkTo: '#'
  },
  {
    image: 'https://cdn.movieweb.com/img.news/NExUmTtbPVqVBF_1_1.jpg',
    linkTo: '#'
  },
  {
    image: 'https://upload.wikimedia.org/wikipedia/pt/7/74/Anakin-Jedi.jpg',
    linkTo: '#'
  },
  {
    image: 'https://pbs.twimg.com/profile_images/679543350630825984/fRn2iH-l.png',
    linkTo: '#'
  },
  {
    image: '',
    linkTo: '#'
  },
  {
    image: '',
    linkTo: '#'
  }
];

export default MetasDetail;
