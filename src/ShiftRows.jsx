import React, {useEffect, useState} from 'react'
import Checkbox from './Checkbox'
import { calcShiftPay } from './utils/calcs'

const ShiftRows = ({differentials}) => {
  const [checkedDays, setCheckedDays] = useState([])
  const [checkedNights, setCheckedNights] = useState([])
  const [dayTotal, setDayTotal] = useState(0)
  const [nightTotal, setNightTotal] = useState(0)
  const [grandTotal, setGrandTotal] = useState(0)

  useEffect(()=>{
    const daySum = checkedDays.reduce((accumulator, currentValue) => {
      return +accumulator + +calcShiftPay(differentials, 'day', currentValue)
    }, 0)
    setDayTotal(daySum.toFixed(2))
  }, [checkedDays, differentials])

  useEffect(()=>{
    const nightSum = checkedNights.reduce((accumulator, currentValue) => {
      return +accumulator + +calcShiftPay(differentials, 'night', currentValue)
    }, 0)
    setNightTotal(nightSum.toFixed(2))

  }, [checkedNights, differentials])

  return (
    <>
      <tbody>
        <tr>
          <td>Day</td>
          <td><Checkbox shift="day" day="sunday" checkedDays={checkedDays} setCheckedDays={setCheckedDays} checkedNights={checkedNights} setCheckedNights={setCheckedNights} /></td>
          <td><Checkbox shift="day" day="monday" checkedDays={checkedDays} setCheckedDays={setCheckedDays} checkedNights={checkedNights} setCheckedNights={setCheckedNights} /></td>
          <td><Checkbox shift="day" day="tuesday" checkedDays={checkedDays} setCheckedDays={setCheckedDays} checkedNights={checkedNights} setCheckedNights={setCheckedNights} /></td>
          <td><Checkbox shift="day" day="wednesday" checkedDays={checkedDays} setCheckedDays={setCheckedDays} checkedNights={checkedNights} setCheckedNights={setCheckedNights} /></td>
          <td><Checkbox shift="day" day="thursday" checkedDays={checkedDays} setCheckedDays={setCheckedDays} checkedNights={checkedNights} setCheckedNights={setCheckedNights} /></td>
          <td><Checkbox shift="day" day="friday" checkedDays={checkedDays} setCheckedDays={setCheckedDays} checkedNights={checkedNights} setCheckedNights={setCheckedNights} /></td>
          <td><Checkbox shift="day" day="saturday" checkedDays={checkedDays} setCheckedDays={setCheckedDays} checkedNights={checkedNights} setCheckedNights={setCheckedNights} /></td>
          <td>${dayTotal}</td>
        </tr>
      </tbody>
      <tbody>
        <tr>
          <td>Night</td>
          <td><Checkbox shift="night" day="sunday" checkedDays={checkedDays} setCheckedDays={setCheckedDays} checkedNights={checkedNights} setCheckedNights={setCheckedNights} /></td>
          <td><Checkbox shift="night" day="monday" checkedDays={checkedDays} setCheckedDays={setCheckedDays} checkedNights={checkedNights} setCheckedNights={setCheckedNights} /></td>
          <td><Checkbox shift="night" day="tuesday" checkedDays={checkedDays} setCheckedDays={setCheckedDays} checkedNights={checkedNights} setCheckedNights={setCheckedNights} /></td>
          <td><Checkbox shift="night" day="wednesday" checkedDays={checkedDays} setCheckedDays={setCheckedDays} checkedNights={checkedNights} setCheckedNights={setCheckedNights} /></td>
          <td><Checkbox shift="night" day="thursday" checkedDays={checkedDays} setCheckedDays={setCheckedDays} checkedNights={checkedNights} setCheckedNights={setCheckedNights} /></td>
          <td><Checkbox shift="night" day="friday" checkedDays={checkedDays} setCheckedDays={setCheckedDays} checkedNights={checkedNights} setCheckedNights={setCheckedNights} /></td>
          <td><Checkbox shift="night" day="saturday" checkedDays={checkedDays} setCheckedDays={setCheckedDays} checkedNights={checkedNights} setCheckedNights={setCheckedNights} /></td>
          <td>${nightTotal}</td>
        </tr>
      </tbody>
   </>
  )
}

export default ShiftRows