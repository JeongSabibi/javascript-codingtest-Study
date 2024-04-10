/**
 * 문자열 나누기
 */
function solution(s) {
  let start = ''; // 첫 글자
  let answer = 0,
    count1 = 0,
    count2 = 0;

  for (let c of s) {
    if (!start) start = c; // start가 공백이면 첫 문자를 넣어줌

    if (start === c) count1++; // 첫 문자와 들어온 c가 같다면 count1를 증가
    else count2++; // 첫 문자와 다르다면 count2를 증가

    if (count1 === count2) {
      answer++, (count1 = 0), (count2 = 0), (start = '');
    }
  }

  if (start) answer++; // start가 남아있는 경우 남은 문자가 있다는 뜻 -> answer 1 증가

  return answer;
}
