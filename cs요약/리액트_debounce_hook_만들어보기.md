# React에서 useDebounce 훅 만들기

React에서 입력값을 처리할 때 너무 자주 렌더링되거나 API 요청이 과도하게 발생하지 않도록 하기 위해 **디바운스(Debounce)** 처리가 필요할 수 있습니다.

이 문서에서는 `useDebounce`라는 커스텀 훅을 만들어 사용하는 방법을 설명합니다.

---

## ✅ useDebounce 훅 구현

```tsx
import { useEffect, useState } from 'react';

function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

export default useDebounce;
```

- `value`: 디바운스 처리할 원본 값
- `delay`: 지연 시간(ms)
- `debouncedValue`: 일정 시간 후 반영된 값

---

## ✅ 사용 예시: 텍스트 입력에서 디바운스 적용

```tsx
import React, { useState } from 'react';
import useDebounce from './useDebounce';

const DebouncedTextArea = () => {
  const [input, setInput] = useState('');
  const debouncedInput = useDebounce(input, 500); // 500ms 디바운스

  return (
    <div>
      <textarea
        placeholder="텍스트를 입력하세요"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        rows={4}
        cols={50}
      />
      <p><strong>디바운스 적용 후 값:</strong> {debouncedInput}</p>
    </div>
  );
};

export default DebouncedTextArea;
```

---

## 🔍 작동 방식

- 사용자의 입력이 즉각적으로 `input` 상태값을 업데이트함
- 하지만 `debouncedInput`은 입력이 **500ms 이상 멈췄을 때**만 업데이트됨
- 검색창 자동완성, 미리보기, API 호출 등에 적합함

---

## 💡 확장 아이디어

- `immediate: boolean` 옵션 추가 → 처음 입력 시 바로 반영되도록 제어 가능
- `leading`, `trailing` 옵션을 추가하여 lodash처럼 동작 방식 커스터마이징

---

> 디바운스를 훅으로 만들어두면 **재사용성**이 높고 코드의 **가독성**도 향상됩니다.
