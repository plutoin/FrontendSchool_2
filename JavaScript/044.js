class Robot {
  constructor (name) {
    this.name = name;
  }
  sayYourName() {
    console.log(`삐리비리. 제 이름은 ${this.name}입니다. 주인님.`);
  }
}

class BabyRobot extends Robot {
  constructor(name) {
    super(name)
    this.ownName = '아이크'
  }

  sayBabyName() {
    this.sayYourName();
    console.log('Sucedding you, Father!');
  }
}

const baby = new BabyRobot('제이크')