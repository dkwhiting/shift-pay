import React, {useEffect, useState} from 'react'
import { calcShiftPay } from './utils/calcs'
import { Icon } from '@iconify/react'

const Checkbox = ({day, checkedDays, checkedNights, setCheckedDays, setCheckedNights}) => {
  const [shift, setShift] = useState(0)

  const handleChange = () => {
    if (shift === 2){
      setShift(0)
    } else {
      setShift(shift + 1)
    }
  }
  
  useEffect(()=>{
    if (shift === 0) {
      setCheckedDays(checkedDays=> checkedDays.filter(key => {
        return key !== day
      }));
      setCheckedNights(checkedNights => checkedNights.filter(key => {
        return key !== day
      }));
    } else if (shift === 1) {
      setCheckedDays(checkedDays => [...checkedDays, day])
      setCheckedNights(checkedNights => checkedNights.filter(key => {
        return key !== day
      }));
    } else if (shift === 2) {
      setCheckedNights(checkedNights => [...checkedNights, day])
      setCheckedDays(checkedDays=> checkedDays.filter(key => {
        return key !== day
      }));
    }



    // if (checked) {
    //   if (shift === '1'){
    //     setCheckedDays(checkedDays => [...checkedDays, day])
    //   } else if (shift === '2') {
    //     setCheckedNights(checkedNights => [...checkedNights, day])
    //   }
    // } else {
    //   if (shift === '1'){
    //     setCheckedDays(checkedDays=> checkedDays.filter(key => {
    //       return key !== day
    //     }));
    //   } else if (shift === '2'){
    //     setCheckedNights(checkedNights => checkedNights.filter(key => {
    //       return key !== day
    //     }));
    //   }
    // }
  }, [shift])

  return (
    <div className="shift-checkbox" onClick={handleChange}>
      {shift === 1 ? <Icon icon='noto-v1:sun'/> : shift === 2 ? <Icon icon='ph:moon-fill'/> : null}
    </div>
  )
}

export default Checkbox