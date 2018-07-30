import { Component, OnInit } from '@angular/core';
import {Task} from '../task'
import {ApiService} from '../api.service';
import {MessageserviceService} from '../messageservice.service'

@Component({
  selector: 'app-add-task',

  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
  providers: [ApiService]
})
export class AddTaskComponent implements OnInit {

tasks: Task[] = [];
newtask: Task = new Task();
// task: Task = {
// title:'string',
// description:' string',
// date:'string',
// status:0
// };
  constructor(private apiservice: ApiService,public messageService:MessageserviceService) {

  }
  setMessage(sharedtask:Task[]) {
    // console.log(sharedtask);
    this.messageService.setMessage(sharedtask);
  }


  ngOnInit() {

    this.apiservice
      .getAllTodos()
      .subscribe(
        (task) => {
          this.tasks = task;
          console.log("on init app component",this.tasks);
          this.setMessage(this.tasks);
        }
      );
        // console.log("after init",this.tasks);

  }

  onAddTodo() {
    this.apiservice
      .createTodos(this.newtask)
      .subscribe(
        (newtask) => {
          this.tasks = this.tasks.concat(newtask);
          console.log("on add component",this.tasks);
          this.setMessage(this.tasks);
        }
      );
      // console.log("after add",this.tasks);
this.newtask.title="";
this.newtask.description="";
this.newtask.date="";
  }

  onToggleTodoComplete(task) {
    this.apiservice
      .toggleTodoComplete(task)
      .subscribe(
        (updatedTodo) => {
          task = updatedTodo;
          console.log("on toggle component",this.tasks);
        }
      );
      this.setMessage(this.tasks);
  }


}
