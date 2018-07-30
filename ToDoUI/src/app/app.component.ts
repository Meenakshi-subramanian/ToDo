import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent {

  title = 'ToDo App';

  private loadComponent = false;
   loadMyChildComponent(){
      this.loadComponent = true;
   }
}
