# TypeScript `infer` 키워드 정리

## ✅ infer란?

`infer` 키워드는 **조건부 타입** 안에서 특정 타입을 추론(infer)하기 위해 사용됩니다. 즉, 타입을 명시하지 않고 **타입스크립트에게 타입을 추론하게 하는 문법적 도구**입니다.

> 📌 **주의:** `infer`는 `extends`를 사용하는 **조건부 타입 안에서만** 사용할 수 있습니다.

---

## 📘 기본 사용 예시

```ts
type GetReturnType<T> = T extends (...args: any[]) => infer R ? R : never;
```

* `T`가 함수 타입이면, 해당 함수의 **반환 타입**을 `R`이라는 이름으로 추론하여 반환
* 함수 타입이 아니라면 `never` 반환

### ✅ 예시 적용

```ts
type A = GetReturnType<() => string>;  // string
type B = GetReturnType<() => number>;  // number
type C = GetReturnType<string>;        // never (함수 아님)
```

---

## 🔍 `R`이란?

* `infer R`에서 `R`은 **타입 변수**입니다.
* `string`, `number`와 같은 키워드가 아닌, \*\*"이 타입을 R로 추론해서 사용하겠다"\*\*는 의미입니다.
* 이름은 `R`, `U`, `TResult` 등 **임의로 지정 가능**합니다.

```ts
type GetReturnType<T> = T extends (...args: any[]) => infer Return ? Return : never;
```

위처럼 `Return`으로 바꿔도 의미는 같습니다.

---

## 🧠 `extends`와의 관계

`infer`는 반드시 `extends` 조건부 타입 내부에서 사용되어야 합니다.

```ts
type Check<T> = T extends string ? '문자열' : '다른 타입';
```

조건부 타입이 `T extends SomeType ? A : B` 형태일 때,
그 안에서 `infer`를 사용하여 타입 내부 구조를 추론할 수 있습니다.

---

## ✅ 요약

| 항목      | 설명                             |
| ------- | ------------------------------ |
| `infer` | 조건부 타입 내부에서 타입스크립트가 타입을 추론하게 함 |
| `R`     | 추론된 타입을 담는 변수명 (임의로 지정 가능)     |
| 사용 위치   | 반드시 `extends`가 포함된 조건부 타입 내부   |

---

## 🧪 실전 팁

`ReturnType`, `Parameters`, `ConstructorParameters` 등 내장 유틸리티 타입들도 `infer`를 내부적으로 사용하여 구현됩니다.

---

필요에 따라 `infer`를 직접 사용하는 커스텀 타입을 정의하면, 더 유연하고 추상화된 타입 설계가 가능합니다. 😊
