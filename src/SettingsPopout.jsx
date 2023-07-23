import React, { useState } from 'react'

const SettingsPopout = ({payInfo, setPayInfo}) => {
  const [show, setShow] = useState(false)

  const handleChange = (e, ) => {
    console.log(e.target)
    setPayInfo({...payInfo, basePay: e.target.value})
  }

  return (
    <div>
      <form>
        <div className="form-section">
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