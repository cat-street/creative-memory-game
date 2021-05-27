import Timer from 'components/Timer/Timer';
import styles from './Controls.module.css';

type Props = {
  running: boolean;
  timer: number;
  leaderBoard: string[];
  onStart: () => void;
};

const Controls = ({ running, timer, leaderBoard, onStart }: Props) => (
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
      <ul className={styles['controls__leaderboard-board']}>
        {leaderBoard.map((el) => (
          <li>SuperPlayer - {el}</li>
        ))}
      </ul>
    </div>
  </aside>
);

export default Controls;
