import { Component, Input } from '@angular/core';
import { NgModel } from '@angular/forms';

import { Task } from '../../common/models/app.models'

import { FakeData } from '../../common/data/fake-data'

import { AndroidService } from '../../common/services/android/android.service';

import { CloseTaskService } from '../../common/services/close-task.service'
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

import { EmployeeModel } from '../../common/models/app.models'

import { AppService } from '../../app.service';

@Component({
  selector: 'aa-task-detail-modal-content',
  templateUrl: './task-detail.modal.html',
  styleUrls: ['./task-detail.modal.css'],
  providers: [CloseTaskService]
})

// tslint:disable-next-line:component-class-suffix
export class TaskDetailModalContent {

  @Input() currentTask: Task;

  constructor(
    private closeTaskService: CloseTaskService,
    private router: Router,
    private androidService: AndroidService,
    public activeModal: NgbActiveModal) {
  }

  closeTask(): void {

    const employee = this.androidService.getEmployeeData();
    const closeTaskResponse = {
        AndroidID: '',
        ClosedBy: employee.EmployeeID,
        DateClosed: new Date(),
        Station: employee.Station,
        Status: status,
        TaskID: this.currentTask.TaskID
    }

    // this.closeTaskService.closeTask(closeTaskResponse)
    //   .then(
    //     //myTaskDataService.updateStatus(true);
    //     result => console.log(result))
    //   .catch(error => console.log(error));
    //   this.router.navigate(['tasks']);
      this.activeModal.close(500);
  }

  close(): void {
    this.activeModal.dismiss(500);
  }
}
