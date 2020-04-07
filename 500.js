var findWords = function(words) {
    let rows = [], r = [];
    rows.push('qwertyuiop'.split('').sort().join(''));
    rows.push('asdfghjkl'.split('').sort().join(''));
    rows.push('zxcvbnm'.split('').sort().join(''));

    for (let i = 0; i < rows.length; i++) {
    	for (let j = 0; j < words.length; j++) {
    		let count = words[j].length;
    		for (let k = 0; k < words[j].length; k++)
    			if (rows[i].indexOf(words[j][k].toLowerCase()) != -1) count--;
    		if (count == 0) r.push(words[j]);
    	}
    }

    return r;
};

console.log(findWords(["Hello", "Alaska", "Dad", "Peace"]));
