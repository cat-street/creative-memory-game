import Footer from 'components/Footer/Footer';
import MemoryGame from 'components/MemoryGame/MemoryGame';

import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.app}>
      <MemoryGame />
      <Footer />
    </div>
  );
}

export default App;
