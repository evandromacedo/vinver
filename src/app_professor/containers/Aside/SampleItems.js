// React
import React, { Fragment } from 'react';

// Components
import AsideList from 'app_professor/components/AsideList/AsideList';
import AsideMeta from 'app_professor/components/AsideMeta/AsideMeta';
import { metasSample } from 'app_professor/containers/Metas/MetasSample';
import School from 'common/Icon/School';
import Stars from 'common/Icon/Stars';
import Assignment from 'common/Icon/Assignment';

export const Classes = () => (
  <AsideList
    titulo="Classes"
    itens={[
      {
        materia: 'Mecânica',
        turma: 'Física · EM · 2º ano A',
        icon: <School fill="red-fill" />
      },
      {
        materia: 'Termodinâmica',
        turma: 'Física · EM · 1º ano C',
        icon: <School fill="grey-5" />
      },
      {
        materia: 'Eletromagnetismo',
        turma: 'Física · EM · 3º ano A',
        icon: <School fill="grey-5" />
      },
      {
        materia: 'Óptica',
        turma: 'Física · EM · 3º ano B',
        icon: <School fill="grey-5" />
      },
      {
        materia: 'Ondulatória e acústica',
        turma: 'Física · EM · 2º ano B',
        icon: <School fill="grey-5" />
      }
    ]}
    buttonBottom={{
      titulo: 'Todos as Classes'
    }}
  />
);

export const Destaque = () => (
  <AsideList
    titulo="Destaque"
    itens={[
      {
        materia: 'Mecânica',
        turma: 'Física · EM · 2º ano A',
        icon: <Stars fill="grey-5" />
      },
      {
        materia: 'Termodinâmica',
        turma: 'Física · EM · 1º ano C',
        icon: <Stars fill="grey-5" />
      },
      {
        materia: 'Eletromagnetismo',
        turma: 'Física · EM · 3º ano A',
        icon: <Stars fill="grey-5" />
      }
    ]}
  />
);

export const Projetos = () => (
  <AsideList
    titulo="Projetos"
    itens={[
      {
        materia: 'Física teórica',
        turma: 'Física · EM',
        icon: <Assignment fill="grey-5" />
      },
      {
        materia: 'Física nuclear',
        turma: 'Física · EM',
        icon: <Assignment fill="grey-5" />
      },
      {
        materia: 'Física dos materiais',
        turma: 'Física · EM',
        icon: <Assignment fill="grey-5" />
      },
      {
        materia: 'Astrofísica',
        turma: 'Física · EM',
        icon: <Assignment fill="grey-5" />
      },
      {
        materia: 'Biofísica',
        turma: 'Física · EM',
        icon: <Assignment fill="grey-5" />
      }
    ]}
  />
);

export const Descricao = ({ id }) => {
  const meta = metasSample.find(meta => meta.numero === id);

  return (
    <AsideMeta title="Descrição">
      <p className="dark-primary footnote-2">{meta.descricaoLonga}</p>
    </AsideMeta>
  );
};

export const Regras = ({ id }) => {
  const meta = metasSample.find(meta => meta.numero === id);

  return (
    <AsideMeta title="Regras">
      {meta.regras.map((regra, index) => (
        <Fragment key={index}>
          <p className="dark-primary footnote-1">{regra.titulo}</p>
          <p className="dark-primary footnote-2">{regra.descricao}</p>
        </Fragment>
      ))}
    </AsideMeta>
  );
};
