/* 
https://www.pramp.com/challenge/8noLWxLP6JUZJ2bA2rnx
Convert every letter to its ASCII value. Add 1 to the first letter, and then for every letter from the second one to the last one, add the value of the previous letter. Subtract 26 from every letter until it is in the range of lowercase letters a-z in ASCII. Convert the values back to letters.

For instance, to encrypt the word “crime”
de
Decrypted message:	c	r	i	m	e
Step 1:	99	114	105	109	101
Step 2:	100	214	319	428	529
Step 3:	100	110	111	116	113
Encrypted message:	d	n	o	t	q */
function decrypt(word) {
    let enc = '';
     let prevStepToSubtractBy = 1;
     for(let i=0;i<word.length;i++){
       let enc_letter = word.charCodeAt(i);
       let dec_letter = enc_letter-prevStepToSubtractBy;
       while(dec_letter<97){
         dec_letter+=26;
       }
        enc = enc + String.fromCharCode(dec_letter);
       prevStepToSubtractBy += dec_letter
     }
    return enc;
  }


  