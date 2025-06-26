// 풀이 1번 : 선형 탐색
function solution(n, bans) {
    const getOrder = (word) => {
        let order = 0;
        for (let i = 1; i < word.length; i++) {
            order += 26 ** i;
        }
        for (let i = 0; i < word.length; i++) {
            const char = word.charCodeAt(i) - 97;
            order += char * (26 ** (word.length - i - 1));
        }
        return order + 1;
    };

    const getNword = (n) => {
        let number = 0;
        let length = 1;
        while (true) {
            const addCount = 26 ** length;
            if (number + addCount >= n) break;
            number += addCount;
            length++;
        }
        let offset = (n - 1) - number;
        let chars = [];
        for (let i = 0; i < length; i++) {
            const char = offset % 26;
            chars.push(String.fromCharCode(char + 97));
            offset = Math.floor(offset / 26);
        }
        return chars.reverse().join('');
    };

    const banned = bans.map(getOrder).sort((a, b) => a - b);
    let answer = n;
    for (let i = 0; i < banned.length; i++) {
        if (answer < banned[i]) break;
        answer++;
    }
    return getNword(answer);
}

//풀이 2번 : 이진 탐색.
function solution(n, bans) {
    const getOrder = (word) => {
        let order = 0;
        for (let i = 1; i < word.length; i++) {
            order += 26 ** i;
        }
        for (let i = 0; i < word.length; i++) {
            const digit = word.charCodeAt(i) - 97;
            order += digit * (26 ** (word.length - i - 1));
        }
        return order + 1;
    };

    const getNthWord = (n) => {
        let length = 1;
        let total = 0;
        while (true) {
            const count = 26 ** length;
            if (total + count >= n) break;
            total += count;
            length++;
        }
        let offset = n - total - 1;
        let chars = [];
        for (let i = 0; i < length; i++) {
            const ch = offset % 26;
            chars.push(String.fromCharCode(ch + 97));
            offset = Math.floor(offset / 26);
        }
        return chars.reverse().join('');
    };

    const bansOrder = bans.map(getOrder).sort((a, b) => a - b);

    let left = n, right = n + 300000;
    let answer = null;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        // mid 이하의 금지 문자열 개수 세기
        let l = 0, r = bansOrder.length - 1, count = 0;
        while (l <= r) {
            const m = Math.floor((l + r) / 2);
            if (bansOrder[m] <= mid) {
                count = m + 1;
                l = m + 1;
            } else {
                r = m - 1;
            }
        }

        const realPos = mid - count;
        if (realPos < n) {
            left = mid + 1;
        } else {
            answer = mid;
            right = mid - 1;
        }
    }

    return getNthWord(answer);
}