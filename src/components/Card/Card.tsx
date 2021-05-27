import { FC, useState } from 'react';

import { Icon } from 'types/gameTypes';
import styles from './Card.module.css';

type Props = {
  icon: Icon;
  index: number;
  count: number;
  setValue: (value: string) => void;
  setCount: (ind: number) => void;
};

const Card: FC<Props> = ({
  icon,
  index,
  count,
  setValue,
  setCount,
}: Props) => {
  const [turned, setTurned] = useState(false);

  const handleClick = () => {
    setTurned(true);
    setValue(icon.value);
    setCount(count + 1);
  }

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
