function solution(info, n, m) {
    const length = info.length;

    // dp[i][a][b] = i개의 물건까지 처리했을 때, A의 누적 흔적이 a, B의 누적 흔적이 b인 상태
    const dp = Array.from({ length: length + 1 }, () =>
        Array.from({ length: n }, () => Array(m).fill(false))
    );

    // 초기 상태: 물건 0개 처리, A 흔적 0, B 흔적 0
    dp[0][0][0] = true;

    for (let i = 1; i <= length; i++) {
        const [addA, addB] = info[i - 1];

        for (let a = 0; a < n; a++) {
            for (let b = 0; b < m; b++) {
                if (!dp[i - 1][a][b]) continue;

                // 이번 물건을 A가 훔칠 경우
                const nextA = a + addA;
                if (nextA < n) {
                    dp[i][nextA][b] = true;
                }

                // 이번 물건을 B가 훔칠 경우
                const nextB = b + addB;
                if (nextB < m) {
                    dp[i][a][nextB] = true;
                }
            }
        }
    }

    // 가능한 최솟값 찾기
    for (let a = 0; a < n; a++) {
        for (let b = 0; b < m; b++) {
            if (dp[length][a][b]) {
                return a; // A의 흔적 최소값
            }
        }
    }

    return -1; // 불가능한 경우
}