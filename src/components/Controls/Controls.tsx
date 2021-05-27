import Timer from 'components/Timer/Timer';
import styles from './Controls.module.css';

type Props = {
  running: boolean;
  timer: number;
  onStart: () => void;
};

const Controls = ({ running, timer, onStart }: Props) => (
  <aside className={styles.controls}>
    <button
      type="button"
      className={styles.controls__button}
      onClick={onStart}
      disabled={running}
    >
      Start!
    </button>
    <Timer timer={timer} />
    <div className={styles.controls__leaderboard}>
      <h2 className={styles['controls__leaderboard-title']}>Leaderboard:</h2>
      <div className={styles['controls__leaderboard-board']} />
    </div>
  </aside>
);

export default Controls;
