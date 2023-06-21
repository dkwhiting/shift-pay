import { useState } from 'react'
import './App.css'
import ShiftRows from './ShiftRows'

function App() {
  const [weekCount, setWeekCount] = useState([1])

  return (
      <div id="selector-box">
        <table>
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
          {weekCount.map((week) => (
            <ShiftRows key={week}/>
          ))}
        </table>
      </div>
  )
}

export default App
