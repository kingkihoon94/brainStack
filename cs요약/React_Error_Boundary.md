# React - Error Boundary란?

**Error Boundary**는 React 컴포넌트에서 발생하는 오류를 잡아내고, 전체 애플리케이션이 다운되는 것을 방지하기 위한 **특수한 컴포넌트**입니다.

일반적으로 **클라이언트에서 오류 발생 시 표시할 UI를 제공**하여, 애플리케이션의 **신뢰성과 사용자 경험**을 높이는 데 활용됩니다.

> Error Boundary는 **클래스형 컴포넌트**에서만 사용할 수 있으며,  
> `componentDidCatch`와 `getDerivedStateFromError` 두 가지 라이프사이클 메서드를 사용합니다.

---

## ✅ Error Boundary가 필요한 이유

React는 기본적으로 **비동기 작업이나 렌더링 오류**를 자동으로 처리하지 않기 때문에,  
에러가 발생하면 **전체 화면이 하얗게 되거나** 사용자 입장에서 **이해할 수 없는 상태**가 될 수 있습니다.

이러한 상황은 특히 **대규모 애플리케이션**에서 **신뢰성에 큰 타격**을 줄 수 있습니다.

### Error Boundary의 역할:

- 에러 발생 시, 해당 컴포넌트만 **대체 UI**로 전환
- 애플리케이션의 **나머지 영역은 정상 동작 유지**
- 사용자에게 **오류 메시지 또는 안내 화면 제공**
- **선언형 방식**으로 대체 UI를 지정 가능 → 가독성과 유지보수성 향상

---

## 🔍 선언형으로 처리한다는 것은?

> **"무엇을 해야 하는지"만 작성하고, "어떻게 처리할지"는 컴포넌트에 맡긴다**는 방식입니다.

예를 들어, Error Boundary를 이렇게 사용할 수 있습니다:

```jsx
<ErrorBoundary>
  <MyComponent />
</ErrorBoundary>
```

이 코드만 보고도 우리는:
- "MyComponent에서 에러가 발생하면"
- "ErrorBoundary가 지정한 대체 UI가 보이겠구나"

라고 바로 이해할 수 있습니다.  
반면, 명령형 코드는 try-catch와 조건 분기를 직접 써야 하기 때문에 **가독성이 떨어지고 코드가 길어집니다.**

---

## 🧩 유지보수성이 향상되는 이유

- **코드 가독성**이 높아지고,
- **비즈니스 로직과 에러 처리 로직의 분리**가 명확해지며,
- 재사용 가능한 에러 처리 컴포넌트를 만들어 전체 앱에 일관되게 적용 가능

---

## 📌 정리

| 항목 | 설명 |
|------|------|
| Error Boundary | React 클래스형 컴포넌트로, 렌더링 중 발생하는 오류를 감지하고 대체 UI를 보여줌 |
| 사용 이유 | 전체 앱 중단 방지, 사용자 경험 보호 |
| 핵심 메서드 | `componentDidCatch`, `getDerivedStateFromError` |
| 선언형 처리 | 무엇을 할지 명시만 하면, 실행 로직은 React가 수행 |
| 유지보수성 | 가독성, 로직 분리, 재사용성 측면에서 유리 |

