/**
 * 로또의 최고 순위와 최저 순위
 */
function solution(lottos, win_nums) {
  let findLottos = [];
  let zeroCount = 0;
  let lottoRank = { 6: 1, 5: 2, 4: 3, 3: 4, 2: 5, 1: 6, 0: 6 };

  findLottos = lottos.filter((x) => win_nums.includes(x));
  lottos.forEach((x) => {
    if (x === 0) zeroCount++;
  });

  return [lottoRank[findLottos.length + zeroCount], lottoRank[findLottos.length]];
}
