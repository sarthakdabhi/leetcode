var getHint = function(secret, guess) {
	let A = 0, B = 0, r = [];
	secret = secret.split('');
	guess = guess.split('');
    for (let i = 0; i < guess.length; i++) {
    	if (secret[i] == guess[i]) {
    		A++;
    		secret[i] = null;
    		guess[i] = null; 
    	}
    }
    for (let i = 0; i < guess.length; i++) {
    	if (secret[i] != guess[i] && secret.indexOf(guess[i]) != -1) {
    		B++;
    		secret[secret.indexOf(guess[i])] = null; 
    	}
    }
    return A + 'A' + B + 'B';
};
console.log(getHint('1123', '0111'));
