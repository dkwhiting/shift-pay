import { useEffect, useState } from 'react'
import './App.css'
import ShiftRows from './ShiftRows'

function App() {
  const [weekCount, setWeekCount] = useState([1])
  const [shiftLength, setShiftLength] = useState(12.5)
  const [basePay, setBasePay] = useState(37.41)
  const [weekdayEveDiff, setWeekdayEveDiff] = useState(3.5)
  const [weekdayNightDiff, setWeekdayNightDiff] = useState(5.4)
  const [weekendDayDiff, setWeekendDayDiff] = useState(4.75)
  const [weekendEveDiff, setWeekendEveDiff] = useState(6.25)
  const [weekendNightDiff, setWeekendNightDiff] = useState(7.25)
  const [differentials, setDifferentials] = useState({
    basePay: basePay,
    shiftLength: shiftLength,
    WDE: weekdayEveDiff,
    WDN: weekdayNightDiff,
    WED: weekendDayDiff,
    WEE: weekendEveDiff,
    WEN: weekendNightDiff
  })

  useEffect(()=>{
    setDifferentials({
      basePay: basePay,
      shiftLength: shiftLength,
      WDE: weekdayEveDiff,
      WDN: weekdayNightDiff,
      WED: weekendDayDiff,
      WEE: weekendEveDiff,
      WEN: weekendNightDiff
    })
  }, [
    basePay, 
    shiftLength,
    weekdayEveDiff, 
    weekdayNightDiff, 
    weekendDayDiff, 
    weekendEveDiff, 
    weekendNightDiff
  ])

  return (
      <div id="selector-box">
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Sunday</th>
              <th>Monday</th>
              <th>Tuesday</th>
              <th>Wednesday</th>
              <th>Thursday</th>
              <th>Friday</th>
              <th>Saturday</th>
            </tr>
          </thead>
          {weekCount.map((week) => (
            <ShiftRows key={week} differentials={differentials} />
          ))}
        </table>
      </div>
  )
}

export default App
