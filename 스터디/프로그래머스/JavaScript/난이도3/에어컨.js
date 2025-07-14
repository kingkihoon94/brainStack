function solution(temperature, t1, t2, a, b, onboard) {
    const length = onboard.length;
    let dpArray = Array.from({length: length}, () => Array(51).fill(Infinity));
    
    temperature = temperature > t2 ? t1 - (temperature - t2) : temperature;
    t1 -= temperature;
    t2 -= temperature;
    temperature = 0;
    dpArray[0][0] = 0;
    
    for(let i=1; i<length; i++) {
        const status = onboard[i];
        for(let j=0; j<=50; j++) {
            if(status && (j < t1 || j > t2)) continue;
            
            let minCost = Infinity;
            
            if(j > 0) minCost = Math.min(minCost, dpArray[i-1][j-1] + a);
            if(j < 50) minCost = Math.min(minCost, dpArray[i-1][j+1]);
            
            if(j===0) {
                minCost = Math.min(minCost, dpArray[i-1][j]);
            } else {
                minCost = Math.min(minCost, dpArray[i-1][j] + b);
            }
            
            dpArray[i][j] = minCost;
            
        }//end for2.
    }//end for1.
    
    return Math.min(...dpArray[length-1]);
}//end solution.