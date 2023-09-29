import { Component } from '@angular/core';
import { Todo } from './common/models/todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-todo';

  todoList: Todo[] = [];

  todo: Todo = this.emptyTodo;

  get emptyTodo(): Todo {
    return {
      id: null,
      title: '',
    };
  }

  addTodo(): void {
    if (this.todo.id) {
      this.todoList = this.todoList.map((td) => {
        if (td.id === this.todo.id) {
          td.title = this.todo.title;
        }
        return td;
      });
      this.todo = this.emptyTodo;
    } else {
      this.todo.id = Date.now();
      this.todoList.push({ ...this.todo });
      this.todo = this.emptyTodo;
    }
  }

  editTodo(todo: Todo): void {
    this.todo = { ...todo };
  }

  deleteTodo(id: number) {
    this.todoList = this.todoList.filter((td) => td.id !== id);
  }
}
