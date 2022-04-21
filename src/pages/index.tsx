/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import Link from '@docusaurus/Link';
import Translate, {translate} from '@docusaurus/Translate';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl, {useBaseUrlUtils} from '@docusaurus/useBaseUrl';

import Layout from '@theme/Layout';

import styles from './styles.module.css';

function HeroBanner() {
  return (
    <div className={styles.hero} data-theme="dark">
      <div className={styles.heroInner}>
        <h1 className={styles.heroProjectTagline}>
          <img
            alt={translate({message: 'Newton'})}
            className={styles.heroLogo}
            src={useBaseUrl('/img/favicon.png')}
            width="200"
            height="200"
          />
          <span
            className={styles.heroTitleTextHtml}
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: translate({
                id: 'homepage.hero.title',
                message:
                  'Everyone Should <b>Benefit</b> from Economic Growth.',
                description:
                  'Newton: Everyone Should Benefit from Economic Growth',
              }),
            }}
          />
        </h1>
        <div className={styles.indexCtas}>
          <Link className="button button--primary" to="/docs">
            <Translate>Get Started</Translate>
          </Link>
          <Link className="button button--info" to="/blog">
            <Translate>Blog</Translate>
          </Link>
          <span className={styles.indexCtasGitHubButtonWrapper}>
            <iframe
              className={styles.indexCtasGitHubButton}
              src="https://ghbtns.com/github-btn.html?user=newtonproject&amp;repo=newchain&amp;type=star&amp;count=true&amp;size=large"
              width={160}
              height={30}
              title="GitHub Stars"
            />
          </span>
        </div>
      </div>
    </div>
  );
}

function VideoContainer() {
  return (
    <div className="container text--center margin-bottom--xl">
      <div className="row">
        <div className="col">
          <h2>
            <Translate>Check it out in the intro video</Translate>
          </h2>
          <div className="video-container">
            <iframe
              width="560"
              height="315"
              src="https://www.newtonproject.org/filestorage/uploads/newton-introduction.mp4"
              title="Newton Introduction"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home(): JSX.Element {
  const {
    siteConfig: {customFields, tagline},
  } = useDocusaurusContext();
  const {description} = customFields as {description: string};
  return (
    <Layout title={tagline} description={description}>
      <main>
      <div>
          <div className={styles.banner}>
            Star {' '}
            <Link to="https://github.com/newtonproject/newchain">
              NewChain
            </Link>
            {' '} on github.
          </div>
        </div>
        <HeroBanner />
        <div className={styles.section}>
          <VideoContainer />
        </div>
      </main>
    </Layout>
  );
}
