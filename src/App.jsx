import { useEffect, useState } from 'react'
import './App.css'
import ShiftRows from './ShiftRows'
import PayForm from './PayForm'

function App() {
  const [weekCount, setWeekCount] = useState([1])
  const [payInfo, setPayInfo] = useState({
    basePay: 38.9,
    overtimeRate: 1.5,
    shiftLength: 12.5,
    differentials: {
      WDE: 3.5,
      WDN: 5.4,
      WED: 4.75,
      WEE: 6.25,
      WEN: 7.25
    }
  })

  return (
      <div id="selector-box">
        <PayForm payInfo={payInfo} setPayInfo={setPayInfo}/>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Sun</th>
              <th>Mon</th>
              <th>Tue</th>
              <th>Wed</th>
              <th>Thu</th>
              <th>Fri</th>
              <th>Sat</th>
            </tr>
          </thead>
          {weekCount.map((week) => (
            <ShiftRows key={week} payInfo={payInfo} />
          ))}
        </table>
        <button onClick={()=>setWeekCount(weekCount => [...weekCount, weekCount.length + 1])}>+</button>
        <button onClick={()=>setWeekCount(weekCount.filter(key => key !== weekCount.length))}>-</button>
      </div>
  )
}

export default App
