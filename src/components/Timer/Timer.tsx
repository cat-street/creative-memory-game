import formatTime from 'utils/formatTime';
import styles from './Timer.module.css';

type Props = {
  timer: number;
};

const Timer = ({ timer }: Props) => (
  <p className={styles.controls__timer}>{formatTime(timer)}</p>
);

export default Timer;
