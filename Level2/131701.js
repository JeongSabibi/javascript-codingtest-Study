/**
 * 연속 부분 수열 합의 개수
 */
function solution(elements) {
  let answer = [];
  let array = elements.concat(elements);

  for (let i = 1; i <= elements.length; i++) {
    for (let j = 0; j < elements.length; j++) {
      answer.push(array.slice(j, j + i).reduce((a, b) => a + b, 0));
    }
  }

  return new Set(answer).size;
}
