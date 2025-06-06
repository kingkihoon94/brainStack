# HTML `<link>` 요소의 `rel` 속성 값: `preconnect`, `preload`, `prefetch`

`<link>`는 HTML 문서에서 외부 리소스를 연결할 때 사용하는 요소입니다. 이 중 `rel` 속성의 값으로 사용되는 `preconnect`, `preload`, `prefetch`는 리소스 로드의 우선순위를 설정하여 웹 페이지의 성능을 최적화하는 데 도움을 줍니다.

## 1. preconnect

`preconnect`는 브라우저가 특정 origin(출처)에 대한 네트워크 연결을 미리 설정하도록 지시합니다. 이는 리소스를 실제로 요청하기 전에 다음과 같은 네트워크 작업들을 미리 수행하게 합니다:

* DNS 조회
* TLS 핸드셰이크
* TCP 연결 수립

### 사용 예시

```html
<link rel="preconnect" href="https://external-resource.com" crossorigin="anonymous">
```

> ✅ 주의: `preconnect`는 리소스를 다운로드하지 않고, 연결만 미리 설정합니다.

**적용 예:**

* 외부 API 서버
* CDN에서 제공하는 폰트, 이미지, 스크립트 등

## 2. preload

`preload`는 브라우저에 특정 리소스를 우선적으로 다운로드하라고 지시합니다. 이는 해당 리소스가 나중에 필요하지만, 렌더링에 중요하므로 미리 불러오는 데 효과적입니다.

### 사용 예시

```html
<link rel="preload" href="/fonts/my-font.woff2" as="font" crossorigin="anonymous">
```

`as` 속성은 리소스의 유형을 지정하여 브라우저가 캐싱 및 우선순위를 적절히 처리할 수 있도록 도와줍니다.

**적용 예:**

* 웹 폰트 (FOUT 현상 방지)
* 중요 이미지, 비디오, 스크립트 등

## 3. prefetch

`prefetch`는 현재 화면에는 필요 없지만, **향후 사용할 가능성이 있는 리소스**를 미리 다운로드하게 합니다. 이 리소스들은 낮은 우선순위로 백그라운드에서 다운로드되며, 다음 페이지 전환 등의 상황에서 빠른 로드를 기대할 수 있습니다.

### 사용 예시

```html
<link rel="prefetch" href="/next-page.css" as="style">
```

**적용 예:**

* 다음 화면에 필요한 CSS, JS
* 자주 방문되는 섹션의 리소스

---

## 정리

| 속성         | 목적                   | 리소스를 미리 가져오는가? | 우선순위   |
| ---------- | -------------------- | -------------- | ------ |
| preconnect | 연결 준비 (DNS/TCP/TLS)  | ❌              | 높음     |
| preload    | 렌더링에 필요한 리소스 미리 다운로드 | ✅              | 중간\~높음 |
| prefetch   | 미래에 필요할 가능성 있는 리소스   | ✅ (백그라운드)      | 낮음     |

적절하게 이 속성들을 활용하면 초기 페이지 로딩 속도를 개선하고 사용자 경험을 향상시킬 수 있습니다.
