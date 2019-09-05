export function RepSum(indicatorMonthlyValues, monthIndex) {
  let sum = 0;
  const monthsCount = indicatorMonthlyValues.length;
  for (let index = 0; index < monthsCount; index++) {
    sum += indicatorMonthlyValues[index].rep;
  }
  return sum;
}
export function VerSum(indicatorMonthlyValues, monthIndex) {
  let sum = 0;
  const monthsCount = indicatorMonthlyValues.length;
  for (let index = 0; index < monthsCount; index++) {
    sum += indicatorMonthlyValues[index].ver;
  }
  return sum;
}
export function difference(totalRep, totalVer) {
  return Math.abs(totalRep - totalVer);
}
export function provisionalAmountSum(formData, totalVer, indicatorIndex) {
  return formData[indicatorIndex].unitFee * totalVer;
}
