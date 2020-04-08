const A = "apple apple";
const B = "banana";

var uncommonFromSentences = function(A, B) {
	A = A.split(' ').concat(B.split(' '));

	for (let i = 0; i < A.length; i++) {
		if (A.slice(i+1, A.length).indexOf(A[i]) != -1) {
			let temp = A[i];
			A = A.filter(i => i != temp);
			i--; 
		}
	}

	return A;
};

console.log(uncommonFromSentences(A,B));
