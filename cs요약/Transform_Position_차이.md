## transform과 position의 차이와 사용 기준

### transform을 사용하는 경우

애니메이션이나 동적인 위치 변경이 필요한 경우에는 `transform` 속성이 성능 상 유리하여 선호됩니다.

* `transform`은 브라우저의 **composite 단계**에서 실행됩니다.
* `reflow`나 `repaint`를 유발하지 않기 때문에 성능에 유리합니다.

#### 예시: transform으로 버튼 호버 시 위로 이동

```css
/* transform: 성능이 더 좋음 */
.button:hover {
  transform: translateY(-5px);
}
```

### position을 사용하는 경우

반면, `top`, `left` 등 `position` 관련 속성은 **reflow**와 **repaint**를 유발합니다.

* 브라우저는 주변 요소의 위치까지 다시 계산해야 하므로 성능에 부하를 줄 수 있습니다.

#### 예시: position으로 버튼 호버 시 위로 이동

```css
/* position: 성능이 상대적으로 떨어짐 */
.button {
  position: relative;
}
.button:hover {
  top: -5px;
}
```

### 그럼 position은 사용하지 말아야 할까? 🤔

그렇지 않습니다. `position`은 다음과 같은 경우에 적합합니다:

* 레이아웃의 구조를 잡을 때
* 부모 요소를 기준으로 정확한 위치를 지정할 때

> `transform`은 시각적인 위치만 변경할 뿐, **문서 흐름과는 무관**하게 동작합니다.
> 따라서 문서의 레이아웃에 영향을 주어야 하는 경우에는 `position`을 사용해야 합니다.

### 요약

| 구분       | transform         | position               |
| -------- | ----------------- | ---------------------- |
| 성능       | 좋음 (composite 단계) | 낮음 (reflow/repaint 유발) |
| 문서 흐름 영향 | 없음                | 있음                     |
| 적합한 상황   | 애니메이션, 시각적 위치 이동  | 레이아웃 배치, 기준 위치 지정      |
