import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient} from '@angular/common/http';
import { Task } from './task';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import {catchError} from 'rxjs/operators';

const API_URL = environment.apiUrl;
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  public getAllTodos(): Observable<Array<Task>> {
      // return this.http
      //   .get(API_URL + '/todo').pipe(map(response => {return new Task(response)}));
        return this.http.get<Array<Task>>(API_URL+'/todo');
}

public createTodos(task: Task): Observable<Task> {
    // return this.http
    //   .get(API_URL + '/todo').pipe(map(response => {return new Task(response)}));
    

      return this.http.post<Task>(API_URL+'/create', task);
}

public toggleTodoComplete(task: Task): Observable<Task> {
   task.status=! task.status;
    return this.http.put<Task>(`${API_URL+'/update'}/${task._id}`, task);
  }

    private handleError (error: Response | any) {
     console.error('ApiService::handleError', error);
     return Observable.throw(error);
   }

   // API: POST /todos
   // public createTodo(todo: Todo) {
   //   will use this.http.post()
   // }

}
