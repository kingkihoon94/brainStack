# ❗ 왜 `useState`를 조건문 안에서 사용하면 안 될까요?

리액트(React)에서는 `useState`를 조건문 안에서 사용하는 것을 **엄격히 금지**하고 있습니다. 그 이유는 리액트가 **state를 관리하는 방식**과 깊은 관련이 있습니다.

## 📌 React의 상태 관리 방식

리액트는 컴포넌트 함수가 호출될 때 내부에서 실행되는 **Hook의 호출 순서**를 기반으로 state를 추적합니다.

즉, 아래와 같이 선언된 상태들은:

```jsx
function MyComponent() {
  const [a, setA] = useState(0); // 1번째 호출
  const [b, setB] = useState(0); // 2번째 호출
  ...
}
```

렌더링마다 `useState`의 **호출 순서**를 기준으로 각각의 상태를 일치시켜 관리합니다.

---

## ⚠️ 조건문 안에서 `useState`를 호출하면?

예시:

```jsx
function Example({ shouldUseState }) {
  if (shouldUseState) {
    const [count, setCount] = useState(0);
  }

  return <div>Example Component</div>;
}
```

이 경우 `shouldUseState`가 `true`일 때만 `useState`가 호출됩니다. 그러나 `false`일 경우에는 호출되지 않게 됩니다. 이렇게 되면 Hook 호출 순서가 변경되어 **React의 내부 상태 배열이 꼬이게 됩니다.**

### 📉 결과적으로...

- 렌더링마다 Hook의 순서가 달라지면 React가 어떤 `useState`가 어떤 state를 나타내는지 알 수 없게 됩니다.
- 이로 인해 **예기치 않은 버그**나 **경고**, **오동작**이 발생할 수 있습니다.

---

## ✅ 해결 방법

항상 `useState`, `useEffect`, `useRef` 같은 React Hook은 **컴포넌트 최상단에서 호출**해야 합니다:

```jsx
function Example({ shouldUseState }) {
  const [count, setCount] = useState(0); // 항상 호출

  if (!shouldUseState) {
    return <div>Disabled</div>;
  }

  return <div>Count is {count}</div>;
}
```

이렇게 하면 Hook의 순서가 **렌더링과 무관하게 항상 동일**하게 유지되므로 React는 안정적으로 상태를 관리할 수 있습니다.

---

## 🧠 기억하세요!

- ✅ **항상 같은 순서로 Hook을 호출해야 한다**
- ❌ **조건문, 반복문, 함수 내부에서는 Hook을 호출하지 말자**

> **React 공식 문서 원칙**:  
> Don't call Hooks inside loops, conditions, or nested functions.
