var isPalindrome = function(x) {
    let final = 0;
    let num = x;
    while (num > 0) {
		// Moves last digit from the back
        const lastDigit = num % 10;
		// We start adding it from the front
        final = final * 10 + lastDigit;
		// If don't use Math.floor, we would get an answer of Infinity since it will get smaller but never hit 0.
        num = Math.floor(num / 10);
    }
   
    return x === final;
};
