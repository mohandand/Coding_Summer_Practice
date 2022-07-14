//https://www.pramp.com/challenge/2WBx3Axln1t7JQ2jQq96

function findBusiestPeriod(data) {
    let currVistiors = 0;
    let maxVisitors = 0;
    let busyTime = 0;
  
    for(let i=0;i<data.length;i++){
        let time = data[i][0] ;
        let visitors = data[i][1];
        let status = data[i][2]

        if(status === 1){
            currVistiors += visitors;
        }
        else{
            currVistiors -=visitors;
        }

        if(i<data.length-1 && time == data[i+1][0]){
            continue;
        }

        if(maxVisitors<currVistiors){
            maxVisitors = currVistiors;
            busyTime = time;
        }

    }
return busyTime;
}