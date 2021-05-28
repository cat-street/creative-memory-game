import { useCallback, useEffect, useRef, useState } from 'react';
import { IconArray } from 'types/gameTypes';

import Field from 'components/Field/Field';
import Controls from 'components/Controls/Controls';

import { iconsIdArray, generateNumbers } from 'utils/randomIcons';
import formatTime from 'utils/formatTime';

import styles from './MemoryGame.module.scss';

let gameInterval: ReturnType<typeof setInterval>;

const MemoryGame = () => {
  const [field, setField] = useState<IconArray>([]);
  const [running, setRunning] = useState(false);
  const [timer, setTimer] = useState(0);
  const [guessedCards, setGuessedCards] = useState(0);
  const [turnedValue, setTurnedValue] = useState<string>('');
  const [leaderBoard, setLeaderBoard] = useState<string[]>([]);
  const counter = useRef(0);

  const runGame = () => {
    setField(generateNumbers(iconsIdArray));
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

  const endGame = useCallback(() => {
    clearInterval(gameInterval);
    setRunning(false);
    setLeaderBoard((prevValue) => [...prevValue, formatTime(timer)]);
    setTimer(0);
    setGuessedCards(0);
  }, [timer]);

  useEffect(() => {
    setField(generateNumbers(iconsIdArray));
  }, []);

  useEffect(() => {
    if (field.length > 0 && guessedCards === field.length) {
      endGame();
    }
  }, [guessedCards, field.length, endGame]);

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
        leaderBoard={leaderBoard}
      />
    </main>
  );
};

export default MemoryGame;
