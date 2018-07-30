import { Component, OnInit } from '@angular/core';
import {Task} from '../task';
import {MessageserviceService} from '../messageservice.service';
import { Subscription } from 'rxjs/Subscription';
@Component({
  selector: 'app-tasksearch',
  templateUrl: './tasksearch.component.html',
  styleUrls: ['./tasksearch.component.css']
})
export class TasksearchComponent implements OnInit {
  tasks: Task[]=[];
  filteredtasks:Task[]=[];
  subscription: Subscription;

  constructor(public messageService:MessageserviceService) { }

  ngOnInit() {

    this.subscription = this.messageService.message.subscribe(
      (message) => {
        this.tasks = message;
        this.filteredtasks=message;
      }
    );
    for(let task of this.filteredtasks){
      task.date=(new Date(task.date)).toLocaleDateString();
      console.log(task.date);
    }

  }

  onSearchTitle(searchValue : string ) {
    // console.log(searchValue);
  this.filteredtasks=this.tasks.filter(task => task.title.startsWith(searchValue));

}
onSearchDesc(searchValue : string ) {
  // console.log(searchValue);
  // console.log(this.tasks);
this.filteredtasks=this.tasks.filter(task => task.description.startsWith(searchValue));
}
onSearchDate(searchValue : string ) {
console.log(searchValue);
//  tempDate = this.task.date | date;
// console.log(tempDate);
this.filteredtasks=this.tasks.filter(task => (new Date(task.date).toLocaleDateString()).startsWith(searchValue));}
}
