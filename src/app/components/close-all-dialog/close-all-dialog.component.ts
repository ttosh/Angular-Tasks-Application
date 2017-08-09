import { Component, Input } from '@angular/core';
import { NgModel } from '@angular/forms';

import { Task, Flight } from '../../common/models/app.models'
import { CloseTaskService } from '../../common/services/close-task.service'
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

import { FakeData } from '../../common/data/fake-data';

import { AppService } from '../../app.service';
import { AndroidService } from '../../common/services/android/android.service';

@Component({
  selector: 'aa-close-all-dialog',
  templateUrl: './close-all-dialog.component.html',
  providers: [CloseTaskService]
})

// tslint:disable-next-line:component-class-suffix
export class CloseAllDialogComponent {

  @Input() currentFlight: Flight;

  constructor(private closeTaskService: CloseTaskService, private androidService: AndroidService, public activeModal: NgbActiveModal) {

  }

  closeAllTasks(): void {
    const employee = this.androidService.getEmployeeData();
      this.currentFlight.Tasks.forEach((task) => {
          if (task.Acknowledged === '1') {
              const date = new Date();
              const closeTaskResponse = {
                AndroidID: '',
                ClosedBy: employee.EmployeeID,
                DateClosed: new Date(),
                Station: employee.Station,
                Status: status,
                TaskID: task.TaskID
            }
            // this.closeTaskService.closeTask(closeTaskResponse)
            //   .then(
            //     //myTaskDataService.updateStatus(true);
            //     result => console.log(result))
            //   .catch(error => console.log(error));

            //   this.androidService.closeTask(task.TaskID);

              this.activeModal.close(500);
          }
      });
  }

  close(): void {
    this.activeModal.dismiss(500);
  }

}



