let nums1 = [4,9,5], nums2 = [];

var intersect = function(nums1, nums2) {
    let a = nums1, b = nums2;
    let r = [];
    if (nums1.length > nums2.length) {
    	a = nums2;
    	b = nums1;
    }

    for (let i = 0; i < a.length; i++) {
    	if (b.indexOf(a[i]) != -1) {
    		b[b.indexOf(a[i])] = null;
    		r.push(a[i]);
    	}
    }

    return r;
};
console.log(intersect(nums1, nums2));