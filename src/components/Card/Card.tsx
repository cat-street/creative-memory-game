import { FC, MutableRefObject, useEffect, useState } from 'react';

import { Icon } from 'types/gameTypes';
import styles from './Card.module.css';

type Props = {
  icon: Icon;
  counter: MutableRefObject<number>;
  setValue: (value: string) => void;
};

const Card: FC<Props> = ({
  icon,
  counter,
  setValue,
}: Props) => {
  const [turned, setTurned] = useState(false);
  let timeout: ReturnType<typeof setTimeout> | null = null;

  const handleClick = () => {
    if (counter.current > 1) return;
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
      }, 200);
    }
  }, [setTurned, setValue, counter, timeout]);

  return (
    <li
      className={`${styles.game__card} ${
        turned ? styles.game__card_upside : null
      }`}
      onClick={handleClick}
    >
      <img src={icon.icon} alt={icon.value} className={styles.game__icon} />
    </li>
  );
};

export default Card;
