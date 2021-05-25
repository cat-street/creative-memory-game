import { FC } from 'react';
import { Icon } from 'types/gameTypes';

import styles from './Field.module.css';

type Props = {
  icons: Icon[],
}

const Field: FC<Props> = ({ icons }) => (
  <div className={styles.game__field}>
    {icons.map((el, i) => (
      <img key={i} src={el.icon} alt={el.value} style={{maxWidth: '100%', backgroundSize: 'contain'}} />
    ))}
  </div>
);

export default Field;
