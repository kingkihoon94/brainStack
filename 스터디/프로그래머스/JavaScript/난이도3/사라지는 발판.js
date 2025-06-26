const direction = [[-1,0],[1,0],[0,-1],[0,1]];

function solution(board, aloc, bloc) {
    
    const row = board.length;
    const col = board[0].length;
    
    function play(myloc, targetloc) {
        
        const [x,y] = myloc;
        
        if(board[x][y] === 0) return {canWin: false, count: 0}; //내 차례일때 이미 내 블록 0 된 경우.
        
        let myWin = false;
        let minCount = 10000; // 크게 잡기.
        let maxCount = 0;
        
        for(let k=0; k<4; k++) {
            const nx = x + direction[k][0];
            const ny = y + direction[k][1];
            
            if(nx <0 || nx >= row || ny < 0 || ny >= col || board[nx][ny] === 0) continue;
            
            board[x][y] = 0;
            
            const result = play(targetloc, [nx,ny]);
            const canWin = !result.canWin;
            
            if(canWin) {
                myWin = true;
                minCount = Math.min(minCount, result.count + 1);
            } else {
                maxCount = Math.max(maxCount, result.count + 1);
            }
            
            board[x][y] = 1;
        
        }//end for1.
        
        
        return {canWin: myWin, count: myWin ? minCount : maxCount};
    }//end play.
    
    return play(aloc, bloc).count;
}//end solution.