const words = ["apple","app"];
const order = "worldabcefghijkmnpqstuvxyz";

var isAlienSorted = function(words, order) {
	let i = 0;	
	while (true) {
		let index = [];
		for (let j = 0; j < words.length-1; j++) {
			if (words[j].length > words[j+1].length) return false;
		}
		for (let j = 0; j < words.length; j++) {
			if (words[j][i] != undefined) {
				if (order.indexOf(words[j][i]) == -1) return false;
				else {
					if (index[index.length-1] > order.indexOf(words[j][i])) return false;
					else {
						index.push(order.indexOf(words[j][i]));
					}
				}
			}
		}
		let flag = false;
		for(let i = 0; i < index.length-1;i++) {
			if (index[i] < index[i+1]) flag = true;
		}
		if (flag) return true;
		i++;
	}
	return true;
};

console.log(isAlienSorted(words, order));
