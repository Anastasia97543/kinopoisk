import styles from './Badge.module.css'

export function Badge({ children, className = '' }) {
  return (
    <span className={`${styles.badge} ${className}`.trim()}>{children}</span>
  )
}
