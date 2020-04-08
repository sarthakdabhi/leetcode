const words = ["word","world","row"];
const order = "worldabcefghijkmnpqstuvxyz";

var isAlienSorted = function(words, order) {
	for (let i = 0; i < words.length-1; i++) {
		let s1 = words[i], s2 = words[i+1];
		let l1= 0, l2 = 0;

		while (l1 < s1.length || l2 < s2.length) {
			if (l1 == s1.length || l2 == s2.length) return false;
			i1 = order.indexOf(s1[l1]);
			i2 = order.indexOf(s2[l2]);

			if (i1 == i2) {
				l1++;
				l2++;
			}
			else if (i1 < i2) break;
			else return false;
		}
	}
	return true;
};

console.log(isAlienSorted(words, order));
