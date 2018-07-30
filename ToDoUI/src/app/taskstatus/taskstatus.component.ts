import { Component, OnInit,Input } from '@angular/core';
import {Task} from '../task';
import {ApiService} from '../api.service';
import {MessageserviceService} from '../messageservice.service';
import { Subscription } from 'rxjs/Subscription';
@Component({
  selector: 'app-taskstatus',
  templateUrl: './taskstatus.component.html',
  styleUrls: ['./taskstatus.component.css'],
  providers: [ApiService]
})
export class TaskstatusComponent implements OnInit {
tasks: Task[]=[];
subscription: Subscription;
  constructor(private apiservice: ApiService,public messageService:MessageserviceService) { }

  ngOnInit() {
    this.subscription = this.messageService.message.subscribe(
      (message) => {
        this.tasks = message;
      }
    );

    // this.ApiService
    //   .getAllTodos()
    //   .subscribe(
    //     (task) => {
    //       this.tasks = task;
    //       console.log(this.tasks)
    //     }
    //   );
  }

}
