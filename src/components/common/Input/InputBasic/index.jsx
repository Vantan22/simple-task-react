import { forwardRef } from 'react'
import styles from './inputBasic.module.scss'

const InputBasic = forwardRef(({ name, id, label, width, status, value, ...props }, ref) => {
  let borderColor
  if (status === true) {
    borderColor = '#6DD230'
  } else if (status === false) {
    borderColor = '#FE4D97'
  } else {
    borderColor = '#E8ECEF'
  }

  return (
    <div className={styles.inputBasic} style={{ width: width }}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      <input id={id} name={name} className={styles.input} style={{ borderColor: borderColor }} ref={ref} {...props} />
    </div>
  )
})

export default InputBasic
