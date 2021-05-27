import { useEffect, useRef, useState } from 'react';
import { IconArray } from 'types/gameTypes';

import randomIcons from 'utils/randomIcons';
import Field from 'components/Field/Field';

import styles from './MemoryGame.module.css';
import Controls from 'components/Controls/Controls';

let gameInterval: ReturnType<typeof setInterval>;

const MemoryGame = () => {
  const [field, setField] = useState<IconArray>([]);
  const [running, setRunning] = useState(false);
  const [timer, setTimer] = useState(0);
  const [guessedCards, setGuessedCards] = useState(34);
  const [turnedValue, setTurnedValue] = useState<string>('');
  const counter = useRef(0);

  const runGame = () => {
    setRunning(true);
    gameInterval = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);
  };

  const setValue = (value: string) => {
    if (!turnedValue || value !== turnedValue) {
      setTurnedValue(value);
      return;
    }
    setTimeout(() => removeCards(value), 100);
    setGuessedCards(guessedCards + 2);
  };

  const removeCards = (value: string) => {
    setField(
      field.reduce((red: IconArray, el): IconArray => {
        const val = el?.value === value ? null : el;
        return red.concat(val);
      }, []),
    );
  };

  useEffect(() => {
    setField([...randomIcons]);
  }, []);

  useEffect(() => {
    if (guessedCards === field.length) {
      if (gameInterval) {
        console.log('here');
        clearInterval(gameInterval);
      }
      setRunning(false);
    }
  }, [guessedCards, field.length]);

  return (
    <main className={styles.game}>
      <Field
        icons={field}
        running={running}
        counter={counter}
        setValue={setValue}
      />
      <Controls
        running={running}
        onStart={runGame}
        timer={timer}
      />
    </main>
  );
};

export default MemoryGame;
