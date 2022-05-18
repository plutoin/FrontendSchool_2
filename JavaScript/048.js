// 간단한 투두 리스트 기능 구현해 보기
// 1. 해야 할 일 Todo 클래스(내용, 상태 두 가지 프로퍼티를 가집니다.)
// 2. Todo 클래스는 상태를 변경하는 changeState 메서드를 가집니다.
// 3. 할 일의 목록을 관리하는 관리자를 추상화한 TodoManager 클래스 (할일 목록을 프로퍼티로 가집니다.)
// 4. 할 일을 저장하고(addItem), 할 일의 목록을 보여 주며(getItems), 할 일의 남은 갯수를 반환하는(getLeftTodoCount) 세 가지 메소드를 가집니다.

class Todo {
  constructor(task, status = false) {
    this.task = task;
    this.status = status;
  }
  changeState() {
    if(this.status == true) {
      this.status = false
    } else {
      this.status = true
    }
    // this.status = this.status === false ? true : false;
  }
}

class TodoManager {
  constructor() {
    this.todos = [];
  }
  addItem(task) {
    this.todos.push(new Todo(task));
  }
  getItems() {
    return this.todos;
  }
  getLeftTodoCount() {
    return this.todos.filter(task => task.status === false).length
  }
}

const todoList = new Todo('공부하기');
const todos = new TodoManager()