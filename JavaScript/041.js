// 모듈 패턴
function Person() {
  let age = 15;
  return {
    getAge: function () { return age },
    setAge: function () { age = data }
  }
}

const person = Person();
console.log(person.getAge());
console.log(person.age);
person.setAge(40)
console.log(person.getAge());

function PersonType() {
  this.age = 35;
}

PersonType.prototype.getAge = function () {
  return this.age
}

const person2 = new PersonType();
console.log(person2.getAge());

// 모듈 + 사용자 정의 타입 혼합 패턴, 비공개 변수 포함한 타입 생성할 때 사용
function PersonType2() {
  let age = 25;
  function innerPersonType() {}
  innerPersonType.prototype.getAge = function () {
    return age;
  }
  return innerPersonType;
}

const Person3 = PersonType2();  // innerPersonType 함수 할당
const person3 = new Person3();
console.log(person3.getAge());

// IIFE로 작성해 보기
const PersonType3 = (
  function () {
      let age = 15;
      function innerPersonType() { }
      innerPersonType.prototype.getAge = function () {
          return age;
      }
      return innerPersonType;
  }
)();

const personWithSecret = new PersonType3();
console.log(personWithSecret.getAge());