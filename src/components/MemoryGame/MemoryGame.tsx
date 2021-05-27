import { FC, useEffect, useRef, useState } from 'react';
import { IconArray } from 'types/gameTypes';

import randomIcons from 'utils/randomIcons';
import Field from 'components/Field/Field';

import styles from './MemoryGame.module.css';

const MemoryGame: FC = () => {
  const [field, setField] = useState<IconArray>([]);
  const [turnedValue, setTurnedValue] = useState<string>('');
  const counter = useRef(0);

  const setValue = (value: string) => {
    if (!turnedValue || value !== turnedValue) {
      setTurnedValue(value);
      return;
    }
    setTimeout(() => removeCards(value), 100);
  }

  const removeCards = (value: string) => {
    setField(field.reduce((red: IconArray, el): IconArray => {
      const val = (el?.value === value) ? null : el;
      return red.concat(val);
    }, []));
  }

  useEffect(() => {
    setField([...randomIcons]);
  }, []);

  return (
    <main className={styles.game}>
      <Field
        icons={field}
        counter={counter}
        setValue={setValue}
      />

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
