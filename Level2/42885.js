/**
 * 구명보트
 */
function solution(people, limit) {
  let cnt = 0;
  people.sort((a, b) => b - a);
  let left = 0;
  let right = people.length - 1;

  while (left <= right) {
    if (people[left] + people[right] <= limit) {
      left++;
      right--;
    } else {
      left++;
    }
    cnt++;
  }

  return cnt;
}

/*
시간 초과 발생 이유 -> 배열의 원소를 삭제하면서 반복문을 수행하기 때문

pop() 메서드는 시간 복잡도는 O(1)이기 때문에 배열의 크기에 관계없이 상수 시간이 소모됨
반면에 shift() 메서드는 맨 앞에 있는 값을 제거한 후에 기존에 배열에 있던 모든 요소를 한 자리씩 왼쪽으로 이동시켜야 하기 때문에 시간 복잡도가 O(n) => 효율적이지 않음!!

배열에서 직접적으로 요소를 제거하는 것이 아니라, 제거할 요소를 가리키는 인덱스를 추적하고, 제거 대상이 아닌 요소들만 새로운 배열에 복사하는 방법을 사용
*/

// function solution(people, limit) {
//     let cnt = 0;
//     people.sort((a, b) => b - a);

//     while (people.length !== 0) {
//         if (people.at(0) + people.at(-1) <= limit) {
//             people.shift();
//             people.pop();
//         }
//         else people.shift();
//         cnt++;
//     }

//     return cnt;
// }
