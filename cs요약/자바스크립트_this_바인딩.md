# 자바스크립트의 `this` 바인딩

자바스크립트에서 `this`는 **함수가 호출되는 방식에 따라 값이 달라지는 동적 바인딩**을 가집니다. 다양한 상황에 따라 `this`가 어떻게 바인딩되는지 6가지 대표적인 경우로 나누어 설명합니다.

## 1. 전역 호출 (Global Context)

함수가 전역 컨텍스트에서 호출될 경우, `this`는 전역 객체를 가리킵니다:

* 브라우저: `window`
* Node.js: `global`

```javascript
function globalFunc() {
  console.log(this);
}
globalFunc(); // 브라우저: window, Node.js: global
```

## 2. 메서드 호출 (Object Method)

객체의 메서드로 호출된 함수에서는 `this`가 **해당 객체**를 참조합니다.

```javascript
const obj = {
  name: "Alice",
  greet: function () {
    console.log(this.name);
  },
};
obj.greet(); // "Alice"
```

## 3. 생성자 함수와 클래스 (Constructor & Class)

생성자 함수나 클래스에서의 `this`는 **새로 생성된 인스턴스**를 가리킵니다.

```javascript
function Person(name) {
  this.name = name;
}
const person = new Person("Alice");
console.log(person.name); // "Alice"
```

## 4. 명시적 바인딩 (Explicit Binding)

`call()`, `apply()`, `bind()` 메서드를 통해 `this`를 **명시적으로 지정**할 수 있습니다.

```javascript
function greet() {
  console.log(this.name);
}
const user = { name: "Alice" };
greet.call(user); // "Alice"
```

## 5. 화살표 함수 (Arrow Function)

화살표 함수는 **자체적인 `this`를 가지지 않고**, **상위 스코프의 `this`를 상속**합니다.

```javascript
const obj = {
  name: "Alice",
  greet: () => console.log(this.name),
};
obj.greet(); // undefined (전역 this)
```

## 6. DOM 이벤트 핸들러 (DOM Event Handler)

일반 함수로 작성된 이벤트 핸들러에서 `this`는 **해당 이벤트를 발생시킨 DOM 요소**를 참조합니다.

```javascript
const button = document.querySelector("button");
button.addEventListener("click", function () {
  console.log(this); // 클릭된 button 요소
});
```

하지만 화살표 함수로 작성하면 `this`는 외부 렉시컬 스코프의 값을 사용합니다:

```javascript
button.addEventListener("click", () => {
  console.log(this); // 외부 스코프 (예: window)
});
```

---

## 요약

| 호출 방식           | this가 참조하는 대상                                  |
| --------------- | ---------------------------------------------- |
| 전역 함수 호출        | 전역 객체 (`window` 또는 `global`)                   |
| 객체의 메서드 호출      | 해당 객체                                          |
| 생성자 함수          | 새로 생성된 인스턴스                                    |
| call/apply/bind | 명시적으로 지정된 객체                                   |
| 화살표 함수          | 상위 스코프의 `this`                                 |
| DOM 이벤트 핸들러     | 일반 함수: 이벤트 대상 DOM 요소<br>화살표 함수: 상위 스코프의 `this` |

`this`는 자바스크립트의 핵심 개념 중 하나로, 함수의 정의가 아니라 **호출 방식**에 따라 결정됩니다. 특히 화살표 함수와 명시적 바인딩(call/apply/bind)을 적절히 활용하면 예측 가능한 this 동작을 만들 수 있습니다.