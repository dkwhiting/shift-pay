import React, {useEffect, useState} from 'react'
import Checkbox from './Checkbox'
import { calcOvertimePay, calcShiftPay } from './utils/calcs'
import { Icon } from '@iconify/react'

const ShiftRows = ({payInfo, weekCount, setWeekCount, week, updater, setUpdater}) => {
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
    setUpdater(!updater)
  }, [checkedDays, payInfo])
  
  useEffect(()=>{
    const baseSum = checkedNights.reduce((accumulator, currentValue) => {
      return +accumulator + +calcShiftPay(payInfo, 'night', currentValue)
    }, 0)
    const overtimeSum = calcOvertimePay(payInfo, checkedDays.length, checkedNights.length)
    setNightTotal((baseSum+overtimeSum).toFixed(2))
    setUpdater(!updater)
  }, [checkedNights, payInfo])
  
  useEffect(()=>{
    setGrandTotal((+dayTotal + +nightTotal).toFixed(2))
    setUpdater(!updater)
  }, [dayTotal, nightTotal])

  const daysList = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"]

  return (
    <>
      <tbody>
        <tr>
          <td className="week-number-box">Week {week}</td>
          {daysList.map((day, i) => {
            return (
            <Checkbox 
              key={`day-${i}`}
              shift="day" 
              day={day}
              week={week}
              checkedDays={checkedDays} 
              setCheckedDays={setCheckedDays} 
              checkedNights={checkedNights} 
              setCheckedNights={setCheckedNights} />
              )
          })}
          <td className="weekly-total-box">${grandTotal}</td>
        </tr>

          {week === weekCount.length && weekCount.length > 1 
            ? <button className="trash-button" onClick={()=> {
              if (weekCount.length > 1){
                setWeekCount(weekCount.filter(key => key !== weekCount.length))
              }
              }}>
                <Icon icon="iconamoon:trash-fill" />
              </button>
            : null }
      </tbody>
   </>
  )
}

export default ShiftRows