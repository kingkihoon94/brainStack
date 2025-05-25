# event.target vs event.currentTarget

`event.target`과 `event.currentTarget`은 모두 이벤트 객체의 속성이며, 각각 "이벤트가 실제로 발생한 요소"와 "이벤트 리스너가 연결된 요소"를 가리킵니다. 이 둘의 차이점을 이해하려면 이벤트 버블링에 대한 이해가 필요합니다.

## 이벤트 버블링(Event Bubbling)이란?

이벤트는 특정 요소에서 발생한 후, 그 요소의 부모 요소를 거쳐 상위 요소로 전파됩니다. 이 과정을 "이벤트 버블링"이라고 하며, JavaScript 이벤트 모델에서 기본적으로 사용되는 전파 방식입니다.

## event.target vs event.currentTarget

* **event.target**: 사용자가 실제로 상호작용한 요소, 즉 이벤트가 처음 발생한 요소입니다.
* **event.currentTarget**: 이벤트 리스너가 등록된 요소, 즉 이벤트를 듣고 있는 요소입니다.

이 둘은 이벤트 버블링 중에 다른 값을 가질 수 있습니다.

## 예제 코드

```html
<div id="parent">
  <button id="child">Click me</button>
</div>
```

```javascript
document.getElementById("parent").addEventListener("click", function(event) {
  console.log("target:", event.target);         // <button id="child">Click me</button>
  console.log("currentTarget:", event.currentTarget); // <div id="parent">
});
```

버튼을 클릭하면:

* `event.target`은 `<button>`을 반환합니다.
* `event.currentTarget`은 `<div>`를 반환합니다.

## 정리

* `event.target`은 이벤트가 발생한 **실제 요소**.
* `event.currentTarget`은 이벤트 리스너가 바인딩된 **요소 자신**.

이 차이는 **이벤트 위임**이나 **복잡한 DOM 구조에서의 이벤트 처리**에서 매우 유용합니다. 두 속성을 적절히 사용하면 의도한 요소만 이벤트 처리 대상이 되도록 제어할 수 있습니다.
