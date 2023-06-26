import React, {useEffect, useState} from 'react'
import Checkbox from './Checkbox'
import { calcOvertimePay, calcShiftPay } from './utils/calcs'

const ShiftRows = ({payInfo}) => {
  const [checkedDays, setCheckedDays] = useState([])
  const [checkedNights, setCheckedNights] = useState([])
  const [dayTotal, setDayTotal] = useState(0)
  const [nightTotal, setNightTotal] = useState(0)
  const [grandTotal, setGrandTotal] = useState(0)

  useEffect(()=>{
    const baseSum = checkedDays.reduce((accumulator, currentValue) => {
      return +accumulator + +calcShiftPay(payInfo, 'day', currentValue)
    }, 0)
    const overtimeSum = calcOvertimePay(payInfo, checkedDays.length, checkedNights.length)
    setDayTotal(baseSum.toFixed(2))
  }, [checkedDays, payInfo])

  useEffect(()=>{
    const baseSum = checkedNights.reduce((accumulator, currentValue) => {
      return +accumulator + +calcShiftPay(payInfo, 'night', currentValue)
    }, 0)
    const overtimeSum = calcOvertimePay(payInfo, checkedDays.length, checkedNights.length)
    setNightTotal((baseSum+overtimeSum).toFixed(2))
    

  }, [checkedNights, payInfo])

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