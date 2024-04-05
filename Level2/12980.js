/**
 * 점프와 순간 이동
 */
function solution(n) {
  let ans = 0;

  while (n > 0) {
    if (n % 2 === 0) n /= 2;
    else {
      ans++;
      n--;
    }
  }

  return ans;
}
