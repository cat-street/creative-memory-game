import { FC, useEffect, useState } from 'react';
import { Icon } from 'types/gameTypes';

import randomIcons from 'utils/randomIcons';
import Field from './Field';

import styles from './MemoryGame.module.css';

const MemoryGame: FC = () => {
  const [field, setField] = useState<Icon[]>([]);

  useEffect(() => {
    setField(randomIcons);
  }, []);

  return (
    <main className={styles.game}>
      <Field icons={field} />

      <footer className={styles.footer}>
        <div>
          Icons made by{' '}
          <a href="https://www.freepik.com" title="Freepik">
            Freepik
          </a>{' '}
          from{' '}
          <a href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com
          </a>
        </div>
      </footer>
    </main>
  );
};

export default MemoryGame;
