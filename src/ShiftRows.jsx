import React, {useEffect, useState} from 'react'
import Checkbox from './Checkbox'
import { calcOvertimePay, calcShiftPay } from './utils/calcs'

const ShiftRows = ({payInfo, weekCount}) => {
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

  useEffect(()=>{
    setGrandTotal((+dayTotal + +nightTotal).toFixed(2))
  }, [dayTotal, nightTotal])

  const daysList = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"]

  return (
    <>
      <tbody>
        <tr>
          <td>Week {weekCount}</td>
          {daysList.map((day, i) => {
            return <td key={`day-${i}`}><Checkbox shift="day" day={day} checkedDays={checkedDays} setCheckedDays={setCheckedDays} checkedNights={checkedNights} setCheckedNights={setCheckedNights} /></td>
          })}
         <td>${grandTotal}</td>
        </tr>

      </tbody>
   </>
  )
}

export default ShiftRows