function twoSum(nums: number[], target: number): number[] {
  const map = new Map();

  for (let i = 0, length = nums.length; i < length; i++) {
    const value = target - nums[i];
    if (map.has(value)) {
      return [map.get(value), i];
    } else {
      map.set(nums[i], i);
    }
  }
  return [];
}

console.log(twoSum([1,2,3], 5))