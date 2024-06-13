import styles from './sideBarText.module.scss'

const SideBarText = ({ text, clicked }) => {
  return (
    <div
      className={styles.sideBarText}
      onClick={() => {
        clicked(text)
      }}
    >
      <div className={styles.item}>
        <span>{text}</span>
      </div>
    </div>
  )
}

export default SideBarText
