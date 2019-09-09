export function setRepString(monthsCount) {
  if (monthsCount === 1) {
    return 'Rep. #1';
  }
  if (monthsCount === 2) {
    return 'Rep. #1 + Rep. #2';
  }
  if (monthsCount > 2) {
    return 'Rep. #1 + Rep. #2 + ...';
  }
}
export function setVerString(monthsCount) {
  if (monthsCount === 1) {
    return 'Ver. #1';
  }
  if (monthsCount === 2) {
    return 'Ver. #1 + Ver. #2';
  }
  if (monthsCount > 2) {
    return 'Ver. #1 + Ver. #2 + ...';
  }
}
