import Icons from '@common/Icon/index.jsx'
import styles from './textWithIcon.module.scss'

const TextWithIcon = ({ text, icon, Clicked }) => {
  const Icon = Icons[icon]
  return (
    <div
      className={styles.textWithIcon}
      onClick={() => {
        Clicked()
      }}
    >
      <div className={styles.icon}>
        <Icon />
      </div>
      <span className={styles.content}>{text}</span>
    </div>
  )
}

export default TextWithIcon
