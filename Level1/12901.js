/**
 * 2016년
 */
function solution(a, b) {
  const week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const date1 = new Date('2016-0' + a + '-' + b);

  return week[date1.getDay()];
}
