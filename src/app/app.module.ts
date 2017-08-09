import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { FlightComponent } from './components/flight/flight.component';
import { TaskComponent } from './components/task/task.component';
import { TaskDetailComponent } from './components/task-detail/task-detail.component';
import { TaskDetailModalContent } from './components/task-detail-modal/task-detail.modal';
import { CloseAllDialogComponent } from './components/close-all-dialog/close-all-dialog.component';
import { ButtonBarComponent } from './components/button-bar/button-bar.component';
import { ExternalAppsDialogComponent } from './components/external-apps-dialog/external-apps-dialog.component';
import { DatePipe } from '@angular/common';
import { MainPipe } from './common/pipes/main-pipe.module';
import { PopoverModule } from 'ngx-popover';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {Http, Response} from '@angular/http';
import { TaskService } from './components/task/task.service';
import { ButtonBarService } from './components/button-bar/button-bar.service';

import { AppService } from './app.service';
import { AndroidService } from './common/services/android/android.service';
import { CloseTaskService } from './common/services/close-task.service';
import { Router, RouterModule, Routes } from '@angular/router';

declare let jQuery: Object;

const appRoutes: Routes = [
  { path: 'tasks', component: FlightComponent  },
  { path: 'task/:id', component: TaskDetailComponent  },
  { path: '',   redirectTo: 'tasks', pathMatch: 'full' },
  { path: '**', component: FlightComponent  }
];

@NgModule({
  declarations: [
    AppComponent,
    FlightComponent,
    TaskComponent,
    TaskDetailComponent,
    CloseAllDialogComponent,
    ButtonBarComponent,
    ExternalAppsDialogComponent,
    TaskDetailModalContent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    PopoverModule,
    FormsModule,
    MainPipe.forRoot(),
    NgbModule.forRoot(),
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [ RouterModule, MainPipe ],
  entryComponents: [ TaskDetailModalContent, CloseAllDialogComponent, ExternalAppsDialogComponent ],
  providers: [ AndroidService, AppService, ButtonBarService, TaskService, HttpModule, CloseTaskService, DatePipe ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
