import React from 'react';
import styles from './styles.module.css';
import Translate from '@docusaurus/Translate';

export default function PrussianDisclaimer() {
  return (
    <div className={styles.disclaimer}>
      <div className="container">
        <p className={styles.disclaimerText}>
          <strong>
            <Translate
              id="prussianDisclaimer.title"
              description="Prussian German disclaimer title">
              🚢 Wilhelm — Helm op Plattdüütsch
            </Translate>
          </strong>
          {" "}
          <Translate
            id="prussianDisclaimer.message"
            description="Prussian German disclaimer message">
            Wilhelm is de Plattdüütsche Naam vun Helm. Allens is as bi Helm, man blots op Plattdüütsch — de ole Spraak ut Preußen un Noord-Düütschland.
          </Translate>
        </p>
      </div>
    </div>
  );
}
