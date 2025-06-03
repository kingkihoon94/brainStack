# JavaScript 매개변수 전달 방식 예제

```javascript
function change(a, b, c) {
    a = 'a changed'
    b = { b: 'changed' };
    c.c = 'changed';
}

let a = 'a unchanged';
let b = { b: 'unchanged' };
let c = { c: 'unchanged' };

change(a, b, c);

console.log(a, b, c); // ?
```

## 출력 결과

```
a unchanged { b: 'unchanged' } { c: 'changed' }
```

## 설명

자바스크립트는 **Call by Value** 방식으로 매개변수를 전달합니다. 이는 함수 매개변수에 **값의 복사본**이 전달된다는 의미입니다.

### 1. a (문자열)

* 문자열은 \*\*원시 값(Primitive Value)\*\*입니다.
* 함수에 전달될 때 값의 복사본이 전달되며, 함수 내에서 변경하더라도 원래 값에는 영향을 미치지 않습니다.
* 따라서 `a`는 여전히 `'a unchanged'`입니다.

### 2. b (객체)

* 객체는 \*\*참조 타입(Reference Type)\*\*입니다.
* 객체의 \*\*참조 값(주소)\*\*이 복사되어 전달됩니다.
* 함수 내부에서 `b = { b: 'changed' }`로 **새로운 객체를 할당**하면, 이 복사본은 다른 객체를 가리키게 됩니다.
* 호출한 곳의 `b`는 영향을 받지 않습니다.
* 따라서 `b`는 여전히 `{ b: 'unchanged' }`입니다.

### 3. c (객체)

* `c`도 참조 타입입니다.
* 마찬가지로 참조 값이 복사되어 전달되지만, **같은 객체를 가리키는 복사본**이므로 내부 속성을 수정하면 원본에도 영향을 미칩니다.
* `c.c = 'changed'`는 `c` 객체의 속성 값을 변경하는 것이므로, 원본도 함께 변경됩니다.
* 따라서 `c`는 `{ c: 'changed' }`로 바뀝니다.

---

이 예제는 자바스크립트에서 **값 전달 (Call by Value)** 개념과 **참조형 데이터 처리 방식**을 명확하게 이해하는 데 도움이 됩니다.