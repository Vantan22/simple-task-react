import { DatePicker } from 'antd'
import Label from '@common/Label/index.jsx'

const { RangePicker } = DatePicker

const DatePickerLocal = ({ sendData }) => {
  const onChange = (value) => {
    sendData(value)
  }
  return (
    <Label label="Due Date">
      <DatePicker onChange={onChange} />
    </Label>
  )
}
export default DatePickerLocal
