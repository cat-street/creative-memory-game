import { FC } from 'react';

import { Icon } from 'types/gameTypes';
import styles from './Card.module.css';

type Props = {
  icon: Icon;
};

const Card: FC<Props> = ({ icon }: Props) => (
  <li key={icon.id} className={styles.game__card}>
    <img
      src={icon.icon}
      alt={icon.value}
      className={styles.game__icon}
    />
  </li>
);

export default Card;
