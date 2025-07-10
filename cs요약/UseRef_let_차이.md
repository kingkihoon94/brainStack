
# 🔍 `useRef()` vs `let` in React

React에서 `useRef()`와 `let`의 가장 큰 차이점은 **리렌더링 시 동작 방식**에 있습니다.

---

## 🆚 주요 차이점

| 항목 | `let` | `useRef()` |
|------|-------|------------|
| 리렌더링 시 값 유지 | ❌ 초기화됨 | ✅ 유지됨 |
| 값 변경 시 리렌더링 유발 | ❌ | ❌ |
| DOM 접근 | ❌ | ✅ (`ref.current`) |
| 주 사용처 | 임시 값 저장 | DOM 접근, 타이머 ID, 상태 저장 등 |

---

## 🧪 사용 예시

### 1. DOM 요소 접근

```jsx
const inputRef = useRef();

useEffect(() => {
  inputRef.current.focus();
}, []);

return <input ref={inputRef} />;
```

### 2. 타이머 ID 저장

```jsx
const timerId = useRef(null);

useEffect(() => {
  timerId.current = setTimeout(() => console.log("Done!"), 1000);
  return () => clearTimeout(timerId.current);
}, []);
```

---

## ❓ 그럼 컴포넌트 외부에서 `let` 쓰면 유지되잖아?

맞습니다. **컴포넌트 외부**에서 선언한 `let` 변수는 리렌더링과 관계가 없습니다.  
하지만 이건 React에서 **권장되지 않는 패턴**입니다.

---

## ❌ 컴포넌트 외부 변수 사용이 위험한 이유

1. **모든 컴포넌트 인스턴스가 변수를 공유함**  
   → 같은 컴포넌트를 여러 번 사용할 경우, 상태 충돌 발생 가능

2. **전역 변수처럼 동작해 예측성 저하**  
   → 디버깅/유지보수 어려워짐

3. **리액트의 단방향 데이터 흐름 위반**  
   → 리액트 생명주기 외부에서 상태가 관리됨

---

## ✅ 결론

> 상태나 참조를 유지해야 할 경우에는 `useState()` 또는 `useRef()`를 사용하고,  
> 절대로 컴포넌트 외부의 `let`에 의존하지 마세요.

- 💡 DOM 접근 → `useRef()`
- 💡 타이머, 인터벌 ID 저장 → `useRef()`
- 💡 상태 변경 감지 + 리렌더링 필요 → `useState()`
