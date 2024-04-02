/**
 * 폰켓몬
 */
function solution(nums) {
  const count = nums.length / 2;
  const numSet = new Set(nums);

  return numSet.size >= count ? count : numSet.size;
}
