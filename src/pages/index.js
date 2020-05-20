/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: <>Fin de package.json</>,
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        Le fichier package.json est central au fonctionnement de n’importe quelle application Node. 
        Un require a un accès direct au package.json le rendant d’autant plus indispensable. 
        Et en incluant NPM dans l’équation... 
      </>
    ),
  },
  {
    title: <>Fin de node_modules</>,
    imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <>
        L’extrême complexité de résolution des modules quand le npm install est lancé qui va faire 
        1 milliard de calls pour te télécharger autant de modules 
        et de dépendances de modules que tu vas stocker dans un dossier sans fin.
      </>
    ),
  },
  {
    title: <>Performances vérifiées</>,
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
        Place aux ES modules qui sont désormais le seul système de module accepté. 
        Plus étonnant les modules peuvent être appelés via url HTTP ! 
        Ils sont téléchargés et mis en cache indéfiniment. 
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/doc1')}>
              C'est parti !
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
