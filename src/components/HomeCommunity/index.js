import React from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import homeSections from "@site/src/css/home-sections.module.css";
import homeCards from "@site/src/css/home-cards.module.css";
import Translate from "@docusaurus/Translate";
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {
  MdVideoCall,
  MdForum,
  MdSchedule,
  MdCalendarToday,
  MdRocketLaunch,
  MdGroup,
  MdVideoLibrary,
  MdLogin,
  MdCalendarMonth,
} from "react-icons/md";

function CustomDate({dateString, formatType, endDateString}) {
  const {i18n} = useDocusaurusContext();
  const date = new Date(dateString);

  const formats = {
    day: { day: 'numeric', month: 'short', year: 'numeric' },
    month: { month: 'long', year: 'numeric' },
  };

  if (formatType === 'dayRange') {
    const startDate = new Date(dateString);
    const endDate = endDateString ? new Date(endDateString) : new Date(startDate.getTime() + 4 * 24 * 60 * 60 * 1000); // 4 days later if no endDate
    const formatter = new Intl.DateTimeFormat(i18n.currentLocale, {
      day: 'numeric',
      month: 'short',
    });
    const yearFormatter = new Intl.DateTimeFormat(i18n.currentLocale, {
      year: 'numeric'
    });

    const startFormatted = formatter.format(startDate);
    const endFormatted = formatter.format(endDate);
    const year = yearFormatter.format(startDate);

    return (
      <span suppressHydrationWarning>
        {startFormatted} - {endFormatted}, {year}
      </span>
    );
  } else {
    const options = formats[formatType] || formats['day'];
    const formatter = new Intl.DateTimeFormat(i18n.currentLocale, options);
    return <span suppressHydrationWarning>{formatter.format(date)}</span>;
  }
}

const BlockList = [
  {
    title: (
      <Translate
        id="home.community.nextFeatureRelease"
        description="Next Feature Release section title"
      >
        Näägste Funkschonen-Release
      </Translate>
    ),
    description: (
      <>
        <dl>
          <dt>
            <MdRocketLaunch className={styles.icon} />
            <Translate
              id="home.community.nextFeatureRelease.version"
              description="Next Feature Release version"
            >
              v4.1.0
            </Translate>
          </dt>
          <dd>
            <em><CustomDate dateString="2026-01-21" formatType="month" /></em>
          </dd>

          <dt>
            <MdCalendarMonth className={styles.icon} />
            <a href="calendar/release">
              <Translate
                id="home.community.nextFeatureRelease.calendar"
                description="Release Calendar link"
              >
                Release-Kalender
              </Translate>
            </a>
          </dt>
        </dl>
      </>
    ),
  },
  {
    title: (
      <Translate id="home.community.events" description="Events section title">
        Veranstaltungen
      </Translate>
    ),
    description: (
      <>
        <dl>
          <dt>
            <MdSchedule className={styles.icon} />
            <Translate
              id="home.community.upcomingEventsSubtitle"
              description="Upcoming Events subtitle"
            >
              Kommende Veranstaltungen
            </Translate>
          </dt>
          <dd>
            <em><CustomDate dateString="2026-03-23" endDateString="2026-03-26" formatType="dayRange" /></em> -{" "}
            <a href="https://events.linuxfoundation.org/kubecon-cloudnativecon-europe/">
              KubeCon Europa 2026
            </a>
          </dd>
          <dt>
            <MdCalendarToday className={styles.icon} />
            <Translate
              id="home.community.pastEventsSubtitle"
              description="Past Events subtitle"
            >
              Vergangene Veranstaltungen
            </Translate>
          </dt>
          <dd>
            <em><CustomDate dateString="2025-11-10" endDateString="2025-11-13" formatType="dayRange" /></em> -{" "}
            <a href="https://events.linuxfoundation.org/kubecon-cloudnativecon-north-america/">
              KubeCon Noord-Amerika 2025
            </a>
          </dd>
          <dd>
            <em><CustomDate dateString="2025-04-01" endDateString="2025-04-04" formatType="dayRange" /></em> -{" "}
            <a href="https://events.linuxfoundation.org/archive/2025/kubecon-cloudnativecon-europe/">
              KubeCon Europa 2025
            </a>
          </dd>
          <dd>
            <em><CustomDate dateString="2024-11-12" endDateString="2024-11-15" formatType="dayRange" /></em> -{" "}
            <a href="https://events.linuxfoundation.org/archive/2024/kubecon-cloudnativecon-north-america/">
              KubeCon Noord-Amerika 2024
            </a>
          </dd>
        </dl>
      </>
    ),
  },
  {
    title: (
      <Translate
        id="home.community.sigApps"
        description="SIG Apps section title"
      >
        SIG Apps
      </Translate>
    ),
    description: (
      <>
        <p>
          <MdVideoLibrary className={styles.icon} />
          <Translate
            id="home.community.sigApps.description"
            description="SIG Apps meeting description"
            values={{
              meetLink: (
                <a href="https://github.com/kubernetes/community/blob/master/sig-apps/README.md">
                  <Translate
                    id="home.community.sigApps.meetLink"
                    description="Link to SIG Apps meetings"
                  >
                    drepen sik elke Weken
                  </Translate>
                </a>
              ),
              youtubeLink: (
                <a href="https://www.youtube.com/results?search_query=kubernetes+sig+apps">
                  <Translate
                    id="home.community.sigApps.youtubeLink"
                    description="Link to YouTube recordings"
                  >
                    op YouTube deelt
                  </Translate>
                </a>
              ),
            }}
          >
            {
              "Se {meetLink} to demoen un diskuteern över Warktüüg un Projekten. Gemeinschop-Drepen warrt opnahmen un {youtubeLink}."
            }
          </Translate>
        </p>
      </>
    ),
  },
  {
    title: (
      <Translate id="home.community.developerStandups">
        Entwickler-Standups
      </Translate>
    ),
    description: (
      <>
        <p>
          <MdVideoCall className={styles.icon} />
          <a href="https://zoom.us/j/696660622">
            <Translate
              id="home.community.developerStandups.time"
              description="Developer Standups day and time"
            >
              Dunnerdags 9:30-10 Uhr (PT)
            </Translate>
          </a>
        </p>
        <p>
          <MdGroup className={styles.icon} />
          <Translate
            id="home.community.developerStandups.description"
            description="Developer Standups description with community repo link"
            values={{
              communityRepoLink: (
                <a href="https://github.com/helm/community/blob/main/communication.md#meetings">
                  <Translate
                    id="home.community.developerStandups.communityRepoLink"
                    description="Community repo link"
                  >
                    Gemeinschop-Repo
                  </Translate>
                </a>
              ),
            }}
          >
            {
              "Disse Drepen sünd open för alle. Kiek in dat {communityRepoLink} för Notizen un Details."
            }
          </Translate>
        </p>
      </>
    ),
  },
  {
    title: "Slack",
    description: (
      <>
        <p>
          <Translate
            id="home.community.slack.join"
            description="How to join the Kubernetes Slack team with slack link"
            values={{
              slackLink: (
                <a href="https://slack.k8s.io/">
                  <Translate
                    id="home.community.slack.join.slackLink"
                    description="Request access to slack link"
                  >
                    Frag hier na Toegang
                  </Translate>
                </a>
              ),
            }}
          >
            {"{slackLink} to tokamen na dat Kubernetes-Slack-Team."}
          </Translate>
        </p>
        <dl>
          <dt>
            <MdForum className={styles.icon} />
            <a href="https://kubernetes.slack.com/messages/helm-users">
              Wilhelm-Brukers
            </a>
          </dt>
          <dd>
            <Translate
              id="home.community.slack.helmUsers.description"
              description="helm-users slack channel description"
            >
              Diskussion över dat Bruken vun Wilhelm, dat Arbeiden mit Charts un dat Lösen vun gemeene Fehlers.
            </Translate>
          </dd>

          <dt>
            <MdForum className={styles.icon} />
            <a href="https://kubernetes.slack.com/messages/helm-dev">
              Wilhelm-Entwikklung
            </a>
          </dt>
          <dd>
            <Translate
              id="home.community.slack.helmDevelopment.description"
              description="helm-dev slack channel description"
            >
              Themen över Wilhelm-Entwikklung, loopende PRs, Releases, usw.
            </Translate>
          </dd>

          <dt>
            <MdForum className={styles.icon} />
            <a href="https://kubernetes.slack.com/messages/charts">Charts</a>
          </dt>
          <dd>
            <Translate
              id="home.community.slack.charts.description"
              description="charts slack channel description"
            >
              Diskussion för Brukers un Bidraagers to Wilhelm Charts.
            </Translate>
          </dd>
        </dl>
      </>
    ),
  },
  {
    title: (
      <Translate
        id="home.community.contributing"
        description="Contributing section title"
      >
        Bidragen
      </Translate>
    ),
    description: (
      <>
        <p>
          <Translate
            id="home.community.contributing.description"
            description="Contributing section description"
          >
            Wilhelm heet jümmerhen ne'e Bidragen to dat Projekt willkamen!
          </Translate>
        </p>
        <h3>
          <Translate
            id="home.community.contributing.whereToBegin"
            description="Where to begin? section title"
          >
            Wo to anfangen?
          </Translate>
        </h3>
        <p>
          <Translate
            id="home.community.contributing.whereToBegin.description"
            description="Where to begin? section description"
          >
            Wilhelm is en groot Projekt mit veele Brukers un Bidraagers. Dat kann veel ween to verdauen!
          </Translate>
        </p>
        <p>
          <Translate
            id="home.community.contributing.whereToBegin.goodFirstIssues"
            description="Good first issues sentence with link"
            values={{
              goodFirstIssuesLink: (
                <a href="https://github.com/helm/helm/issues?utf8=%E2%9C%93&q=is%3Aopen%20is%3Aissue%20label%3A%22good+first+issue%22">
                  <Translate
                    id="home.community.contributing.whereToBegin.goodFirstIssuesLink"
                    description="Good first issues link"
                  >
                    goode eerste Issues
                  </Translate>
                </a>
              ),
            }}
          >
            {
              "Wi hemmt en List vun {goodFirstIssuesLink} wenn du helpen wullt man nich weetst wo to anfangen."
            }
          </Translate>
        </p>

        <h3>
          <Translate
            id="home.community.contributing.whatDoIDo"
            description="What do I do? section title"
          >
            Wat do ik?
          </Translate>
        </h3>
        <p>
          <Translate
            id="home.community.contributing.whatDoIDo.contributionGuide"
            description="What do I do? contribution guide description"
            values={{
              contributionGuideLink: (
                <a href="https://github.com/helm/helm/blob/main/CONTRIBUTING.md">
                  <Translate
                    id="home.community.contributing.whatDoIDo.contributionGuideLink"
                    description="Contribution Guide link"
                  >
                    Bidrag-Gied
                  </Translate>
                </a>
              ),
            }}
          >
            {
              "Bevor du wat Code bidraagst, lees bitte unsen {contributionGuideLink}. Dat geiht över de Prozessen rund dat Maken un Reviewen vun Pull Requests."
            }
          </Translate>
        </p>
        <p>
          <Translate
            id="home.community.contributing.whatDoIDo.signYourCommits"
            description="What do I do? sign your commits description"
            values={{
              signYourCommitsLink: (
                <a href="blog/helm-dco">
                  <Translate
                    id="home.community.contributing.whatDoIDo.signYourCommitsLink"
                    description="Sign your commits link"
                  >
                    tekeen dien Commits
                  </Translate>
                </a>
              ),
              dcoLink: <a href="https://developercertificate.org/">DCO</a>,
              cncfLink: <a href="https://www.cncf.io/">CNCF</a>,
            }}
          >
            {
              "Nadem du wat Code schreven hest, bitte {signYourCommitsLink} to sicherstelln dat Wilhelm sik an de {dcoLink}-Överenkunft höllt, de vun de {cncfLink} bruukt warrt."
            }
          </Translate>
        </p>
      </>
    ),
  },
];

function Block({ title, description }) {
  return (
    <div className={clsx("col col--4", homeCards.col)}>
      <div className={clsx("card", homeCards.card)}>
        <div className={clsx("card__header", homeCards.card__header)}>
          <Heading as="h3">{title}</Heading>
        </div>
        <div className="card__body">{description}</div>
      </div>
    </div>
  );
}

export default function HomeCommunity() {
  return (
    <section
      className={clsx(
        homeSections.section,
        homeSections.sectionLight,
        styles.community
      )}
    >
      <div className="container">
        <Heading as="h2"><Translate id="home.community.title" description="Join the Community title">Kaam to de Gemeinschop</Translate></Heading>
        <p><Translate id="home.community.subtitle" description="Join the Community subtitle">Mehr Informatschonen över dat Wilhelm-Projekt, un wo to bidragen.</Translate></p>
        <div className="row">
          {BlockList.map((props, idx) => (
            <Block key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
