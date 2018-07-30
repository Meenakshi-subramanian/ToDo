import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ApiService} from './api.service';
import { AppComponent } from './app.component';
import { AddTaskComponent } from './add-task/add-task.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TaskstatusComponent } from './taskstatus/taskstatus.component';
import {MatTabsModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TasksearchComponent } from './tasksearch/tasksearch.component';

@NgModule({
  declarations: [

    AppComponent,
    AddTaskComponent,
    TaskstatusComponent,
    TasksearchComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    MatTabsModule,
    BrowserAnimationsModule,

  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
