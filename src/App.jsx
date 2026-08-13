import { Header } from './components/Header/Header'
import { Hero } from './components/Hero/Hero'
import styles from './App.module.css'

function App() {
  return (
    <div className={styles.page}>
      <div className={styles.bg} aria-hidden="true" />
      <Header />
      <main>
        <Hero />
      </main>
    </div>
  )
}

export default App
