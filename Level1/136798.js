/**
 * 기사단원의 무기
 */
function solution(number, limit, power) {
  let answer = [];

  for (let i = 1; i <= number; i++) {
    answer.push(divisor(i));
  }

  return answer.map((n) => (n > limit ? power : n)).reduce((i, j) => (i += j), 0);
}

function divisor(num) {
  let result = 0;

  for (let i = 1; i <= num / 2; i++) {
    if (!(num % i)) result++;
  }

  return ++result;
}
