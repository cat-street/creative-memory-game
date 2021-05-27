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
      START
    </button>
    <Timer timer={timer} />
    <div className={styles.controls__leaderboard}>
      <h2 className={styles['controls__leaderboard-title']}>Leaderboard:</h2>
      <ul>
        {leaderBoard.map((el, i) => (
          <li className={styles['controls__leaderboard-item']} key={i}>
            SuperPlayer - {el}
          </li>
        ))}
      </ul>
    </div>
  </aside>
);

export default Controls;
