// 요청의 크기 1 : 단순 지게차 활용하여 컨테이너 꺼내기.
// 요청의 크기 2 : 크레인 사용하여 컨테이너 꺼내기.

// 크레인의 경우 해당 알파벳 컨테이너는 다 빼낼 수 있으니까 딱히 처리해줄 필요 없을 것 같고,
// 지게차의 경우 이녀석을 빼낼 수 있냐 없냐에 대한 판단 로직이 들어가야 할 것 같음.

const direction = [[-1,0], [1,0], [0,-1], [0,1]];

function findRoute(n, m, board) {
    const visited = Array.from({ length: n + 2 }, () => Array(m + 2).fill(false));
    const queue = [[0, 0]];
    visited[0][0] = true;

    while (queue.length) {
        const [x, y] = queue.shift();

        for (const [dx, dy] of direction) {
            const nx = x + dx;
            const ny = y + dy;

            if (nx >= 0 && nx <= n + 1 && ny >= 0 && ny <= m + 1) {
                if (!visited[nx][ny] && board[nx][ny] === 0) {
                    visited[nx][ny] = true;
                    queue.push([nx, ny]);
                }
            }
        }//end for1.
    }

    return visited;
}//end findRoute.

function solution(storage, requests) {
    const n = storage.length;
    const m = storage[0].length;
    
    const paddingArray = Array.from({ length: n+2 }, () => Array(m+2).fill(0));
    for(let i=0; i<n; i++) {
        for(let j=0; j<m; j++) {
            paddingArray[i+1][j+1] = storage[i][j];
        }//end for2.
    }//end for1.
    
    let answer = n * m;
    
    for(const request of requests) {
        if(request.length === 1) {
            const target = request;
            
            const canMoveArray = findRoute(n,m,paddingArray);
            
            for(let i=1; i<=n; i++) {
                for(let j=1; j<=m; j++) {
                    if(paddingArray[i][j] === target) {
                        let canLift = false;
                        
                        for(const [dx, dy] of direction) {
                            const nx = i + dx;
                            const ny = j + dy;
                            
                            if(canMoveArray[nx][ny]) {
                                canLift = true;
                                break;
                            }
                        }//end for4.  
                        
                        if(canLift) {
                            answer--;
                            paddingArray[i][j] = 0;
                        }
                    }
                }//end for3.
            }//end for2.  
        } else {
            const target = request[0];
            for(let i=1; i<=n; i++) {
                for(let j=1; j<=m; j++) {
                    if(paddingArray[i][j] === target) {
                        answer--;
                        paddingArray[i][j] = 0;
                    }
                }//end for3.
            }//end for2.
        }
    }//end for1.
    
    return answer;
}//end solution.