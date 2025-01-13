import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '安静的面壁者🧎',
    Svg: require('@site/static/img/1.svg').default,
    description: (
      <>
       在夜深人静之时，面壁者常沉浸在对自身的深刻反思之中。
       当感到无所事事之际，思索人类存在的起点与归宿，试图探索那日常经验的真理。
       将这些结晶化作文字，记录下每一个思考的瞬间，以此来充实自己的生命，仿佛通过书写确认着自己的存在——思考的存在。
      </>
    ),
  },
  {
    title: '持续技术输入🔋',
    Svg: require('@site/static/img/2.svg').default,
    description: (
      <>
       一位来自GUET——CS的青年，乐于与同事协作，共同'打磨'他的'缸中之脑'，
       通过团队合作来激发潜能。他热衷于深入研究计算机技术，对数学建模,Web,深度学习充满了激情，享受在这些领域中不断探索和学习的过程。
      </>
    ),
  },
  {
    title: '渴望真正自律💪',
    Svg: require('@site/static/img/3.svg').default,
    description: (
      <>
        希望严格自律，它并非是外在强加给我们的束缚，而是源自内在理性的命令。
        当我们遵循着理性的指引行动时，我们实际上是在听从自己最真实的声音，那个未被欲望和错误观念所蒙蔽的声音。
        这样的行为，才是真正的自由——不是去做我们想做的事，而是去做我们应该做的事。
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
