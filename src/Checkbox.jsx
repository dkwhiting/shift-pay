import React, {useState} from 'react'

const Checkbox = ({shift, day}) => {
  const [checked, setChecked] = useState(false)

  const handleChange = () => {
    setChecked(!checked)
  }

  return (
    <input type="checkbox" checked={checked} onChange={handleChange}/>
  )
}

export default Checkbox