import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Task } from './task';
@Injectable({
  providedIn: 'root'
})
export class MessageserviceService {
  // tasks: Task[]=[];
public message = new Subject<Task[]>();
  constructor() { }
  setMessage(data:Task[])
  {
    this.message.next(data);
  }
}
