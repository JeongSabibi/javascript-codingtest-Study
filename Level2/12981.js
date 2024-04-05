/**
 * 영어 끝말잇기
 */
function solution(n, words) {
  for (let i = 1; i < words.length; i++) {
    let num = (i % n) + 1;
    let turn = Math.ceil((i + 1) / n);

    if (
      words.indexOf(words[i]) !== i ||
      words[i - 1].charAt(words[i - 1].length - 1) != words[i][0]
    ) {
      return [num, turn];
    }
  }

  return [0, 0];
}
