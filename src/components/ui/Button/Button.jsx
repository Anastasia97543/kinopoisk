import styles from './Button.module.css'

export function Button({ children }) {
  return (
    <button type="button" className={styles.button}>
      {children}
    </button>
  )
}
