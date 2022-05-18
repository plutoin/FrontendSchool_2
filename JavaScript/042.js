function Robot(name) {
  this.name = name;
}

Robot.prototype.sayYourName = function () {
  console.log(`삐리비리. 제 이름은 ${this.name}입니다. 주인님.`);
}

const bot1 = new Robot('재현');

class RobotClass {
  constructor(name) {
    this.name = name;
  }
  sayYourName() {
    console.log(`삐리비리. 제 이름은 ${this.name}입니다. 주인님.`);
  }
}

const botClass1 = new RobotClass('브랜든');