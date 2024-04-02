/**
 * 과일 장수
 */
function solution(k, m, score) {
  let result = 0;
  let sortArr = score.sort((a, b) => b - a);

  for (let i = 0; i < Math.floor(score.length / m); i++) {
    let minScore = sortArr[i * m + (m - 1)];
    result += minScore * m;
  }

  return result;
}
