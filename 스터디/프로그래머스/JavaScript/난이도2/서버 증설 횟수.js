function solution(players, m, k) {
    let answer = 0;
    
    let serverCnt = 0;
    
    let subArray = new Array(48).fill(0); // K 값이 최대 24이므로 배열 길이 Max 48.
    
    for(let i=0; i<24; i++) {
        //현 시간부로 반납되는 서버 반영.
        if(subArray[i] !==0) {
            serverCnt -= subArray[i];
        }
        
        //서버 증설이 필요한 경우.
        if((m*(serverCnt+1)) <= players[i]){
            const addCnt = Math.floor((players[i] - m * serverCnt) / m);
            answer += addCnt; //증설 횟수 증가.
            serverCnt += addCnt; //현 시간부로 증가되는 서버 반영.
            subArray[i+k] = addCnt; //K 시간 후 반납되는 서버 갯수 저장.
        }
        
    }//end for1.
    
    return answer;
}//end solution.