var containsDuplicate = function(nums) {
    return nums.length != nums.filter((v,i) => nums.slice(i+1, nums.length).indexOf(v) == -1).length;
};
console.log(containsDuplicate([1,2,3,4,1]));