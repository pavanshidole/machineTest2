import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Itodo } from '../../module/todo';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnInit {

  todoArray:Array<Itodo>=[
    // {
    //   todoItem:"html5",
    //   todoId:"1234",
    // }
  ]

  uuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'
    .replace(/[xy]/g, function (c) {
        const r = Math.random() * 16 | 0, 
            v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

  @ViewChild('todoitem') todoitem!:ElementRef;
  constructor() { }

  ngOnInit(): void {
  }

  onTodoAdd(){
    let newtodo:Itodo={
      todoItem:this.todoitem.nativeElement.value,
      todoId:this.uuid()
    }
    
    this.todoitem.nativeElement.value='';
    this.todoArray.push(newtodo);
  }

}
