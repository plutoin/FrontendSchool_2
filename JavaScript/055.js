  // case.1
  var me = {
    age: 30
  };
  var you = me;
  // 이제 { age: 30 }를 참조하는 카운트는 2입니다.

  me = null;
  // 이제 { age: 30 }를 참조 카운트는 1입니다.
  you = null;
  // 이제 { age: 30 }를 참조 카운트는 0입니다. 가비지 컬랙션의 대상이 됩니다.


  // case.2
  var x = {
    y: {
      z: 1
    }
  }

  // x 가 참조하는 객체를 object1, y가 참조하는 객체를 object2라고 하겠습니다.

  var a = x; // object1 참조카운트 : 2 (x, a)
  x = 1; // object1 참조카운트 : 1 (a)

  var b = a.y; // object2 참조 카운트 : 2 (a.y, b)
  a = 2; // object1 참조 카운트 : 0, object2 참조 카운트 : 1(b)

  // 이제 object1 은 참조 카운트가 0 이므로 제거되야 하지만
  // b 변수가 object1 안의 object2 객체를 참조하기 때문에 object1 객체는 제거되지 않습니다. 이렇게 불필요하게 남아있는 object1객체가 있는 경우 메모리 누수(memory leak)가 발생했다고 합니다. 


  // case.3 클로져 메모리 누수
  function outer() {
    let privateVal = ['test'];

    function getPrivate() {
      return privateVal;
    }

    return getPrivate;
  }

  const getPrivate = outer();
  const secretVal = getPrivate();

  console.log(secretVal);

  // 사용을 마친 secretVal 은 나중에 null 혹은 undefined와 같은 다른 값을 할당하여 클로져 공간과의 연결을 제거하여야 합니다. 
  // 가비지 컬렉터에게는 null, undefined를 구분하지 않습니다. 연결이 끊어져 있다는것이 더 중요합니다.