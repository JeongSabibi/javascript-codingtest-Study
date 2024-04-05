/**
 * 실패율
 */
function solution(N, stages) {
  let answer = [];
  let total = stages.length; // 사용자 수

  for (let i = 1; i <= N; i++) {
    let failRatio = 0; // 실패율
    let user = stages.filter((el) => el === i).length; // 해당 스테이지에 도달했지만 클리어하지 못한 사용자의 수

    if (user === 0) failRatio = 0; // 스테이지에 도달한 유저가 없는 경우
    else failRatio = user / total;

    total -= user;

    answer.push({
      index: i,
      failRatio: failRatio,
    });
  }

  return answer.sort((a, b) => b.failRatio - a.failRatio).map((x) => x.index);
}
