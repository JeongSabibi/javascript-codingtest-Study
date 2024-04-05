/**
 * [1차] 다트 게임
 */
function solution(dartResult) {
  let score = []; // 점수 배열
  let index = -1;
  let arr = dartResult.replaceAll(10, 'J').split('');
  console.log(arr);

  for (let i = 0; i < arr.length; i++) {
    let temp = arr[i] === 'J' ? '10' : arr[i];

    if (!isNaN(temp)) {
      index++;
      score[index] = +temp;
    } else {
      switch (temp) {
        case 'S':
          break;
        case 'D':
          score[index] = score[index] ** 2;
          break;
        case 'T':
          score[index] = score[index] ** 3;
          break;
        case '*':
          if (index > 0) {
            score[index] *= 2;
            score[index - 1] *= 2;
          } else {
            score[index] *= 2;
          }
          break;
        case '#':
          score[index] *= -1;
          break;
      }
    }
  }

  return score.reduce((s, c) => s + c, 0);
}
