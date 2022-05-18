class Sausage {
  constructor(taste1, taste2) {
    this.taste1 = taste1;
    this.taste2 = taste2;
  }
  taste() {
    console.log(`${this.taste1}와 ${this.taste2}의 맛이 난다!`);
  }
}

class FireSausage extends Sausage {
  constructor(taste1, taste2, taste3) {
    super(taste1, taste2)
    this.taste3 = taste3;
  }
  taste() {
    console.log(`${this.taste1}와 ${this.taste2}의 맛이 난다! ${this.taste3}맛이 난다!`);
  }
}

const sausage = new Sausage('소고기', '파')
const firesausage = new FireSausage('소고기', '파', '불')