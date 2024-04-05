/**
 * 옹알이(2)
 */
function solution(babbling) {
  let count = 0;
  let word = ['aya', 'ye', 'woo', 'ma'];

  for (let i = 0; i < babbling.length; i++) {
    for (let j = 0; j < word.length; j++) {
      // 연속해서 같은 발음이 있으면 발음 못함
      if (babbling[i].includes(word[j].repeat(2))) break;
      // word의 단어이거나 단어들의 중복되지 않은 조합은 발음할 수 있음
      babbling[i] = babbling[i].split(word[j]).join('#');
    }
  }

  babbling.forEach((x) => {
    x = x.replaceAll('#', '');
    if (x === '') count++;
  });

  return count;
}
