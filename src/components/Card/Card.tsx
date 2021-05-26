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
      style={{ maxWidth: '100%', backgroundSize: 'contain' }}
    />
  </li>
);

export default Card;
