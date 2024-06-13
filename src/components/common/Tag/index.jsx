import { memo } from 'react'
import Icons from '@common/Icon/index.jsx'
import styles from '@common/InviteMembers/inviteMembers.module.scss'

const Tag = ({ name, clicked }) => {
  return (
    <div className={styles.tag}>
      <span>{name}</span>
      <div
        className={styles.delete}
        onClick={() => {
          clicked()
        }}
      >
        <Icons.add />
      </div>
    </div>
  )
}
export default memo(Tag)
