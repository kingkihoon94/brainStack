# AXZ 면접 복기 (1) - Type, Interface, Enum, Tuple 정리

---

## ✅ Type vs Interface – 차이점과 실전 사용 정리

### 🔹 선언 방식과 구조적 차이

| 항목        | `type`                                       | `interface`                              |
|-------------|-----------------------------------------------|-------------------------------------------|
| 선언 방식   | 타입 별칭 (alias)                              | 구조 선언 (shape declaration)             |
| 중복 선언   | ❌ 불가능 (에러 발생)                           | ✅ 가능 (자동 병합)                        |
| 확장 방법   | `&` 연산자 (인터섹션)                          | `extends` 키워드                          |
| 표현 가능   | 유니언, 튜플, 프리미티브 타입 등 다양하게 표현 가능 | 객체에 특화됨                             |

---

### 🔹 예시 코드

```ts
// type 사용 예시
type Status = 'loading' | 'success' | 'error';
type Pair = [string, number];
type Primitive = string | number | boolean;

// interface 사용 예시
interface User {
  id: number;
  name: string;
}

interface Admin extends User {
  isAdmin: boolean;
}
```

---

### 🔹 실무 기준 선택 예시

| 상황                      | 추천 |
|---------------------------|------|
| 유니언, 튜플, 조합 등 표현 | `type` |
| 공통 구조 설계/확장      | `interface` |
| React 컴포넌트 Props     | 둘 다 가능 (스타일에 따라 다름) |

---

## ✅ Enum – 열거형 상수

```ts
enum Role {
  Admin,   // 0
  User,    // 1
  Guest    // 2
}

enum Status {
  Success = 'SUCCESS',
  Error = 'ERROR'
}
```

- 숫자/문자 매핑 가능
- 런타임에도 객체 형태로 존재
- 반복되는 상수값 관리에 유리

---

## ✅ Tuple – 위치 기반 타입 배열

```ts
const user: [string, number] = ['Alice', 30];

const [name, age]: [string, number] = ['Bob', 25];
```

- 배열처럼 보이지만 **위치에 따라 타입이 고정**
- `useState`, `entries()` 등과 궁합이 좋음

---

## ✅ 면접용 요약 문장

> `type`은 유니언이나 튜플 등 다양한 표현에 유리하고,  
> `interface`는 구조 설계나 선언 병합, 확장성에 적합합니다.  
> 반복되는 상수는 `enum`으로 관리하며, 위치 기반 타입 배열에는 `tuple`을 활용해 타입 안정성을 확보합니다.

---

