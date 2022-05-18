// const me = {
//   name: '홍길동',
//   address: '서울특별시 마포구 와우산로',
//   age: 20,
//   hobby: function () {
//     console.log('영화 보기')
//     console.log('음악 디깅')
//     console.log('바이닐 수집')
//   },
//   vinyl: function (item) {
//     item.buy();
//   }
// }

// const item = {
//   item: 20,
//   buy: function () {
//     this.item++;
//   }
// }

class Me {
  constructor(name, address, age, hobby) {
    this.name = '길동';
    this.address = '서울특별시 마포구 와우산로';
    this.age = 20;
    this.hobby = '바이닐 수집'
  }
  hobby() {
    console.log(`제 취미는 ${this.hobby}입니다.`)
  }
  vinyl = function(item) {
    item.buy();
  }
}

class Item {
  constructor(item) {
    this.item = 20;
  }
  buy = function() {
    this.item++
  }
}

const Me1 = new Me();
const item = new Item();