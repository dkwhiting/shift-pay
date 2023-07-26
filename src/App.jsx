import { useEffect, useState } from 'react'
import './App.css'
import ShiftRows from './ShiftRows'
import { Icon } from '@iconify/react'
import SettingsPopout from './SettingsPopout'

function App() {
  const [weekCount, setWeekCount] = useState([1])
  const [grandTotal, setGrandTotal] = useState(0)
  const [updater, setUpdater] = useState(true)
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
  
  useEffect(()=>{
    const allTotalBoxes = document.querySelectorAll('.weekly-total-box')
    const totalsArr = []
    Array.from(allTotalBoxes).map(box => totalsArr.push(+box.innerHTML.slice(1)))
    if (totalsArr.length > 1){
      const total = totalsArr.reduce((acc, currentValue) => acc + currentValue, 0)
      setGrandTotal('$' + total.toFixed(2))
    } else {
      setGrandTotal('$' + totalsArr[0].toFixed(2))
    }
  }, [weekCount, updater])

  return (
      <div id="main-container">
        <div id="settings-popout">
          <SettingsPopout payInfo={payInfo} setPayInfo={setPayInfo}/>
        </div>

        <div id="form-container">
        <table>
          <thead>
            <tr className="header-row">
              <th></th>
              <th>Sun</th>
              <th>Mon</th>
              <th>Tue</th>
              <th>Wed</th>
              <th>Thu</th>
              <th>Fri</th>
              <th>Sat</th>
              <th>Gross Pay</th>
            </tr>
          </thead>
          {weekCount.map((week) => (
            <ShiftRows key={week} weekCount={weekCount} setWeekCount={setWeekCount} week={week} payInfo={payInfo} updater={updater} setUpdater={setUpdater} />
          ))}
        </table>
        <div className="table-footer">
          <button className="add-week-button" onClick={()=>setWeekCount(weekCount => [...weekCount, weekCount.length + 1])}><Icon icon="gridicons:add" /> Add week</button>
          <div className="grand-total"><p>Total:   {grandTotal}</p></div>
        </div>
        </div>
      </div>
  )
}

export default App
