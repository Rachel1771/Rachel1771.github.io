import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Quiet Thinker',
    Svg: require('@site/static/img/1.svg').default,
    description: (
      <>
       A quiet boy often reflects on himself late at night. When bored, he thinks about where people come from and go. Occasionally, 
       He will write articles about my thoughts and thoughts to enrich my every minute.
      </>
    ),
  },
  {
    title: 'Focus on technologys',
    Svg: require('@site/static/img/2.svg').default,
    description: (
      <>
       A boy from GUET Computer Science, 
       likes collaborating with colleagues to develop his pig brain,
       who enjoys delving into computer technology and is passionate about mathematical modeling and websites.
      </>
    ),
  },
  {
    title: 'Urgent self-discipline',
    Svg: require('@site/static/img/3.svg').default,
    description: (
      <>
        Graduates who aspire to land in the postgraduate entrance examination 
        need to have strict self-discipline and must succeed!
      </>
    ),
  },
  // {
  //   title: 'A cooperative boy',
  //   Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
  //   description: (
  //     <>
  //       A boy from GUET Computer Science and Technology always 
  //       collaborates with his colleagues to develop his own pig brain.
  //     </>
  //   ),
  // },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
