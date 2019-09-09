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
export function error(discrepancy, totalRep) {
  if (totalRep === 0) {
    return 100;
  } else {
    return parseFloat((discrepancy / totalRep).toFixed(1));
  }
}
export function provisionalAmountSum(formData, totalVer, indicatorIndex) {
  return formData[indicatorIndex].unitFee * totalVer;
}
export function lossCalculator(provisionalAmount, errorRate, myerror) {
  if (error > errorRate) {
    const excessError = myerror - errorRate;
    return parseFloat(((provisionalAmount * excessError) / 100).toFixed(2));
  } else {
    return 0;
  }
}
export function actualAmount(provisionalAmount, loss) {
  return provisionalAmount - loss;
}
export function totalAmount(actualAmounts) {
  const indicatorCounts = actualAmounts.length;
  let sum = 0;
  for (
    let indicatorIndex = 0;
    indicatorIndex < indicatorCounts;
    indicatorIndex++
  ) {
    sum += actualAmounts[indicatorIndex];
  }
  return sum;
}
