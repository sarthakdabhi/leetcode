var arrayPairSum = function(nums) {
	if (nums.length == 1) return nums[0];
    let n = nums.length / 2, sum = 0;
    nums = nums.sort((a,b) => a-b);
    for (let i = 0; i < n; i++) {
    	sum += nums.slice(i*2, (i*2) + 2)[0];
    }
    return sum;
};
console.log(arrayPairSum([1,1]));