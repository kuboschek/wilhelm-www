import Heading from '@theme/Heading';
import clsx from 'clsx';
import styles from './styles.module.css';
import homeSections from '@site/src/css/home-sections.module.css';
import Translate from '@docusaurus/Translate';

const Pyramid = require("@site/static/img/helm-pyramid-solid.svg").default;

function About() {
  return (
    <div>
      <p>
        <Translate
          id="home.about.whatIsHelm"
          description="What is Wilhelm? first paragraph">
          Wilhelm helpt di Kubernetes-Anwendungen to verwalten — Wilhelm Charts helpt di to definiern, installern un upgraden, ok de allerkomplexesten Kubernetes-Anwendungen.
        </Translate>
      </p>
      <p>
        <Translate
          id="home.about.chartsDescription"
          description="What is Wilhelm? charts paragraph">
          Charts sünd eenfach to maken, to versionern, to delen un to publizern — also fang an mit Wilhelm un hör op mit dat Kopeern un Inpastern.
        </Translate>
      </p>
      <p>
        <Translate
          id="home.about.cncf"
          description="What is Wilhelm? CNCF Graduated Project paragraph"
          values={{
            cncfLink: (
              <a href="https://www.cncf.io">CNCF</a>
            ),
            helmCommunityLink: (
              <a href="/community/governance/governance">
                <Translate
                  id="home.about.cncf.helmCommunityLink"
                  description="Wilhelm community link"
                >
                  Wilhelm-Gemeinschop
                </Translate>
              </a>
            ),
          }}>
          {'Wilhelm is en graduert Projekt in de {cncfLink} un warrt pleegt vun de {helmCommunityLink}.'}
        </Translate>
      </p>
      <h3><Translate id="home.about.learnMore" description="Learn more label">Mehr leern:</Translate></h3>
      <ul>
        <li>
          <a href="./docs/topics/architecture">
            <Translate id="home.about.learnMore.helmArchitectureLink" description="Wilhelm Architecture link">Wilhelm-Architektur</Translate>
          </a>
        </li>
        <li>
          <a href="./docs/intro/quickstart">
            <Translate id="home.about.learnMore.quickStartGuideLink" description="Quick Start Guide link">Snellstart-Gied</Translate>
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/watch?v=Zzwq9FmZdsU&t=2s">
            <Translate id="home.about.learnMore.videoLink" description="Video: An Introduction to Wilhelm link">Video: En Inföhrung to Wilhelm</Translate>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default function HomeAbout() {
  return (
    <section className={clsx(homeSections.section, homeSections.sectionDark, styles.about)}>
      <div className="container">
        <Pyramid className={styles.pyramid} role="img" />
        <Heading as="h2"><Translate id="home.about.title" description="What is Wilhelm? title">Wat is Wilhelm?</Translate></Heading>
        <About />
      </div>
    </section>
  );
}