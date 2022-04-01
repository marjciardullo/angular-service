import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeComponent } from './home/home.component';
import { TaskComponent } from './task/task.component';
import { RouterModule } from '@angular/router';
import { LogComponent } from './log/log.component';
import { TimerService } from './timer.service';
import { TaskService } from './task.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'task', component: TaskComponent },
      { path: 'log', component: LogComponent },
    ]),
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    HomeComponent,
    TaskComponent,
    LogComponent,
  ],
  bootstrap: [AppComponent],
  providers: [TimerService, TaskService],
})
export class AppModule {}
