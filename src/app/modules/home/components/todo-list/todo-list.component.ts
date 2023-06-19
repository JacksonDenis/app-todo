import { Component, OnInit, DoCheck } from '@angular/core';
//interface
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit, DoCheck {

  public taskList: Array<TaskList> = JSON.parse(localStorage.getItem("list") || "[]");

  constructor() { }

  ngDoCheck() {
    this.setLocalStorage()
  }

  ngOnInit(): void { }

  public deleteItemTaskList(event: number) {
    this.taskList.splice(event, 1);
  };

  public setEmitTaskList(event: string){
    this.taskList.push({ task:event, checked: false })

  }

  public deleteAllTaskList() {
    const confitm = window.confirm("Você tem certeza de deletar tudo?")

    if(confitm){
      this.taskList = [];
    }
  }

  public validationIput(event:string, index:number) {
    if (!event.length){
      const confirm = window.confirm("Task está vazia , deseja deletar");
      if(confirm){
        this.deleteItemTaskList(index);
      }

    }
  }

  public setLocalStorage(){
    if(this.taskList){
      this.taskList.sort( (first, last) => Number(first.checked) - Number(last.checked) );
      localStorage.setItem("list", JSON.stringify(this.taskList))
    }
  }
}
