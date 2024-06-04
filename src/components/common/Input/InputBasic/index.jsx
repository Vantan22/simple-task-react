import styles from './inputBasic.module.scss'
import {forwardRef} from 'react';
const InputBasic = forwardRef(({ name, id, label,width, ...props }, ref) => {
return (
  <div className={styles.inputBasic} style={{width:width}}>
    <label htmlFor={id} className={styles.label}>{label}</label>
    <input id={id} name={name} className={styles.input} ref={ref} {...props} />
  </div>
);
});


export default InputBasic
