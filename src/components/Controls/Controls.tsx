import styles from './Controls.module.css';

type Props = {};

const Controls = ({}: Props) => (
  <aside className={styles.controls}>
    <button type="button" className={styles.controls__button}>
      Start!
    </button>
    <p className={styles.controls__timer}>00:00:00</p>
    <div className={styles.controls__leaderboard}>
      <h2 className={styles['controls__leaderboard-title']}>
        Leaderboard:
      </h2>
      <div className={styles['controls__leaderboard-board']} />
    </div>
  </aside>
);

export default Controls;
