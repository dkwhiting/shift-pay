export const calcShiftPay = (payInfo, shift, day) => {
  
  let sum = payInfo.shiftLength * payInfo.basePay
  if (shift === 'day') {
    if (day === 'sunday' || day === 'saturday'){
      sum += (4.5 * payInfo.differentials.WEE)
    } else {
      sum += (4.5 * payInfo.differentials.WDE)
    }
  } else {
    if (day === 'sunday'){
      sum += (4.5 * payInfo.differentials.WEE) + (8 * payInfo.differentials.WDN)
    } else if (day === 'friday'){
      sum += (4.5 * payInfo.differentials.WDE) + (8 * payInfo.differentials.WEN)
    } else if (day === 'saturday'){
      sum += (4.5 * payInfo.differentials.WEE) + (8 * payInfo.differentials.WEN)
    } else {
      sum += (4.5 * payInfo.differentials.WDE) + (8 * payInfo.differentials.WDN)
    }
  }
  return sum.toFixed(2)
}

export const calcOvertimePay = (payInfo, dayShifts, nightShifts) => {
  const numberOfShifts = dayShifts + nightShifts
  const totalHours = payInfo.shiftLength * numberOfShifts
  if (totalHours > 40) {
    const sum = (totalHours - 40) * ((payInfo.overtimeRate - 1) * payInfo.basePay)
    return sum
  }
  return 0 
}