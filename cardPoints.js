//  sliding window
 // [1,2,3,4,5,6,1]
//  - - -

// [1,2,3,4,5,6,1]
//  - -         -
 
// [1,2,3,4,5,6,1]
//  -         - -
    
// [1,2,3,4,5,6,1]
//          - - -
var maxScore = function(cardPoints, k) {
    let left = 0; 
    let right = 0; 
    
    for(let i = 0; i < k; i++){
        left = left + cardPoints[i];
    }
    let maxScore = left;
    let end = cardPoints.length-1;
    for(let i = k - 1; i >= 0; i--){
        left = left - cardPoints[i]
        right = right + cardPoints[end]
        maxScore = Math.max(maxScore, left + right);
        end--
    }
    return maxScore
};