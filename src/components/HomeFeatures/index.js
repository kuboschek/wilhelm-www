import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import homeSections from "@site/src/css/home-sections.module.css";
import homeCards from "@site/src/css/home-cards.module.css";
import Translate from '@docusaurus/Translate';

const FeatureList = [
  {
    title: <Translate id="home.features.manageComplexity" description="Manage Complexity section title">Komplexität verwalten</Translate>,
    description: (
      <>
        <Translate id="home.features.manageComplexity.description" description="Manage Complexity section description">Charts beschrieven ok de allerkomplexesten Apps, geven wedderhaalbare Anwendungsinstallation, un denen as eenzige Punkt vun Autorität.</Translate>
      </>
    ),
  },
  {
    title: <Translate id="home.features.easyUpdates" description="Easy Updates section title">Eenfache Updates</Translate>,
    description: (
      <>
        <Translate id="home.features.easyUpdates.description" description="Easy Updates section description">Nimm de Pien rut ut Updates mit in-place Upgrades un egen Hooks.</Translate>
      </>
    ),
  },
  {
    title: <Translate id="home.features.simpleSharing" description="Simple Sharing section title">Eenfach Delen</Translate>,
    description: (
      <>
        <Translate id="home.features.simpleSharing.description" description="Simple Sharing section description">Charts sünd eenfach to versionern, to delen un to hosten op öffentliche oder private Servers.</Translate>
      </>
    ),
  },
  {
    title: <Translate id="home.features.rollbacks" description="Rollbacks section title">Torüchrullen</Translate>,
    description: (
      <>
        <Translate
          id="home.features.rollbacks.description"
          description="Rollbacks section description"
          values={{
            helmRollback: (
              <code>wilhelm rollback</code>
            ),
          }}>
          {'Bruuk {helmRollback} to torüchrullen na en older Version vun en Release mit Leichtigkeit.'}
        </Translate>
      </>
    ),
  },
];

function Feature({ title, description }) {
  return (
    <div className={clsx("col col--3", homeCards.col)}>
      <div className={clsx("card", homeCards.card)}>
        <div className={clsx("card__header", homeCards.card__header)}>
          <Heading as="h3">{title}</Heading>
        </div>
        <div className="card__body">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default function HomeFeatures() {
  return (
    <section
      className={clsx(
        homeSections.section,
        homeSections.sectionLight,
        styles.features
      )}
    >
      <div className="container">
        <Heading as="h2"><Translate id="home.features.title" description="Features section title">Funkschonen</Translate></Heading>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
