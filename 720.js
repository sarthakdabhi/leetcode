const words = ["a","banana","app","appl","ap","apply","apple"];
var longestWord = function(words) {	
    words = words.sort((a,b) => a.length - b.length).reverse();
    let r = [];
    for (let i = 0; i < words.length; i++) {
    	let word = words[i], count = 0;
    	for (let j = 0; j < word.length; j++) {
    		let temp = word.slice(0,j+1);
    		if (words.indexOf(temp) != -1) count++;
    	}
    	if (count == word.length) r.push(word);
    }
    if (r.length > 0) {
	    let longest = r.length > 0 ? r[0].length : '';
	    return r.sort().filter(v => v.length == longest)[0];
    }
    return '';
};
console.log(longestWord(words));