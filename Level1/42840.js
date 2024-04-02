/**
 * 모의고사
 */
function solution(answers) {
  var count = [0, 0, 0]; // a, b, c 점수
  var answer = [];
  let a = [1, 2, 3, 4, 5]; // 5개씩 반복
  let b = [2, 1, 2, 3, 2, 4, 2, 5]; // 8개씩 반복
  let c = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]; // 10개씩 반복

  for (let i = 0; i < answers.length; i++) {
    // a, b, c 점수 세기
    if (answers[i] == a[i % 5]) count[0]++;
    if (answers[i] == b[i % 8]) count[1]++;
    if (answers[i] == c[i % 10]) count[2]++;
  }

  if (count[0] == Math.max(...count)) answer.push(1);
  if (count[1] == Math.max(...count)) answer.push(2);
  if (count[2] == Math.max(...count)) answer.push(3);

  return answer;
}
