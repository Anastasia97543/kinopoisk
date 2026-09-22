import { HomePage } from "../pages/home";
import { MoviePage } from "../pages/movie";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.page}>
      <div className={styles.bg} aria-hidden="true" />
      <HomePage />
      <MoviePage />
    </div>
  );
}

export default App;
