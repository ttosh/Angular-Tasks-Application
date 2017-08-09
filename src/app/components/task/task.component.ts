import { Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';

import { Task } from '../../common/models/app.models';
import { AppService } from '../../app.service';
import { TaskService } from './task.service';

@Component({
  selector: 'aa-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() task: Task;
  private task_ToolTip: string;

  constructor(private taskService: TaskService, private appService: AppService, private router: Router) {

   }

  ngOnInit() {
    this.task.Acknowledged = '0';
    this.task_ToolTip = 'Please "Acknowledge" to see Task Detail.';
  }

  acknowledgeTask(task: Task) {
     task.Acknowledged = this.appService.acknowledgeTask(task.TaskID);
  }

  getTaskDetail(task, aircraft) {
    if (this.task.Acknowledged === '1') {
      this.router.navigate(['/task', this.task.TaskID]);
    }
  }
}
