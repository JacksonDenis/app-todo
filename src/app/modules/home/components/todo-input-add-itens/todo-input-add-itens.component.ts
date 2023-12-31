import { Component , EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-input-add-itens',
  templateUrl: './todo-input-add-itens.component.html',
  styleUrls: ['./todo-input-add-itens.component.scss']
})
export class TodoInputAddItensComponent  implements OnInit {

    @Output() public emmitItemTaskList = new EventEmitter();
    public addItemTaskList: String = "";
    constructor() {}
    ngOnInit(): void {}

    public submitItemTaskList(){
      this.addItemTaskList = this.addItemTaskList.trim();
      if(this.addItemTaskList){
        this.emmitItemTaskList.emit(this.addItemTaskList);
        this.addItemTaskList="";
      }
    }
}
