function solution(nodes, edges) {
    const map = new Map();
    
    for(const node of nodes) {
        map.set(node, []);
    }//end for1.
    
    for(const [v1,v2] of edges) {
        map.get(v1).push(v2);
        map.get(v2).push(v1);
    }//end for2.
    
    let visitedSet = new Set();
    
    let answer = [0,0];
    
    for(const node of nodes) {
        if(visitedSet.has(node)) continue;
            
        const nodeArray = [];
        const queue = [];
        let treeType = [0,0];
        
        queue.push(node);
        visitedSet.add(node);
            
        while(queue.length !== 0) {
            const cNode = queue.shift();
            const cNodeEdgeCnt = map.get(cNode).length;
            
            if(cNode % 2 === cNodeEdgeCnt % 2) {
                treeType[0]++;
            } else {
                treeType[1]++;
            }
            
            for(const nNode of map.get(cNode)) {
                if(visitedSet.has(nNode)) continue;
                visitedSet.add(nNode);
                queue.push(nNode);
            }//end for2.
        }//end while. 
        
        if(treeType[0] === 1) answer[0]++;
        if(treeType[1] === 1) answer[1]++;
    }//end for1.
    
    return answer;
}//end solution.