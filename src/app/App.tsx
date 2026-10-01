import { HomePage } from "../pages/home";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.page}>
      <div className={styles.bg} aria-hidden="true" />
      <HomePage />
    </div>
  );
}

export default App;
