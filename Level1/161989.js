/**
 * 덧칠하기
 */
function solution(n, m, section) {
  let count = 0;
  let war = new Array(n).fill(true);

  section.forEach((el, idx) => {
    war[el - 1] = false;
  });

  section.forEach((el, idx) => {
    if (war[el - 1] === false) {
      for (let i = 0; i < m; i++) {
        war[el - 1 + i] = true;
      }
      count++;
    }
  });

  return count;
}
