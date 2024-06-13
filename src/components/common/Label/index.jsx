import styles from './label.module.scss'

const Label = ({ id, label, width, children }) => {
  return (
    <div className={styles.Label} style={{ width: width }}>
      <label htmlFor={id}>{label}</label>
      <div className={styles.input}>{children}</div>
    </div>
  )
}

export default Label
