function countIntersection(arr1, arr2) {
  const set1 = new Set(arr1);
  return arr2.filter(item => set1.has(item)).length;
}

function solution(n, q, ans) {
    let answer = 0;
    
    function getComb(n, k) {
        const arr = Array.from({ length: n }, (_, i) => i + 1);

        const backtrack = (start, path) => {
            if (path.length === k) {
                let canAnswer = true;
                for(let i=0; i<q.length; i++) {
                    if(countIntersection(path, q[i]) !== ans[i]) {
                        canAnswer = false;
                        break;
                    } 
                }
                if(canAnswer) {
                    answer++;
                }
                return;
            }

            for (let i = start; i < arr.length; i++) {
              path.push(arr[i]);
              backtrack(i + 1, path);
              path.pop();
            }
        };
        backtrack(0, []);
    }//end getCombinationsFromN.
    
    getComb(n,5);
    
    return answer;
}//end solution.