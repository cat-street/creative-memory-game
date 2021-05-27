import Card from 'components/Card/Card';
import { IconArray } from 'types/gameTypes';

import styles from './Field.module.css';

type Props = {
  icons: IconArray;
  count: number;
  setValue: (value: string) => void;
  setCount: (ind: number) => void;
};

const Field = (props: Props) => {
  const { icons, ...cardProps } = props;
  return (
    <ul className={styles.game__field}>
      {props.icons.map((el, i) =>
        el ? (
          <Card key={el.id} icon={el} index={i} {...cardProps} />
        ) : (
          <div key={i} />
        ),
      )}
    </ul>
  );
};

export default Field;
