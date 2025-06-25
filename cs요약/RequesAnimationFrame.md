# requestAnimationFrame

## 📌 개요

`requestAnimationFrame()`은 **브라우저의 화면 갱신 주기**에 맞춰 지정한 콜백 함수를 실행하도록 요청하는 API입니다.  
이를 통해 애니메이션을 더 **부드럽게 렌더링**하고, **성능을 최적화**할 수 있습니다.

---

## 🎯 목적

- 브라우저는 보통 **1초에 60~120번(60fps~120fps)** 화면을 갱신합니다.
- `requestAnimationFrame()`은 이러한 **디스플레이 주사율에 맞춰 프레임을 그리기 위한 콜백을 예약**합니다.
- 결과적으로 **프레임 드롭 없이 부드러운 애니메이션**을 구현할 수 있습니다.

---

## 🧪 사용 예시

```js
const animate = () => {
  // 애니메이션 프레임에서 반복할 동작

  if (/* 애니메이션 종료 조건 */) {
    return;
  }

  requestAnimationFrame(animate);
};

requestAnimationFrame(animate);
```

---

## 🔁 setTimeout / setInterval과의 차이점

| 항목                   | requestAnimationFrame | setTimeout / setInterval |
|------------------------|------------------------|---------------------------|
| 프레임 동기화          | ✅ 화면 갱신과 동기화됨 | ❌ 독립적인 타이머 기반 |
| 성능 최적화            | ✅ GPU 최적화 활용       | ❌ 불필요한 연산 발생 가능 |
| 백그라운드 탭에서 실행 | ❌ 실행되지 않음         | ✅ 계속 실행됨 (비효율적) |
| 주사율 대응            | ✅ 60Hz, 120Hz 모두 대응 | ❌ 고정된 지연 시간만 사용 |

---

## ✨ 추가 장점

1. **동적 디스플레이 주사율 대응**
   - 60Hz, 120Hz, 144Hz 등 다양한 모니터에서 자연스럽게 동작

2. **비활성 탭 최적화**
   - 탭이 백그라운드 상태일 경우, 실행되지 않음
   - 배터리 수명 연장 및 시스템 리소스 절약

3. **애니메이션 최적화**
   - 브라우저가 내부적으로 애니메이션 타이밍을 조절하여 부드러운 렌더링 제공

---

## 🧠 requestAnimationFrame의 실행 위치

- `requestAnimationFrame()`의 콜백은 **태스크 큐(task queue)** 또는 **마이크로태스크 큐(microtask queue)** 와는 별개입니다.
- 대신, **“animation frame callbacks map”** 이라는 **브라우저 내부의 별도 자료구조**에 저장됩니다.
- 이는 **렌더링 사이클 전후**에 맞춰 실행되며, **브라우저의 렌더링 엔진이 직접 제어**합니다.

---

## 📚 참고

- [MDN - requestAnimationFrame](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame)
- HTML 표준 사양 (WHATWG)