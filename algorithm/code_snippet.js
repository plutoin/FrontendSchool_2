// 플랫폼에 익숙해져야 합니다. 프로그래머스, 구름EDU
//  - 사용 가능 라이브러리는 미리 확인!
// 언어 선택 (속도 : c++, 풀이 : python)
// 코드 스네펫(트리, 검색, 순열, 조합, 최단경로(예를 들어 다익스트라)), Cheat sheet와 A4용지는 미리 준비
// 유용한 라이브러리는 미리 정리
// 예외처리 기억해두세요!

// 5 ~ 6시간
// 6 ~ 7문제

// 30분씩 4문제
// 2시간씩 2문제

// 자료구조와 알고리즘
// 자료구조 : 데이터를 담는 구조
// 알고리즘 : 문제를 해결하는 방법(절차)
// 빅오(O) : O(1), O(n), O(N**2), O(N**3) 
//           시간복잡도(시간), 공간복잡도(메모리)

// while (1 < a) {
//     s += a
//     a++
// }

// while (1 < a) {
//     s += a
//     a++
//     while (1 < b) {
//         s += b
//         b++
//     }
// }


// 몸풀기 2문제

// https://codingdojang.com/scode/393?langby=javascript#answer-filter-area
// 1부터 10,000까지 8이라는 숫자가 총 몇번 나오는가?

// 8이 포함되어 있는 숫자의 갯수를 카운팅 하는 것이 아니라 8이라는 숫자를 모두 카운팅 해야 한다.
// (※ 예를들어 8808은 3, 8888은 4로 카운팅 해야 함)

// 빈 배열을 만드는 방법

Array(10);
let x = Array(10)
x[2] = null
x[3] = undefined
x
// [비어 있음 × 2, undefined, null, 비어 있음 × 6]
x.length = 20;
x
// [비어 있음 × 2, undefined, null, 비어 있음 × 16]
Array(10).fill(0);
Array(10).fill(10);
// Array(100).fill().map((_, i) => i + 1)
// [...Array(100)].map((_, i) => i + 1)
Array(100).fill(1).map((value, index) => value + index);
'.'.repeat(10);
'.'.repeat(10).split('.');
'.'.repeat(9).split('.');
Array.from('abc');
Array.from('a'.repeat(10));
Array.from('ab'.repeat(10));

// 몸풀기 2문제 - 1번 정답
// 정답
Array(100).fill(1).map((value, index) => value + index);
Array(100).fill(1).map((value, index) => value + index) + '';
(Array(100).fill(1).map((value, index) => value + index) + '').split('8');
'128148123881'.split('8')
  (Array(100).fill(1).map((value, index) => value + index) + '').split('8').length - 1;
(Array(10000).fill(1).map((value, index) => value + index) + '').split('8').length - 1; // 4000개, 답
'128148123881'.split(/8/g)


///////////////////////////////////
// https://codingdojang.com/scode/408?langby=javascript#answer-filter-area
// 1차원의 점들이 주어졌을 때, 그 중 가장 거리가 짧은 것의 쌍을 출력하는 함수를 작성하시오. (단 점들의 배열은 모두 정렬되어있다고 가정한다.)

// 예를들어 S={1, 3, 4, 8, 13, 17, 20} 이 주어졌다면, 결과값은 (3, 4)가 될 것이다.

// 2번 정답
let s = [1, 3, 4, 8, 13, 17, 20]
for (let i = 0; i < s.length; i++) {
  console.log(s[i]);
}

for (let i = 0; i < s.length; i++) {
  console.log(s[i + 1] - s[i]);
}

//다른 언어, but js에서는 -1안해줘도 error가 안남
for (let i = 0; i < s.length - 1; i++) {
  console.log(s[i + 1] - s[i]);
}

// 1번부터 시작해서 마지막까지
for (let i = 1; i < s.length; i++) {
  console.log(s[i] - s[i - 1]);
}

let s = [1, 3, 4, 8, 13, 17, 20]
let arr = []
for (let i = 1; i < s.length; i++) {
  arr.push(s[i] - s[i - 1]);
}
arr

let index = arr.indexOf(Math.min(...arr))
console.log(s[index], s[index + 1])

// const zip = a => a.map((v, i) => [v, i]);

const zip = (a, b) => a.map((value, index) => [value, b[index]]);
const zip = (a, b) => a.map((v, i) => [v, b[i]]);


zip([100, 200, 300], [10, 20, 30])
zip([100, 200, 300], [10, 20, 30, 40, 50, 60])
zip([100, 200, 300, 400, 500, 600], [10, 20, 30])

zip([100, 200, 300, 400, 500, 600], 'hello')


[1, 3, 4, 8, 13, 17, 20]
[1, 3, 4, 8, 13, 17] // s.slice(0, s.length-1)
[3, 4, 8, 13, 17, 20] // s.slice(1)
let pairs = zip(s.slice(0, s.length - 1), s.slice(1))

function 비교(a, b) {
  if (a[1] - a[0] < b[1] - b[0]) {
    return -1
  }
  if (a[1] - a[0] > b[1] - b[0]) {
    return 1
  }
  return 0;
}

pairs.sort(비교)
pairs.sort(비교)[0]

//////// 쉬운 풀이 /////////

let s = [1, 3, 4, 8, 13, 17, 20];

const zip = (a, b) => a.map((v, i) => [v, b[i]]);
let pairs = zip(s.slice(0, s.length - 1), s.slice(1))

// 초기값, for문 안에서는 최솟값을 비교하는 용도로 사용
// MAX_SAFE_INTEGER를 주로 사용합니다!
// let init = Number.MAX_SAFE_INTEGER;
// let init = Number.MIN_SAFE_INTEGER;
let init = pairs[0][1] - pairs[0][0];
// result는 최종 결과값
let result = [];

for (let i of pairs) {
  // console.log(i);
  if (init > i[1] - i[0]) {
    init = i[1] - i[0]
    result = i;
  }
}

console.log(result)

// 몸풀기 끝 //



// 목차(기본 자료구조 및 알고리즘)
// 1. 스택과 큐
// 2. 연결리스트(linked list)
// 3. 정렬
// 3.1 선택정렬
// 3.2 삽입정렬
// 3.3 병합정렬
// 3.4 퀵정렬
// 4. 페이지 교체 알고리즘
// 5. 트리와 그래프
// 6. 트리의 순회

class Stack {
  constructor() {
    this.arr = []
    this.length = 0
  }

  push(data) {
    this.arr.push(data)
    this.length += 1
  }

  pop(index) {
    if (index > this.arr.length - 1) {
      this.length -= 1
      return this.arr.pop()
    }
    let result = this.arr.splice(index, 1)
    this.length -= 1
    return result
  }
  top() {
    return this.arr[this.arr.length - 1]
  }

  bottom() {
    return this.arr[0]
  }

  display() {
    return this.arr
  }
}

let s = new Stack()
s.push(10)
s.push(20)
s.push(30)
s.push(40)
s.push(50)
s.push(60)
s.push(70)
s.pop(2)
console.log(s)
console.log(s.length)

// 2. 연결리스트(linked list)
// 2.1 첫번째 시간
// 연결리스트, 메모리 효율을 위해 사용되는 경우가 많음
// js에서는 그다지 메모리 효율이 좋지 못함
// 개념 : https://en.wikipedia.org/wiki/Linked_list
// 알고리즘 시각화 : https://visualgo.net/ko

// 연결리스트의 기본 형태
const list = {
  head: {
    value: 12,
    next: {
      value: 99,
      next: {
        value: 37,
        next: null
      }
    }
  }
}

// 문제)
// head -> [90, next] -> [2, next] -> [77, next] -> [35, next] -> [21, next] -> null
// 35를 출력해주세요.

const list = {
  head: {
    value: 90,
    next: {
      value: 2,
      next: {
        value: 77,
        next: {
          value: 35,
          next: {
            value: 21,
            next: null
          }
        }
      }
    }
  }
}
list.head.next.next.next.value


// step 1 노드 생성
class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

노드1 = new Node(10)
노드2 = new Node(20)
노드3 = new Node(30)

노드1.data
노드1.next = 노드2
노드2.next = 노드3
노드1.next.next.data
//30


// step 2 자동으로 다음 노드가 연결되는 linked list 구현

class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

// head -> ['init', next]
//               ↑ 
//              tail

// head -> ['init', next] -> [90, next]
//                               ↑ 
//                              tail
class LinkedList {
  constructor() {
    let init = new Node('init')
    this.head = init
    this.tail = init
  }

  append(data) {
    let 새로운노드 = new Node(data)
    // 마지막 값(null)은 새로운 노드가 됨
    this.tail.next = 새로운노드
    // 마지막 노드는 새로운 노드가 됨
    this.tail = 새로운노드
  }
}

l = new LinkedList()
l.append(1)
l.append(2)
l.append(3)
l.append(10)
l.append(20)
l.append(30)

// l.head
// l.head.next.data
// l.head.next.next.data
// l.head.next.next.next.data

/*
// 1번 단계
head -> [init, null]
            ↑ 
            tail


// 2번 단계
head -> [init, next] -> [1, null]
                            ↑ 
                            tail
*/




// step 3 length 구현

class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

class LinkedList {
  constructor() {
    let init = new Node('init')
    this.head = init
    this.tail = init

    this.데이터수 = 0
  }

  length() {
    return this.데이터수
  }

  append(data) {
    let 새로운노드 = new Node(data)
    this.tail.next = 새로운노드
    this.tail = 새로운노드

    this.데이터수 += 1
  }
}

l = new LinkedList()
l.append(1)
l.append(2)
l.append(3)
l.append(10)
l.append(20)
l.append(30)
l.length()



// step 4 toString 구현

class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

class LinkedList {
  constructor() {
    let init = new Node('init')
    this.head = init
    this.tail = init

    this.데이터수 = 0
    this.데이터들 = ''
  }

  length() {
    return this.데이터수
  }

  toString() {
    // return 'hello world'
    // return '[1, 2, 3, 10, 20, 30]'

    // 아래와 같이 구현했을 때 삭제가 문제가 됩니다.
    return '[' + this.데이터들.slice(0, -2) + ']'

  }

  append(data) {
    let 새로운노드 = new Node(data)
    this.tail.next = 새로운노드
    this.tail = 새로운노드

    this.데이터수 += 1
    this.데이터들 += `${data}, `
  }
}

l = new LinkedList()
l.append(1)
l.append(2)
l.append(3)
l.append(10)
l.append(20)
l.append(30)
l.length()



// step 4 toString을 arr로 구현

class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

class LinkedList {
  constructor() {
    let init = new Node('init')
    this.head = init
    this.tail = init

    this.데이터수 = 0
    this.데이터들 = []
  }

  length() {
    return this.데이터수
  }

  toString() {
    // return 'hello world'
    // return '[1, 2, 3, 10, 20, 30]'

    // 아래와 같이 구현했을 때 삭제가 문제가 됩니다.
    return '[' + this.데이터들.toString() + ']'

  }

  append(data) {
    let 새로운노드 = new Node(data)
    this.tail.next = 새로운노드
    this.tail = 새로운노드

    this.데이터수 += 1
    this.데이터들.push(data)
  }
}

l = new LinkedList()
l.append(1)
l.append(2)
l.append(3)
l.append(10)
l.append(20)
l.append(30)
l.length()
l.toString()




// step 5 (중요) toString을 순회하면서 추가!!

class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

class LinkedList {
  constructor() {
    let init = new Node('init')
    this.head = init
    this.tail = init

    this.데이터수 = 0
  }

  length() {
    return this.데이터수
  }

  toString() {
    let 순회용현재노드 = this.head
    순회용현재노드 = 순회용현재노드.next

    let 데이터들 = ''
    for (let i = 0; i < this.데이터수; i++) {
      데이터들 += `${순회용현재노드.data}, `
      순회용현재노드 = 순회용현재노드.next
    }

    return '[' + 데이터들.slice(0, -2) + ']'
  }

  append(data) {
    let 새로운노드 = new Node(data)
    this.tail.next = 새로운노드
    this.tail = 새로운노드

    this.데이터수 += 1
  }
}

l = new LinkedList()
l.append(1)
l.append(2)
l.append(3)
l.append(10)
l.append(20)
l.append(30)
l.length()
l.toString()




// step 6 data를 arr로 만들기

class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

class LinkedList {
  constructor() {
    let init = new Node('init')
    this.head = init
    this.tail = init

    this.데이터수 = 0
  }

  length() {
    return this.데이터수
  }

  toString() {
    let 순회용현재노드 = this.head
    순회용현재노드 = 순회용현재노드.next

    let 데이터들 = ''
    for (let i = 0; i < this.데이터수; i++) {
      데이터들 += `${순회용현재노드.data}, `
      순회용현재노드 = 순회용현재노드.next
    }

    return '[' + 데이터들.slice(0, -2) + ']'
  }

  // data를 얻기 위한 메서드, data를 넣기 위한 메서드는 getter와 setter를 사용을 권고합니다.
  fullData() {
    return JSON.parse(this.toString())
  }

  append(data) {
    let 새로운노드 = new Node(data)
    this.tail.next = 새로운노드
    this.tail = 새로운노드

    this.데이터수 += 1
  }
}

l = new LinkedList()
l.append(1)
l.append(2)
l.append(3)
l.append(10)
l.append(20)
l.append(30)
l.length()
l.toString()
l.fullData()



// step 7 node 삽입하기

class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

class LinkedList {
  constructor() {
    let init = new Node('init')
    this.head = init
    this.tail = init

    this.데이터수 = 0
  }

  length() {
    return this.데이터수
  }

  toString() {
    let 순회용현재노드 = this.head
    순회용현재노드 = 순회용현재노드.next

    let 데이터들 = ''
    for (let i = 0; i < this.데이터수; i++) {
      데이터들 += `${순회용현재노드.data}, `
      순회용현재노드 = 순회용현재노드.next
    }

    return '[' + 데이터들.slice(0, -2) + ']'
  }

  // data를 얻기 위한 메서드, data를 넣기 위한 메서드는 getter와 setter를 사용을 권고합니다.
  fullData() {
    return JSON.parse(this.toString())
  }

  append(data) {
    let 새로운노드 = new Node(data)
    this.tail.next = 새로운노드
    this.tail = 새로운노드

    this.데이터수 += 1
  }

  insert(index, data) {
    let 순회용현재노드 = this.head
    순회용현재노드 = 순회용현재노드.next

    for (let i = 0; i < index - 1; i++) {
      순회용현재노드 = 순회용현재노드.next
    }

    let 새로운노드 = new Node(data)
    새로운노드.next = 순회용현재노드.next
    순회용현재노드.next = 새로운노드

    this.데이터수 += 1
  }
}

l = new LinkedList()
l.append(1)
l.append(2)
l.append(3)
l.append(10)
l.append(20)
l.append(30)
l.length()
l.toString()
console.log(l.fullData())
l.insert(3, 1000)
console.log(l.fullData())