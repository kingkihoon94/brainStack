# Next.js Server Actions

**Server Action**은 Next.js에서 제공하는 기능으로, 서버에서 실행되며 브라우저에서 호출할 수 있는 비동기 함수입니다.  
이 기능을 활용하면 클라이언트와 서버 간의 상호작용을 간소화할 수 있습니다.  
예를 들어 백엔드 API를 따로 두는 대신, Next.js 서버에서 직접 데이터베이스에 접근하는 방식으로 사용할 수 있습니다.

---

## ✅ 사용 방법

Server Action은 `"use server"` 디렉티브를 사용하여 정의합니다.  
이 디렉티브는 해당 함수가 서버에서만 실행되도록 지정합니다.

```ts
"use server";

export async function createReviewAction(data: FormData) {
  const content = data.get("content");
  // 데이터베이스 저장 등의 작업
}
```

### 컴포넌트에서의 사용 예시:

```tsx
<form action={createReviewAction}>
  <textarea name="content" required />
  <button type="submit">Submit</button>
</form>
```

폼이 제출될 때 `createReviewAction` 함수가 실행되며, 해당 데이터를 서버에서 처리할 수 있습니다.

---

## 🌟 Server Action의 장점은?

### 1. 클라이언트-서버 간 상호작용 간소화

기존에는 서버 로직을 처리하기 위해 클라이언트 → API → 서버 흐름을 거쳐야 했습니다.  
하지만 Server Action을 이용하면 Next.js 서버에서 직접 서버 작업을 수행할 수 있어 개발 생산성이 향상됩니다.  
또한, 네트워크 요청을 줄여 성능에도 도움이 됩니다.

---

### 2. 보안성 향상

Server Action으로 작성된 로직은 클라이언트에 전송되지 않기 때문에 보안 측면에서 유리합니다.  
노출되면 안 되는 로직이나 정보를 안전하게 보호할 수 있습니다.  
또한, 클라이언트 코드량이 줄어들어 번들 크기 감소 효과도 기대할 수 있습니다.

---

### 3. JavaScript가 없어도 작동

Server Action은 HTML `<form>`의 `action` 속성을 통해 서버와 통신하므로,  
JS가 로드되지 않았거나 비활성화된 경우에도 정상적으로 동작합니다.  
이를 통해 보다 견고한 사용자 경험을 제공할 수 있습니다.

---

## 🔚 결론

Next.js의 Server Action은 클라이언트와 서버 간 로직 분리를 단순화하고,  
보안과 성능 측면에서 이점을 제공하는 강력한 기능입니다.  
HTML form 기반의 제출 처리부터, 복잡한 서버 사이드 연산까지 다양한 활용이 가능합니다.