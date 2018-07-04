---
title: Day 1
---

# 타이틀 테스트

const와 let 예약어는 ES6에서 사용하는 변수 선언 방식입니다.
[데이원 HTML 링크](./day-one-folder/day-one.html)

## let

let 예약어는 한번 선언하면 다시 선언할 수 없습니다.

```js
// 똑같은 변수를 재선언할 때 오류
let a = 10;
let a = 20; // Uncaught SyntaxError: Identifier 'a' has already been declared
```


## const

const 예약어는 한번 할당한 값을 변경할 수 없습니다.

```js
// 값을 다시 할당했을 때 오류
const a = 10;
a = 20; // Uncaught TypeError: Assignment to constant variable.
```