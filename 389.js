const s = "abcd";
const t = "abcde";

var findTheDifference = function(s, t) {
	let S = s.split(''), T = t.split('');
	for (let i = 0; i < T.length; i++) {
		if (S.indexOf(T[i]) == -1) return T[i];
		else {
			S[S.indexOf(T[i])] = -1;
			T[i] = -1;
		}
	}
};
console.log(findTheDifference(s,t));