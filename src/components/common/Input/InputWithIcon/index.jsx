import { forwardRef } from 'react'
import clsx from 'clsx'
import Icons from '@common/Icon/index.jsx'
import Label from '@common/Label/index.jsx'
import styles from './inputWithIcon.module.scss'

const InputWithIcon = forwardRef(({ label, name, icon, width, type = 'text', id, ...props }, ref) => {
  const Icon = Icons[icon]
  return (
    <Label label={label} width={width} id={id}>
      <div className={styles.inputWithIcon}>
        <input
          id={id}
          className={clsx(type === 'number' && styles.number)}
          name={name}
          type={type}
          {...props}
          ref={ref}
        />
        <div className={styles.icon}>
          <Icon />
        </div>
      </div>
    </Label>
  )
})

export default InputWithIcon
