import { DatePicker } from 'antd'
import Label from '@common/Label/index.jsx'

const { RangePicker } = DatePicker
const onChange = (value) => {
  console.log('onOk: ', value)
}
const DatePickerLocal = () => {
  return (
    <Label label="Due Date">
      <DatePicker onChange={onChange} />
    </Label>
  )
}
export default DatePickerLocal
