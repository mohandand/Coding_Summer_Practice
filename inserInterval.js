/* 
approach
[[1,4][6,8][9,10]] [3,6]

*/
var insert = function(intervals, newInterval) {
    const result = [];
    
    for (let i = 0; i < intervals.length; i++) {
        let interval = intervals[i];
        
        // If overlaps
        //Check if end value is less than the start value of current interval 
        if (interval[0]<=newInterval[1] && interval[1]>=newInterval[0]) {
            newInterval = [Math.min(interval[0], newInterval[0]), Math.max(interval[1], newInterval[1])];
            continue;
        }
        
        // If lower
        if (interval[0] > newInterval[1]) {
            result.push(newInterval, ...intervals.slice(i));
            return result;
        }
        
        result.push(interval);
    }
    
    result.push(newInterval);
    return result;
};

console.log(insert([[1,3],[6,9]],[10,11]))