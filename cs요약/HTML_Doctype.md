# HTML의 <!DOCTYPE> 선언

`<!DOCTYPE>`은 웹 브라우저에 해당 문서가 어떤 HTML 버전을 기반으로 작성되었는지를 알려주는 선언문입니다. 이 선언은 문서의 최상단에 위치하며, 브라우저가 HTML 문서를 해석하고 렌더링하는 방식을 결정하는 데 중요한 역할을 합니다.

## 대소문자 구분 여부

`<!DOCTYPE>`은 대소문자를 구분하지 않지만, 관례적으로 대문자로 작성하여 강조하는 경우가 많습니다.

## 과거 HTML 버전과의 관계

과거에는 HTML의 다양한 버전(ex. XHTML 1.1, HTML 4.01 등)이 존재했기 때문에, 각 문서의 Doctype을 명시적으로 선언하여 브라우저가 적절한 렌더링 방식을 선택할 수 있도록 해야 했습니다.

## HTML5에서의 변화

HTML5에 접어들면서 Doctype 선언 방식이 다음과 같이 단순화되었습니다:

```html
<!DOCTYPE html>
```

이 간단한 선언만으로 HTML5를 사용하고 있음을 명시할 수 있으며, 브라우저는 이를 기반으로 표준 모드(standards mode)로 문서를 렌더링합니다.

## Doctype을 선언하지 않으면?

Doctype 선언이 없는 경우, 브라우저는 문서를 \*\*쿼크 모드(quirks mode)\*\*로 렌더링할 수 있습니다. 쿼크 모드는 오래된 웹사이트와의 호환성을 유지하기 위해 표준과 다른 방식으로 동작합니다. 이는 다음과 같은 문제를 유발할 수 있습니다:

* 박스 모델 동작 이상
* CSS 렌더링 오류
* JavaScript 호환성 문제

따라서 **정확하고 일관된 렌더링을 위해서는 반드시 `<!DOCTYPE html>`을 선언해야 합니다**.

## 결론

오늘날 대부분의 웹 문서는 HTML5를 기반으로 작성되며, 아래와 같이 간단하게 선언하면 됩니다:

```html
<!DOCTYPE html>
```

이는 브라우저에게 표준 모드로 렌더링할 것을 명확하게 지시하며, 안정적인 웹 페이지 동작을 보장하는 중요한 요소입니다.
