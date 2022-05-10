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
// VM1368: 2
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

  [[
    [1, 2], 2
  ], [
    [1, 2], 4
  ]] // 구조분해할당
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