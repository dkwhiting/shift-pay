export const calcShiftPay = (differentials, shift, day) => {
  let sum = differentials?.shiftLength * differentials.basePay
  if (shift === 'day') {
    if (day === 'sunday' || day === 'saturday'){
      sum += (4.5 * differentials.WEE)
    } else {
      sum += (4.5 * differentials.WDE)
    }
  } else {
    if (day === 'sunday'){
      sum += (4.5 * differentials.WEE) + (8 * differentials.WDN)
    } else if (day === 'friday'){
      sum += (4.5 * differentials.WDE) + (8 * differentials.WEN)
    } else if (day === 'saturday'){
      sum += (4.5 * differentials.WEE) + (8 * differentials.WEN)
    } else {
      sum += (4.5 * differentials.WDE) + (8 * differentials.WDN)
    }
  }
  return sum.toFixed(2)
}