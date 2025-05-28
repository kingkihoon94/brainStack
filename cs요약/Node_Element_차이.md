# Node와 Element의 핵심적인 차이점

## 1. Node란?

Node는 DOM(Document Object Model)을 구성하는 가장 기본적인 단위입니다. 다양한 타입의 노드들이 존재하며, 이들은 모두 DOM 트리를 구성하는 요소입니다.

### Node의 종류

* **Document Node**: 문서 전체를 대표하는 루트 노드
* **Element Node**: HTML 태그 요소를 나타냄
* **Text Node**: HTML 요소 사이의 텍스트를 나타냄
* **Comment Node**: HTML 주석을 나타냄

Node는 이처럼 다양한 형태로 존재하며, DOM 트리 내 모든 요소들을 포괄합니다.

## 2. Element란?

Element는 Node의 하위 타입 중 하나로, HTML이나 XML에서 태그로 표현되는 객체입니다.

### Element의 특징

* Node의 한 종류입니다.
* `id`, `class`, `style` 등의 HTML 속성을 가질 수 있습니다.
* `querySelector()`, `getElementsByClassName()` 등의 메서드로 접근할 수 있습니다.

> **모든 Element는 Node이지만, 모든 Node가 Element는 아닙니다.**

## 3. 예시로 보는 차이

HTML 코드 예시:

```html
<div>Hello<!--주석-->World</div>
```

이 구조는 다음과 같은 Node들로 구성됩니다:

* `<div>`: Element Node (그리고 Node)
* `'Hello'`: Text Node (Node)
* `<!--주석-->`: Comment Node (Node)
* `'World'`: Text Node (Node)

## 4. 속성 차이 예시

### textContent vs innerHTML

* `textContent`: **Node의 속성** → 모든 Node에서 사용 가능
* `innerHTML`: **Element의 속성** → Element에서만 사용 가능

```js
const div = document.querySelector('div');
console.log(div.textContent);  // HelloWorld
console.log(div.innerHTML);   // Hello<!--주석-->World
```

## 5. 자식 노드 접근: childNodes vs children

* `childNodes`: **Node의 속성**

  * 모든 자식 Node 포함 (Element, Text, Comment 등)
  * 반환값: NodeList
* `children`: **Element의 속성**

  * 오직 Element Node만 포함
  * 반환값: HTMLCollection

```js
const div = document.querySelector('div');

console.log(div.childNodes); // [TextNode("Hello"), CommentNode("주석"), TextNode("World")]
console.log(div.children);   // [] (div 내부에는 Element가 없으므로 빈 컬렉션)
```

## ✅ 요약

| 구분     | Node                               | Element                                    |
| ------ | ---------------------------------- | ------------------------------------------ |
| 정의     | DOM 트리의 모든 단위                      | HTML/XML 태그 요소                             |
| 포함 범위  | Document, Element, Text, Comment 등 | Node의 하위 개념                                |
| 예시 메서드 | `textContent`, `childNodes`        | `innerHTML`, `children`, `querySelector()` |

Node는 범용적이고 포괄적인 개념이며, Element는 그중 HTML 태그에 특화된 객체라는 점을 기억하세요. 😉
