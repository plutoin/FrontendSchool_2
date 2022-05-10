let value = [10, 1, 100, 200, 300, 10];
let value2 = {
  피카츄: 1,
  라이츄: 2,
  파이리: 3,
  꼬부기: 4,
  버터플: 5,
  야도란: 6,
  피죤투: 7,
  또가스: 8,
  메타몽: 9,
};
let value3 = {
  피카츄: 10,
  라이츄: 20,
  파이리: 30,
  꼬부기: 40,
  버터플: 50,
  야도란: 60,
  피죤투: 70,
  또가스: 80,
  메타몽: 90,
};

for (let i in value) {
  console.log(i);
}
// 0
// 1
// 2
// 3
// 4
// 5

typeof value
  'object'
for (let i in value2) {
  console.log(i);
}
// 피카츄
// 라이츄
// 파이리
// 꼬부기
// 버터플
// 야도란
// 피죤투
// 또가스
// 메타몽

for (let i in value2) {
  console.log(i);
  console.log(value2[i]);
}
// 피카츄
// 1
// 라이츄
// 2
// 파이리
// 3
// 꼬부기
// 4
// 버터플
// 5
// 야도란
// 6
// 피죤투
// 7
// 또가스
// 8
// 메타몽
// 9

for (let i in value3) {
  console.log(i);
  console.log(value2[i]);
}
// 피카츄
// 1
// 라이츄
// 2
// 파이리
// 3
// 꼬부기
// 4
// 버터플
// 5
// 야도란
// 6
// 피죤투
// 7
// 또가스
// 8
// 메타몽
// 9

for (let i in value3) {
  console.log(i);
  console.log(value2[i]);
}
// 피카츄
// 1
// 라이츄
// 2
// 파이리
// 3
// 꼬부기
// 4
// 버터플
// 5
// 야도란
// 6
// 피죤투
// 7
// 또가스
// 8
// 메타몽
// 9

for (let i in value3) {
  console.log(i);
  console.log(value3[i]);
}
// 피카츄
// 10
// 라이츄
// 20
// 파이리
// 30
// 꼬부기
// 40
// 버터플
// 50
// 야도란
// 60
// 피죤투
// 70
// 또가스
// 80
// 메타몽
// 90

for (let i in 'hello world') {
  console.log(i);
}
//  0
//  1
//  2
//  3
//  4
//  5
//  6
//  7
//  8
//  9
//  10

for (let i in 'hello world') {
  console.log(i);
  console.log('hello world' [i]);
}
// 0
// h
// 1
// e
// 2
// l
// 3
// l
// 4
// o
// 5
// VM933: 3
// 6
// w
// 7
// o
// 8
// r
// 9
// l
// 10
// d

Object.keys(value3)
// (9)['피카츄', '라이츄', '파이리', '꼬부기', '버터플', '야도란', '피죤투', '또가스', '메타몽']
let 포켓몬 = Object.keys(value3);
for (let i of [10, 20, 30, 40]) {
  console.log(i);
}
// 10
// 20
// 30
// 40

for (let i of 'hello world') {
  console.log(i);
}
// h
// e
// l
// l
// o
// 
// w
// o
// r
// l
// d

for (let i of Object.entries(value3)) {
  console.log(i);
}
// ['피카츄', 10]
// ['라이츄', 20]
// ['파이리', 30]
// ['꼬부기', 40]
// ['버터플', 50]
// ['야도란', 60]
// ['피죤투', 70]
// ['또가스', 80]
// ['메타몽', 90]

for (let [i, j] of Object.entries(value3)) {
  console.log(i);
  console.log(j);
}
// 피카츄
// 10
// 라이츄
// 20
// 파이리
// 30
// 꼬부기
// 40
// 버터플
// 50
// 야도란
// 60
// 피죤투
// 70
// 또가스
// 80
// 메타몽
// 90

Object.entries(value3)
// (2)['피카츄', 10] 1: (2)['라이츄', 20] 2: (2)['파이리', 30] 3: (2)['꼬부기', 40] 4: (2)['버터플', 50] 5: (2)['야도란', 60] 6: (2)['피죤투', 70] 7: (2)['또가스', 80] 8: (2)['메타몽', 90]

for (let [i, j] of [
    [1, 2],
    [3, 4]
  ]) {
  console.log(i, j);
}
// 1 2
// 3 4

[
  [
    [1, 2], 2
  ],
  [
    [1, 2], 4
  ]
] // 구조분해할당
// [Array(2), Array(2)]

for (let [i, j] of [
    [
      [1, 2], 2
    ],
    [
      [1, 2], 4
    ]
  ]) {
  console.log(i, j);
}
// [1, 2] 2
// [1, 2] 4

for (let [
    [a, b], j
  ] of [
    [
      [1, 2], 2
    ],
    [
      [1, 2], 4
    ]
  ]) {
  console.log(a, b, j);
}
// 1 2 2
// 1 2 4

[a, b] = [10, 20]
a
10
b
20
  '10,20'.split(',')
  (2)['10', '20']
let [a, b] = '10,20'.split(',')
a
  '10'
b
  '20'

[a, b, ...c] = [10, 20, 30, 40, 50]
c
  (3)[30, 40, 50]
  [a, ...b, c] = [10, 20, 30, 40, 50] {
    name,
    age
  } = {
    name: 'hojun',
    age: '10'
  }
let obj = {
  name: 'hojun',
  age: '10'
}
let {
  name,
  age
} = obj
name
  'hojun'
age
  '10'
let {
  name2,
  age2
} = {
  name2: 'hojun',
  height2: '20',
  age2: '10'
}
name2
  'hojun'
age2
  '10'
let {
  aa,
  bb
} = {
  name2: 'hojun',
  height2: '20',
  age2: '10'
}
aa

bb


let {
  name3,
  ...rest
} = {
  name3: 'hojun',
  height3: '20',
  age3: '10'
}
rest {
  height3: '20',
  age3: '10'
}
let a = [10, 20, 30]

[1, 10, 20, 30, 2]
(5)[1, 10, 20, 30, 2]

a.push(2)
4
a
  (4)[10, 20, 30, 2]

a.unshift(1)
5
a
  (5)[1, 10, 20, 30, 2]

b = [1, a, 2]
b
  (3)[1, Array(5), 2]

b = [1, ...a, 2]
b
  (7)[1, 1, 10, 20, 30, 2, 2]

Math.max(3, 5, 1, 10, 8, 7)
10
let arr = [3, 5, 1, 10, 8, 7]

Math.max(arr)
NaN
Math.max(...arr)
10
let arr1 = [1, -2, 3, 4];
let arr2 = [8, 3, -8, 1];

Math.max(...arr1, ...arr2);
8
  [100, 200, ...arr1, ...arr2]
  (10)[100, 200, 1, -2, 3, 4, 8, 3, -8, 1]
let str = 'hello world' [...str]
  (11)['h', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd']
repeat('!', 100)

'!'.repeat(100)
'!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!' [...'!'.repeat(100)]
(100)['!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!']

let d = new Date();

d
d.getDate()
10
d.getMonth()
4
// 날짜는 1일부터, 월은 0부터

d.getDay() // 일요일 0부터
2
d.getSeconds()
7
d.getSeconds()
7
let d = new Date();

d.getSeconds()
49
d.getFullYear()
2022
d.getYear()
122
//사용하지 않음, 1900년도부터 연도 계산

let 변수 = [15, 22, 33, 111, 2]

for (let i of 변수) {
  console.log(i)
}
// VM4428:2 15
// VM4428:2 22
// VM4428:2 33
// VM4428:2 111
// VM4428:2 2
for (let i of 변수) {
  console.log('' + i)
}
// VM4446:2 15
// VM4446:2 22
// VM4446:2 33
// VM4446:2 111
// VM4446:2 2
'' + 10
  '10'
10 + ''
'10'
'!!' + 10
  '!!10'
10 + '!!'
'10!!'
'10' + 10
  '1010'
'10' * 2
20
  '!' * 2
NaN

for (let i of 변수) {
  console.log('' + i).split('')
}

for (let i of 변수) {
  let s = '' + i;
  console.log(s.split(''))
}
// VM4896:3 (2) ['1', '5']
// VM4896:3 (2) ['2', '2']
// VM4896:3 (2) ['3', '3']
// VM4896:3 (3) ['1', '1', '1']
// VM4896:3 ['2']

for (let i of 변수) {
  let s = '' + i;
  console.log(s.split(''))
}

// VM4915:3 (2) ['1', '5']
// VM4915:3 (2) ['2', '2']
// VM4915:3 (2) ['3', '3']
// VM4915:3 (3) ['1', '1', '1']
// VM4915:3 ['2']

let sum = 0
for (let i of 변수) {
  let s = '' + i;
  for (let j of s.split('')) {
    sum += +j
  }
}
console.log(sum)
VM5172: 8 21
변수
  (5)[15, 22, 33, 111, 2]

변수.map(x => '' + x)
  (5)['15', '22', '33', '111', '2']

변수.map(x => '' + x).join()
'15,22,33,111,2'

변수.map(x => '' + x).join().replaceAll(',', '')
'1522331112'

변수.map(x => '' + x).join().replaceAll(',', '').split('')
  (10)['1', '5', '2', '2', '3', '3', '1', '1', '1', '2']

변수.map(x => '' + x).join().replaceAll(',', '').split('').reduce((a, b) => (a, +b))
2
변수.map(x => '' + x).join().replaceAll(',', '').split('').reduce((a, b) => (+a, b))
'2'

변수.map(x => '' + x).join().replaceAll(',', '').split('').map(x => parseInt(x))
  (10)[1, 5, 2, 2, 3, 3, 1, 1, 1, 2]

변수.map(x => '' + x).join().replaceAll(',', '').split('').map(x => parseInt(x)).reduce((a, b) => (a, b))
2

변수.map(x => '' + x).join().replaceAll(',', '').split('').map(x => parseInt(x)).reduce((a, b) => ((a, b), 0))
0

변수.map(x => '' + x).join().replaceAll(',', '').split('').map(x => parseInt(x)).reduce((a, b) => (a + b))
21

변수.map(x => '' + x).join().replaceAll(',', '').split('').reduce((a, b) => (a + b))
'1522331112'

변수.map(x => '' + x).join().replaceAll(',', '').split('').reduce((a, b) => (a + +b))
'1522331112'

변수.map(x => '' + x).join().replaceAll(',', '').split('').reduce((a, b) => (+a + +b))
21

변수.map(x => '' + x).join('')
'1522331112'

변수.map(x => '' + x).join('').split('').reduce((a, b) => (+a + +b))
21

let sum = 0
for (let i of 변수) {
  i.split('').forEach(x => sum += +x)
}
console.log(sum)

let sum = 0
for (let i of 변수) {
  '' + i.split('').forEach(x => sum += +x)
}
console.log(sum)

'' + 33. split('')
  ('' + 33).split('')
  (2)['3', '3']
let sum = 0
for (let i of 변수) {
  ('' + i).split('').forEach(x => sum += +x)
}
console.log(sum)
// VM6276:5 21

let num = 0;
for (i of 변수) {
  if (i !== ',') {
    num = num + Number(i)
  }
}
console.log(num)
// VM6377:7 183

var str = [11, 22, 33, 111, 2].join('');
let result = 0;
for (let i = 0; i < str.length; i++) {
  result += parseInt(str[i], 10);
}

let str = 변수.join('');
let result = 0;
for (let i = 0; i < str.length; i++) {
  result += parseInt(str[i], 10);
}
21

function 안녕() {
  console.log('hello world')
}
for (let i = 0; i < 5; i++) {
  안녕()
}
// VM6635:2 hello worldfunction
// VM6635:2 hello world
// VM6635:2 hello world
// VM6635:2 hello world
// VM6635:2 hello world

안녕()

/*
땅파기()
기반다지기()
기둥세우기()
벽돌쌓기()
지붕올리기()
*/
// 1. 재사용성
// 2. 코드 구조 파악 용이
function 더해라(x, y) {
  return x + y
}
더해라(10, 20)
30
console.log('hello world')
VM7468: 1 hello world

function 다더해라(a, b, c) {
  let z = 50;
  return a + b + c + z
}

다더해라(10, 20, 30)
110
console.log(z)


function 다더해라2(a, b, c) {
  var z2 = 50;
  return a + b + c + z2
}

다더해라2(10, 20, 30)
110
console.log(z2)

var z3 = 50;

function 다더해라3(a, b, c) {
  return a + b + c + z3
}
다더해라3(10, 20, 30)
110
for (let ii = 0; ii < 5; ii++) {
  console.log(ii)
}
// VM8221:2 0
// VM8221:2 1
// VM8221:2 2
// VM8221:2 3
// VM8221:2 4

for (var iii = 0; iii < 5; iii++) {
  console.log(iii)
}
// VM8383:2 0
// VM8383:2 1
// VM8383:2 2
// VM8383:2 3
// VM8383:2 4

console.log(iii)
// VM8441: 1 5


// 복습

for (let i of [1, 2, 3]) {
  console.log(i)
}
// VM8687: 4 1
// VM8687: 4 2
// VM8687: 4 3

for (let i of 'hello') {
  console.log(i)
}
// VM8746: 2 h
// VM8746: 2 e
// VM8746: 2 l
// VM8746: 2 l
// VM8746: 2 o

for (let i of [
    [1, 2],
    [3, 4],
    [5, 6]
  ]) {
  console.log(i)
}
// VM8816: 2(2)[1, 2]
// VM8816: 2(2)[3, 4]
// VM8816: 2(2)[5, 6]

for (let [i, j] of [
    [1, 2],
    [3, 4],
    [5, 6]
  ]) {
  console.log(i, j)
}
// VM8862: 2 1 2
// VM8862: 2 3 4
// VM8862: 2 5 6

for (let i in [10, 20, 30]) {
  console.log(i)
}
// VM9017: 2 0
// VM9017: 2 1
// VM9017: 2 2

for (let i in {
    one: 1,
    two: 2,
    three: 3
  }) {
  console.log(i)
}
// VM9082: 2 one
// VM9082: 2 two
// VM9082: 2 three

let [i, j, k] = [10, 20, 30]

k
30
let [aa, bb] = [10, [10, 20]]

bb
  (2)[10, 20]
let {
  name,
  age
} = {
  name: 100,
  age: 10,
  height: 1
}

name
100
let x = [10, 20, 30]

[1, 2, x, 3]
(4)[1, 2, Array(3), 3] 0: 11: 22: (3)[10, 20, 30] 3: 3 length: 4[[Prototype]]: Array(0)[1, 2, ...x, 3]
  (6)[1, 2, 10, 20, 30, 3]
let {
  name,
  ...rest
} = {
  name: 100,
  age: 10,
  height: 1
}

rest {
  age: 10,
  height: 1
}
let [x, y] = [10, 20, 30, 40]

y
20
let [x, ...y] = [10, 20, 30, 40]

y
  (3)[20, 30, 40]
  [10, 20, ...y, 1000]
  (6)[10, 20, 20, 30, 40, 1000]

function 함수(x, y) {
  let z = x + y;
  return z
}

함수(10, 20)
30
document.write(함수(10, 20))
document.write(함수(100, 200))
console.log(z)


let z = 함수(10, 20)

z
30


//화살표 함수

function 함수1(x, y) {
  return x + y
}

let 함수2 = (x, y) => x + y;

함수1(10, 20)
30
함수2(100, 200)
300
let 함수3 = (x, y) => {
  let z = x + y;
  return z
}

함수3(30, 30)
60
  [10, 20, 30].filter(x => x >= 20)
  (2)[20, 30]

function 그냥함수(x) {
  return x >= 20
}

그냥함수(10)
false
그냥함수(20)
true
  [10, 20, 30].filter(그냥함수)
  (2)[20, 30]

function 함수4(a, b, c) {
  c(a + b)
}

함수4(10, 100, console.log)

function 함수5(x, y, c) {
  // 1000줄의 코드
  c(x + y); //언젠가가 지금! 지금 너를 호출해줄게! 콜백!
  // 1000줄의 코드
  return x + y;
}

function aa(s) {
  document.write('콜백함수', s);
}

sum(10, 20, aa);

function 안녕() {
  console.log('hello world 1');
  console.log('hello world 2');
  console.log('hello world 3');
}

console.log(안녕())
// VM12292: 2 hello world 1
// VM12292: 3 hello world 2
// VM12292: 4 hello world 3
// VM12360: 1

function 안녕() {
  console.log('hello world 1');
  console.log('hello world 2');
  console.log('hello world 3');
  return
}

console.log(안녕())
// VM12413: 2 hello world 1
// VM12413: 3 hello world 2
// VM12413: 4 hello world 3
// VM12419: 1

function 안녕2() {
  document.write('1');
  document.write('2');
  document.write('3');
}

안녕2()

function 제곱(x) {
  return x ** 2
}
document.write(제곱(5))

function test1() {
  return 'hello 1'
}

let test2 = function () {
  return 'hello 2'
}

let test3 = () => 'hello3'

test1.name 'test1'
test2.name 'test2'
test3.name 'test3'
test1
ƒ test1() {
  return 'hello 1'
}
console.dir(test1)


(function 이름() {
  console.log('hello world')
}())
// VM13254: 2 hello world

(function () {
  console.log('hello world')
}())
// VM13270: 2 hello world

// 즉시 실행 함수

이름()
// VM13388: 1 Uncaught ReferenceError: 이름 is not defined
// at < anonymous >: 1: 1(익명) @ VM13388: 1(
  let x = 10;
  let y = 20; console.log(x + y)
)
VM13544: 2 Uncaught SyntaxError: Unexpected identifier(function 이름2() {
  let x = 10;
  let y = 20;
  console.log(x + y)
}())
// VM13590: 4 30

x
// VM13671: 1 Uncaught ReferenceError: x is not defined
// at < anonymous >: 1: 1(익명) @ VM13671: 1
// 모든 요소들이 로드된 이후에 실행, 함수는 1개만 실행 가능
// window.onload = function(){}

// $(document).ready() // 위와 같은 기능을 하는 jquery 문법

function 함수6(x, y, c) {
  // 1000줄의 코드
  c(x + y); //언젠가가 지금! 지금 너를 호출해줄게! 콜백!
  // 1000줄의 코드
  return x + y;
}

function aa(s) {
  document.write('콜백함수', s);
}

함수6(10, 20, aa);
30

function 함수7(a, b, c) {
  console.log(a, b, c)
}

함수7(10, 20)
// VM14528: 2 10 20

함수7(10, 20, 30, 40, 50)
// VM14528: 2 10 20 30

function 함수7(a, b, ...c) {
  console.log(a, b, c)
}

함수7(10, 20, 30, 40, 50)

function test(a = 10, b = 20, c = 30) {
  return a, b, c
}
test()
30
test(100)
30
test(100, 200, 300)
300

function test(a = 10, b = 20, c = 30) {
  return a + b + c
}
test()
60
test()
60
test(100)
150
test(100, 200)
330
test(100, 200, 300)
600

function factorial(n) {
  return n * n - 1
}

factorial(5)
24

function factorial(n) {
  return n * (n - 1)
}

factorial(5)
20

function factorial(n) {
  if (n <= 1) {
    return n
  }
  return n * factorial(n - 1)
}

factorial(5)
120
let s = 0;
for (let i = 1; i < 6; i++) {
  s *= i
}
s
0
let s = 1;
for (let i = 1; i < 6; i++) {
  s *= i
}
s
120

function factorial(n) {
  if (n <= 1) {
    return n
  }
  return n * factorial(n - 1)
}

let s = 1;
for (let i = 1; i < 6; i++) {
  s *= i
}
s
120
let s = 1;
for (let i = 5; i > 0; i--) {
  s *= i
}
s
120

function sigma(n) {
  if (n <= 1) {
    return n
  }
  return n + sigma(n - 1)
}

sigma(100)
5050
  'hello world'
'hello world'
for (let i of 'hello world') {
  console.log(i);
}
// VM15985: 2 h
// VM15985: 2 e
// VM15985: 2 l
// VM15985: 2 l
// VM15985: 2 o
// VM15985: 2
// VM15985: 2 w
// VM15985: 2 o
// VM15985: 2 r
// VM15985: 2 l
// VM15985: 2 d

let s = ''
for (let i of 'hello world') {
  s = i + s
}
'dlrow olleh'
s
  'dlrow olleh'
'hello world'.slice(1)
'ello world'
'ello world'.slice(1)
'llo world'
'llo world'.slice(1)
'lo world'

function reverse(text) {
  text += ''
  if (text.length <= 1) {
    return text
  }
  return reverse(text.slice(1)) + text[1]
}

reverse('hello world')
// 'ddlrow olle'

function reverse(text) {
  text += ''
  if (text.length <= 1) {
    return text
  }
  return reverse(text.slice(1)) + text[0]
}

reverse('hello world')
// 'dlrow olleh'
let arr = [10, 20, 30]

function 함수(value) {
  value[0] = 1000
}
함수(arr)

// arr
  (3)[1000, 20, 30]

let x = 0

function 함수200(value) {
  value = 1000
}
함수200(x)

x
0
let a = {}

function 함수300(b) {
  b = 1000;
}
함수300(a)

a {}
let a = []

function 함수400(b) {
  b = 1000;
}
함수400(a)

// a
//   []

function factorial(n) {
  if (n >= 1) {
    return n
  }
  return n * factorial(n - 1)
}

// call by value는 값의 전달
let a = 1

function test(x) {
  x = 1000
}
test(a)
console.log(a)
// VM17827: 7 1

// call by reference(실제로는 call by value)
let arr = [10, 20, 30]

function test2(x) {
  x[0] = 1000
}
test2(arr)
console.log(arr)
// VM18206: 7(3)[1000, 20, 30]

function factorial(n) {
  if (n <= 1) {
    return n
  }
  return n * factorial(n - 1)
}