import Card from 'components/Card/Card';
import { FC } from 'react';
import { IconArray } from 'types/gameTypes';

import styles from './Field.module.css';

type Props = {
  icons: IconArray;
};

const Field: FC<Props> = ({ icons }) => (
  <ul className={styles.game__field}>
    {icons.map((el) => (el ? <Card icon={el} /> : <div />))}
  </ul>
);

export default Field;
