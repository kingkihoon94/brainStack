# React useRef() 훅 정리

## useRef()란?

`useRef()`는 React의 훅(Hook) 중 하나로, 컴포넌트 내에서 **변경 가능한 값을 저장**하고 **렌더링 없이 상태를 유지**할 수 있도록 해줍니다. 다음 두 가지 주요 용도로 사용됩니다:

1. **DOM 요소에 직접 접근하기 위해**
2. **렌더링 없이 값을 저장하고 관리하기 위해**

---

## 1. DOM 요소에 접근하기 위해 사용하는 경우

`useRef()`를 사용하면 특정 DOM 요소에 직접 접근할 수 있습니다. 이를 통해 예를 들어 input에 자동으로 포커스를 줄 수 있습니다.

```jsx
import { useEffect, useRef } from 'react';

function InputFocus() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus(); // 컴포넌트 마운트 시 input에 포커스를 맞춘다
  }, []);

  return <input ref={inputRef} />;
}
```

## 2. 렌더링 없이 값을 저장하기 위해 사용하는 경우

`useState()`와 달리, `useRef()`는 값이 바뀌어도 컴포넌트를 리렌더링하지 않습니다. 따라서 리렌더링이 필요 없는 값을 저장하는 데 적합합니다. 예를 들어, 타이머 ID를 저장할 수 있습니다.

```jsx
import { useRef } from 'react';

function Timer() {
  const timerRef = useRef(null);

  const startTimer = () => {
    timerRef.current = setInterval(() => {
      console.log('타이머 실행');
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(timerRef.current);
  };

  return (
    <div>
      <button onClick={startTimer}>시작</button>
      <button onClick={stopTimer}>정지</button>
    </div>
  );
}
```

---

## ✅ 요약

| 항목           | useRef()                |
| ------------ | ----------------------- |
| 리렌더링 발생 여부   | 값이 변경되어도 리렌더링 발생하지 않음   |
| DOM 접근 가능 여부 | 가능 (`ref.current`)      |
| 주요 용도        | DOM 직접 제어, 리렌더링 없이 값 저장 |
| 예시           | input 포커스, 타이머 ID 저장 등  |

`useRef()`는 컴포넌트가 리렌더링되지 않도록 하면서도 상태를 유지해야 할 때 유용한 도구입니다. 특히 DOM 직접 조작이나 외부 라이브러리 연동 시 매우 유용하게 사용됩니다.
