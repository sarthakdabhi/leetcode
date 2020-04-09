var findLHS = function(nums) {
    nums = nums.sort((a,b) => a - b);
    let max = 0;
    for (let i = 0; i < nums.length-1; i++) {
    	if (nums.lastIndexOf(nums[i]+1) != -1) {
    		let temp = nums.lastIndexOf(nums[i]+1) - i + 1;
    		if (max < temp) max = temp;
    	}
    }
    return max;
};
console.log(findLHS([1,3,2,2,5,2,3,7]));