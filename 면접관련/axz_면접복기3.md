# 면접 복기 3: TypeScript 주요 타입 정리

## ✅ TypeScript 주요 타입 정리

| 타입 | 의미 | 특징 | 사용 예 | 주의사항 |
|------|------|------|--------|---------|
| `any` | 모든 타입 허용 | 타입 검사 완전히 해제 | 외부 JS 라이브러리 사용 시 | 타입 안정성 ↓, 최대한 지양 |
| `unknown` | 알 수 없는 타입 | `any`와 유사하지만 타입 검사 필요 | JSON 응답 타입 받을 때 | 사용 전 타입 좁히기 필수 (`typeof`, `in` 등) |
| `void` | 아무것도 반환하지 않음 | `return` 없는 함수에 사용 | `function log(): void {}` | `return`하면 타입 오류 |
| `never` | 절대 발생하지 않는 값 | 함수가 끝나지 않음 / 오류 발생 | `function throwErr(): never` | `무한루프`, `throw` 등 |
| `null` | 값이 없음 | `strictNullChecks` 여부에 따라 다름 | `let name: string \| null` | `undefined`와 혼용 주의 |
| `undefined` | 초기화되지 않은 상태 | JS에서 변수 선언만 한 상태 | `let a: string \| undefined` | `optional` 파라미터와 혼용 |

---

## 🔍 하나씩 자세히

### 1. `any`
- 타입 검사 없이 어떤 값이든 허용
- 컴파일러가 추론을 포기 → **완전한 비정형**
- 실무에서는 정말 불가피한 경우만 사용 (외부 JS 라이브러리 등)
```ts
let data: any = 123;
data = "hello"; // ok
data.foo.bar.baz(); // ok (에러 안 남!)
```

### 2. `unknown`
- `any`와 달리 **사용 전에 타입 검사 필요**
```ts
function handle(input: unknown) {
  if (typeof input === 'string') {
    console.log(input.toUpperCase());
  }
}
```
- 타입 안정성 보장 → **가능하면 any 대신 unknown 사용**

### 3. `void`
- **리턴값이 없는 함수**를 의미
```ts
function log(message: string): void {
  console.log(message);
}
```
- `return true` 같은 거 하면 에러 발생함

### 4. `never`
- **절대 반환되지 않는 함수의 반환 타입**
- 예: `throw`, 무한 루프 등
```ts
function error(msg: string): never {
  throw new Error(msg);
}

function infinite(): never {
  while (true) {}
}
```
- `switch` 문에서 default 누락 검사 시에도 사용됨

### 5. `null` vs `undefined`
- `null`: **개발자가 명시적으로 "없음"을 표현**
- `undefined`: **초기화되지 않았거나 생략된 값**
```ts
let a: string | null = null;
let b: string | undefined = undefined;
```
- 실무에서는 `strictNullChecks` 옵션 켜두는 게 안전
- `nullable` 처리할 때는 `string | null | undefined` 로 명시

---

## 🧠 면접 팁

> “`any`는 최대한 피하려고 하고, 대신 `unknown`을 통해 먼저 받은 값을 검증한 후 타입을 좁히는 방식을 주로 사용합니다.  
> `void`나 `never`는 함수 설계 시 반환 목적에 따라 구분해서 사용했고, 특히 `never`는 예외 처리 함수나 switch exhaustive check에 자주 활용했습니다.”