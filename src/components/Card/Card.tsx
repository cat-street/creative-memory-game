import { MutableRefObject, useEffect, useState } from 'react';

import { Icon } from 'types/gameTypes';
import styles from './Card.module.css';

let timeout: ReturnType<typeof setTimeout>;

type Props = {
  icon: Icon;
  running: boolean;
  counter: MutableRefObject<number>;
  setValue: (value: string) => void;
};

const Card = ({
  icon,
  running,
  counter,
  setValue,
}: Props) => {
  const [turned, setTurned] = useState(false);

  const handleClick = () => {
    if (!running || counter.current > 1 || turned) return;
    setTurned(true);
    counter.current++;
    if (counter.current === 0) {
      timeout = setTimeout(() => {
        setTurned(false);
        setValue('');
        counter.current = 0;
      }, 5000);
    }
    setValue(icon.value);
  };

  useEffect(() => {
    if (counter.current > 1) {
      if (timeout) clearTimeout(timeout);
      setTimeout(() => {
        setTurned(false);
        setValue('');
        counter.current = 0;
      }, 400);
    }
  }, [setTurned, setValue, counter]);

  return (
    <li className={styles.card}>
      <div
        className={`${styles.card__inner} ${
          turned ? styles.card__inner_turned : null
        }`}
        onClick={handleClick}
      >
        <div className={styles.card__front}>
          <img src={icon.icon} alt={icon.value} className={styles.card__icon} />
        </div>
        <div className={styles.card__back} />
      </div>
    </li>
  );
};

export default Card;
