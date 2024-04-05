/**
 * N개의 최소공배수
 */
function greatest(a, b) {
  // a와 b의 최대공약수를 구함 (유클리드 호제법 사용해서 재귀적으로 최대공약수를 계산)
  if (b === 0) return a;

  return greatest(b, a % b);
}

function least(a, b) {
  // a와 b의 최소공배수를 구함
  return (a * b) / greatest(a, b);
}

function solution(arr) {
  while (arr.length != 1) {
    arr.push(least(arr.pop(), arr.pop()));
  }

  return arr[0];
}
