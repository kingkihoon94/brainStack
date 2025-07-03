
# 면접 복기 (5) - 제네릭(Generic) 타입 정리

## ✅ 제네릭(Generic)이란?

제네릭은 **어떤 타입이 들어올지 모르지만, 나중에 결정되는 타입을 일반화하여 재사용성을 높이는 기능**입니다.  
즉, **타입을 변수처럼 사용하는 문법**으로, 함수, 클래스, 인터페이스, 타입에 다양하게 적용할 수 있습니다.

---

## 🔍 왜 제네릭을 사용할까?

- **코드 재사용성 증가**
- **타입 안정성 보장**
- **유연한 API 설계**

---

## 📌 기본 사용 예시

```ts
function identity<T>(arg: T): T {
  return arg;
}

const num = identity<number>(10); // num: number
const str = identity<string>('hello'); // str: string
```

- `T`는 타입 변수 (type parameter)
- `identity<T>`는 호출 시 타입을 넘겨주는 형태
- 타입스크립트는 제네릭 타입을 **추론**할 수도 있음

```ts
const inferred = identity(true); // inferred: boolean
```

---

## 🧱 제네릭 인터페이스

```ts
interface ApiResponse<T> {
  status: number;
  data: T;
}

const userResponse: ApiResponse<{ name: string }> = {
  status: 200,
  data: { name: 'Alice' },
};
```

---

## 🧱 제네릭 클래스

```ts
class Box<T> {
  content: T;
  constructor(value: T) {
    this.content = value;
  }
}

const stringBox = new Box<string>('hello');
```

---

## 🔒 제네릭 제약 (extends)

```ts
function getLength<T extends { length: number }>(item: T): number {
  return item.length;
}

getLength([1, 2, 3]); // ✅ OK
getLength('hello'); // ✅ OK
getLength(123); // ❌ Error: number에는 length가 없음
```

---

## 🧠 유틸리티 타입과 제네릭

타입스크립트의 `Partial<T>`, `Pick<T, K>`, `Record<K, T>` 등은 모두 제네릭 기반입니다.

```ts
type Partial<T> = {
  [P in keyof T]?: T[P];
};
```

---

## 📌 실무 활용 예

- API 응답 타입 정의: `ApiResponse<T>`
- 커스텀 훅의 반환 타입 설정: `useData<T>()`
- 재사용 가능한 유틸 함수 작성: `merge<T, U>(a: T, b: U): T & U`

---

## ✅ 마무리

제네릭은 타입의 유연함과 안정성을 동시에 제공하는 강력한 기능입니다.  
**"다양한 타입에 대해 재사용 가능한 함수를 만들 수 있도록 해주는 것"**이 핵심입니다.
