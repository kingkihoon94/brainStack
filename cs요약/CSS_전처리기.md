# CSS 전처리기와 Zero Runtime CSS

## ✅ CSS 전처리기란?

CSS 전처리기는 CSS를 **더 효율적이고 체계적으로 작성**할 수 있도록 도와주는 도구입니다. 기본 CSS는 반복 작업과 코드 재사용에 한계가 있는데, 전처리기는 **프로그래밍적 기능**을 도입하여 이를 극복합니다.

### 🔹 대표적인 CSS 전처리기
- Sass (SCSS)
- Less
- Stylus

### 🔹 주요 기능
- 변수
- 중첩(Nesting)
- 믹스인(Mixin)
- 조건문 / 반복문

### 🧩 작동 방식
전처리기로 작성한 코드는 **일반 CSS로 컴파일**되어 브라우저에서 동작합니다.

---

## ✍️ 예시

### 일반 CSS
```css
.primary-button {
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border-radius: 4px;
}

.secondary-button {
  background-color: #6c757d;
  color: white;
  padding: 10px 20px;
  border-radius: 4px;
}
```

### Sass (SCSS)
```scss
$button-padding: 10px 20px;
$border-radius: 4px;

@mixin button($bg-color) {
  background-color: $bg-color;
  color: white;
  padding: $button-padding;
  border-radius: $border-radius;
}

.primary-button {
  @include button(#007bff);
}

.secondary-button {
  @include button(#6c757d);
}
```

---

## ⚖️ CSS 전처리기 vs Zero Runtime CSS

| 항목 | CSS 전처리기 | Zero Runtime CSS |
|------|---------------|------------------|
| **등장 배경** | CSS 기능 확장 및 재사용성 향상 | CSS-in-JS의 런타임 성능 문제 해결 |
| **주요 목적** | 코드 유지보수 용이성, 프로그래밍 기능 도입 | 런타임 비용 제거, 성능 최적화 |
| **문법 기반** | CSS 유사 문법 (Sass, Less 등) | JavaScript 기반 스타일 정의 |
| **스타일링 방식** | 전통적인 CSS 방식 확장 | 컴포넌트 기반 스타일링 |
| **실행 시점** | 컴파일 타임 | 컴파일 타임 (런타임 비용 없음) |

---

## 🔍 요약

- **CSS 전처리기**는 CSS의 한계를 보완해주는 도구로, 반복 제거와 코드 재사용에 중점을 둠  
- **Zero Runtime CSS**는 성능 최적화를 위한 접근으로, 런타임 대신 컴파일 타임에 스타일을 처리함  
- 두 방식 모두 **컴파일 타임에 CSS를 생성**하지만, **목적과 사용 맥락이 다름**
