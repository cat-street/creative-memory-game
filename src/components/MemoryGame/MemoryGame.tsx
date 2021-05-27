import { FC, useEffect, useState } from 'react';
import { Icon, IconArray } from 'types/gameTypes';

import randomIcons from 'utils/randomIcons';
import Field from 'components/Field/Field';

import styles from './MemoryGame.module.css';

const MemoryGame: FC = () => {
  const [field, setField] = useState<IconArray>([]);
  const [turnedValue, setTurnedValue] = useState<string>('');
  const [turnedCount, setTurnedCount] = useState(0);

  const setValue = (value: string) => {
    if (!turnedValue || value !== turnedValue) {
      setTurnedValue(value);
      return;
    }
    removeCards(value);
  }

  const setCount = (ind: number) => {
    setTurnedCount(ind);
  }

  const removeCards = (value: string) => {
    setField(field.reduce((red: IconArray, el): IconArray => {
      const val = (el?.value === value) ? null : el;
      return red.concat(val);
    }, []));
  }

  // const flipCard = (index: number) => {
  //   const newField = [ ...field ];
  //   const card = { ...newField[index] } as Icon;
  //   card.upside = true;
  //   newField[index] = card;
  //   setField(newField)
  // }

  useEffect(() => {
    setField([...randomIcons]);
  }, []);

  return (
    <main className={styles.game}>
      <Field
        icons={field}
        setValue={setValue}
        count={turnedCount}
        setCount={setCount}
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
