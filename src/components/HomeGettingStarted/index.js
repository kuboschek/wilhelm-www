import Heading from "@theme/Heading";
import clsx from "clsx";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import CodeBlock from "@theme/CodeBlock";
import styles from "./styles.module.css";
import homeSections from "@site/src/css/home-sections.module.css";
import homeCards from "@site/src/css/home-cards.module.css";
import Translate from '@docusaurus/Translate';

export default function HomeGettingStarted() {
  return (
    <section
      className={clsx(
        homeSections.section,
        homeSections.sectionDark,
        styles.gettingStarted
      )}
    >
      <div className="container">
        <Heading as="h2"><Translate id="home.gettingStarted.title" description="Getting started section title">Anfangen</Translate></Heading>
        <div className="row">
          <div className={clsx("col col--6", homeCards.col)}>
            <div className={clsx("card", homeCards.card)}>
              <div className={clsx("card__header", homeCards.card__header)}>
                <Heading as="h3"><Translate id="home.gettingStarted.getHelmTitle" description="Get Wilhelm section title">Wilhelm kriegen</Translate></Heading>
              </div>
              <div className="card__body">
                <p>
                  <Translate
                    id="home.gettingStarted.installHelm"
                    description="Getting started install with package manager sentence with download link"
                    values={{
                      downloadLink: (
                        <a href="https://github.com/helm/helm/releases/latest">
                          <Translate
                            id="home.gettingStarted.installHelm.downloadLink"
                            description="Download a binary link">
                            laad en Binärdatei runner
                          </Translate>
                        </a>
                      ),
                    }}>
                    {'Installeer Wilhelm mit en Paketverwalter, oder {downloadLink}.'}
                  </Translate>
                </p>

                <Tabs>
                  <TabItem value="homebrew" label="Homebrew" default>
                    <CodeBlock language="bash">brew install helm</CodeBlock>
                  </TabItem>
                  <TabItem value="chocolatey" label="Chocolatey">
                    <CodeBlock language="bash">
                      choco install kubernetes-helm
                    </CodeBlock>
                  </TabItem>
                  <TabItem value="scoop" label="Scoop">
                    <CodeBlock language="bash">scoop install helm</CodeBlock>
                  </TabItem>
                  <TabItem value="snap" label="Snap">
                    <CodeBlock language="bash">
                      sudo snap install helm --classic
                    </CodeBlock>
                  </TabItem>
                </Tabs>

                <p>
                  <Translate
                    id="home.gettingStarted.postInstall.instructions"
                    description="Instructions after installing Wilhelm"
                    values={{
                      docsLink: (
                        <a href="./docs/intro/install/">
                          <Translate
                            id="home.gettingStarted.postInstall.docsLink"
                            description="Link to installation docs">
                            Doks
                          </Translate>
                        </a>
                      ),
                      installationLink: (
                        <a href="./docs/intro/install/">
                          <Translate
                            id="home.gettingStarted.postInstall.installationLink"
                            description="Link to installation instructions">
                            Installationsanwiesungen
                          </Translate>
                        </a>
                      ),
                      usageLink: (
                        <a href="./docs/intro/using_helm/">
                          <Translate
                            id="home.gettingStarted.postInstall.usageLink"
                            description="Link to usage instructions">
                            Bruuksanwiesungen
                          </Translate>
                        </a>
                      ),
                    }}>
                    {'Wenn installert, papp de wilhelm-Binärdatei ut un fög se to dien PATH to un du büst good to go! Kiek in de {docsLink} för wieder {installationLink} un {usageLink}.'}
                  </Translate>
                </p>
              </div>
            </div>
          </div>

          <div className={clsx("col col--6", homeCards.col)}>
            <div className={clsx("card", homeCards.card)}>
              <div className={clsx("card__header", homeCards.card__header)}>
                <Heading as="h3">
                  <Translate
                    id="home.gettingStarted.getChartsTitle"
                    description="Getting started get charts title">
                    Charts kriegen
                  </Translate>
                </Heading>
              </div>
              <div className="card__body">
                <p>
                  <Translate
                    id="home.gettingStarted.artifactHub"
                    description="Artifact Hub link"
                    values={{
                      artifactHubLink: (
                        <a href="https://artifacthub.io">Artifact Hub</a>
                      ),
                      helmChartsLink: (
                        <a href="https://artifacthub.io/packages/search?kind=0">
                          <Translate
                            id="home.gettingStarted.artifactHub.helmChartsLink"
                            description="Wilhelm charts link">
                            Wilhelm Charts
                          </Translate>
                        </a>
                      ),
                    }}>
                    {'Besöök {artifactHubLink} to entdecken {helmChartsLink} vun veele öffentliche Repositories.'}
                  </Translate>
                </p>

                <a href="https://artifacthub.io/">
                  <img
                    src="/img/artifact-hub.jpg"
                    alt="Artifact Hub"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
