import React, {useState} from 'react'
import Checkbox from './Checkbox'

const ShiftRows = () => {
  const [dayTotal, setDayTotal] = useState(0)
  const [nightTotal, setNightTotal] = useState(0)

  return (
    <>
      <tr>
        <td>Day</td>
        <td><Checkbox shift="day" day="sunday" setTotal={setDayTotal}/></td>
        <td><Checkbox shift="day" day="monday" setTotal={setDayTotal}/></td>
        <td><Checkbox shift="day" day="tuesday" setTotal={setDayTotal}/></td>
        <td><Checkbox shift="day" day="wednesday" setTotal={setDayTotal}/></td>
        <td><Checkbox shift="day" day="thursday" setTotal={setDayTotal}/></td>
        <td><Checkbox shift="day" day="friday" setTotal={setDayTotal}/></td>
        <td><Checkbox shift="day" day="saturday" setTotal={setDayTotal}/></td>
        <td>${dayTotal}</td>
      </tr>
      <tr>
        <td>Night</td>
        <td><Checkbox shift="night" day="sunday" setTotal={setNightTotal}/></td>
        <td><Checkbox shift="night" day="monday" setTotal={setNightTotal}/></td>
        <td><Checkbox shift="night" day="tuesday" setTotal={setNightTotal}/></td>
        <td><Checkbox shift="night" day="wednesday" setTotal={setNightTotal}/></td>
        <td><Checkbox shift="night" day="thursday" setTotal={setNightTotal}/></td>
        <td><Checkbox shift="night" day="friday" setTotal={setNightTotal}/></td>
        <td><Checkbox shift="night" day="saturday" setTotal={setNightTotal}/></td>
        <td>${nightTotal}</td>
      </tr>
   </>
  )
}

export default ShiftRows