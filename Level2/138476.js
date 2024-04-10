/**
 * 귤 고르기
 */
function solution(k, tangerine) {
  let arr = [];
  let obj = {};
  let sum = 0,
    count = 0;

  // { 귤 크기 : 갯수 }
  tangerine.forEach((el, idx) => {
    el in obj ? obj[el]++ : (obj[el] = 1);
  });

  // 갯수별로 정렬
  arr = Object.values(obj).sort((a, b) => b - a);

  arr.forEach((el, idx) => {
    if (sum < k) {
      sum += el;
      count++;
    }
  });

  return count;
}
