import InputDropDown from '@common/Input/InputDropDown/index.jsx'
import styles from './inputCategory.module.scss'

const InputCategory = ({ name, id, label, width, value, ...props }) => {
  return (
    <div className={styles.inputCategory} style={{ width: width }}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      <InputDropDown valueChange={(e) => value(e)} />
    </div>
  )
}

export default InputCategory
