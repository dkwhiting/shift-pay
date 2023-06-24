import React, {useEffect, useState} from 'react'
import { calcShiftPay } from './utils/calcs'

const Checkbox = ({shift, day, differentials, checkedDays, checkedNights, setCheckedDays, setCheckedNights}) => {
  const [checked, setChecked] = useState(false)

  const handleChange = () => {
    setChecked(!checked)
    }
  
  useEffect(()=>{
    if (checked) {
      if (shift === 'day'){
        setCheckedDays(checkedDays => [...checkedDays, day])
      } else {
        setCheckedNights(checkedNights => [...checkedNights, day])
      }
    } else {
      if (shift === 'day'){
        setCheckedDays(checkedDays=> checkedDays.filter(key => {
          return key !== day
        }));
      } else {
        setCheckedNights(checkedNights => checkedNights.filter(key => {
          return key !== day
        }));
      }
    }
  }, [checked])

  return (
    <input type="checkbox" checked={checked} onChange={handleChange}/>
  )
}

export default Checkbox