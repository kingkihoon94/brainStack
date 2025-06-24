# Content-Type 헤더란?

`Content-Type`은 HTTP 요청과 응답에서 전송되는 **데이터의 타입**을 명시하는 헤더입니다. 서버와 클라이언트가 데이터를 주고받을 때, 데이터를 **올바르게 해석**할 수 있도록 돕는 중요한 역할을 합니다.

---

## 예시

- 클라이언트가 JSON 데이터를 서버로 전송할 경우:

  ```http
  Content-Type: application/json
  ```

  서버는 해당 데이터가 JSON 형식임을 알고, JSON으로 파싱하여 처리합니다.

- 서버가 클라이언트에게 HTML을 응답할 경우:

  ```http
  Content-Type: text/html
  ```

  브라우저는 이를 HTML로 렌더링합니다.

---

## MIME 타입 형식

`Content-Type`은 **MIME 타입** 기반이며, 다음과 같은 형식으로 구성됩니다:

```
[type]/[subtype]
```

### 자주 사용하는 MIME 타입

| MIME 타입               | 설명                            |
|-------------------------|---------------------------------|
| `application/json`      | JSON 데이터                     |
| `text/html`             | HTML 문서                       |
| `text/plain`            | 일반 텍스트                     |
| `application/xml`       | XML 데이터                      |
| `multipart/form-data`   | 파일 업로드용 폼 데이터         |
| `application/x-www-form-urlencoded` | URL 인코딩된 폼 데이터 |

---

## Content-Type을 올바르게 설정하지 않으면?

- 클라이언트가 JSON 데이터를 전송하면서 `Content-Type: application/x-www-form-urlencoded`로 설정하면:
  - 서버가 데이터를 올바르게 파싱하지 못할 수 있음
  - `415 Unsupported Media Type` 오류가 발생할 수 있음

---

## Content-Type vs Accept 헤더 🤔

| 헤더명        | 설명 |
|---------------|------|
| `Content-Type` | **보내는 데이터의 타입**을 지정합니다. (요청 본문 또는 응답 본문) |
| `Accept`       | **받고 싶은 데이터의 타입**을 지정합니다. (서버 응답 타입) |

### 예시

클라이언트가 JSON 응답을 원할 경우:

```http
Accept: application/json
```

서버는 JSON으로 응답을 반환하려고 시도합니다.

---

## 요약

- `Content-Type`은 **데이터가 어떤 형식인지** 명시
- 올바른 MIME 타입을 설정해야 클라이언트/서버 간 통신이 원활
- `Accept`는 **클라이언트가 원하는 응답 형식**을 서버에 알림
