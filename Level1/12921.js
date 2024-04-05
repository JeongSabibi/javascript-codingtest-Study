/**
 * 소수 찾기
 */
function solution(n) {
  let arr = [];
  // 1은 소수 X, 2부터 소수가 될 수 O
  // 2부터 구하고자 하는 값까지의 배열을 생성
  for (let i = 2; i <= n; i++) {
    arr[i] = i;
  }
  // 2부터 시작해서 해당 숫자의 배수들을 모두 지운다.
  // 이미 지워진 숫자는 건너뛴다.
  for (let i = 2; i <= n; i++) {
    for (let j = i + i; j <= n; j += i) {
      if (arr[j] === 0) {
        continue;
      }
      arr[j] = 0;
    }
  }
  return arr.filter((item) => item !== 0).length;
}
