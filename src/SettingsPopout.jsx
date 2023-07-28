import { Icon } from '@iconify/react'
import React, { useState } from 'react'

const SettingsPopout = ({payInfo, setPayInfo}) => {
  const [show, setShow] = useState(true)

  const handleChange = (e, ) => {
    console.log(e.target)
    setPayInfo({...payInfo, basePay: e.target.value})
  }

  return (
    <div style={!show ? {width: 40} : null} id="settings-popout">
      <div className="settings-button" onClick={() => setShow(!show)}>
        <Icon className="gear-icon" icon="iconamoon:settings-fill" />
        <Icon 
        className="x-icon"
         icon="oi:x" 
         style={show 
          ? {width: 15, height: 15, left: 28} 
          : {width: 0, height: 0, bottom: 8}}
         />
      </div>
      <form style={!show ? {left: -200} : null}>
        <div 
          className="form-section">
          <label htmlFor="base-pay">Base Pay</label>
          <input
            id="base-pay"
            name="base-pay"
            type="number"
            value={payInfo.basePay}
            onChange={(e) => setPayInfo({...payInfo, basePay: e.target.value})} />
        </div>
        <div className="form-section">
          <label htmlFor="overtime-rate">Overtime Rate</label>
          <input
            id="overtime-rate"
            name="overtime-rate"
            type="number"
            value={payInfo.overtimeRate}
            onChange={(e) => setPayInfo({...payInfo, overtimeRate: e.target.value})} />
        </div>
        <div className="form-section">
          <label htmlFor="shift-length">Shift Length</label>
          <input
            id="shift-length"
            name="shift-length"
            type="number"
            value={payInfo.shiftLength}
            onChange={(e) => setPayInfo({...payInfo, shiftLength: e.target.value})} />
        </div>
      </form>
    </div>
  )
}

export default SettingsPopout