var longestPalindrome = function(s) {
    let o = new Object();
    for (let i = 0; i < s.length; i++) {
    	if (o[s[i]] == undefined) o[s[i]] = 1;
    	else o[s[i]]++;
    }
    let keys = Object.keys(o);
    let count = 0;
    let isOddExists = false;
    for (let i = 0; i < keys.length; i++) {
    	if (o[keys[i]] % 2 == 0) count += o[keys[i]];
    	else {
    		count += o[keys[i]] - (o[keys[i]]%2);
    		isOddExists = true;
    	}
    }
    return  (isOddExists) ? count + 1 : count;
};
console.log(longestPalindrome('ccc'));
