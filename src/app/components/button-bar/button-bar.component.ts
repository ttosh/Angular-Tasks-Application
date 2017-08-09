import { Input, Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Flight } from '../../common/models/app.models';
import { AndroidService } from '../../common/services/android/android.service';
import { CloseAllDialogComponent } from '../close-all-dialog/close-all-dialog.component';
import { ButtonBarService } from './button-bar.service';
import { EmployeeModel } from '../../common/models/app.models';
import { FakeData } from '../../common/data/fake-data';
import { TaskDetailModalContent } from '../task-detail-modal/task-detail.modal';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'aa-button-bar',
  templateUrl: './button-bar.component.html',
  styleUrls: ['./button-bar.component.css']
})
export class ButtonBarComponent implements OnInit {

  // input params
  @Input() flight: Flight;
  private currentFlight: Flight;
  private arrived: boolean;
  private employee: EmployeeModel;

  constructor(private androidService: AndroidService, private modalService: NgbModal, private buttonBarService: ButtonBarService) {

  }

  ngOnInit() {
    this.currentFlight = this.flight;
    this.arrived = Boolean(this.flight.Arrived);
  }

  showCloseAllTasksModal(): void {
    if (this.arrived === true) {
      const modalRef = this.modalService.open(CloseAllDialogComponent);
      modalRef.componentInstance.currentFlight = this.currentFlight;
      modalRef.result.then(() => {
      }, (dismissReason) => {
      });
    }
  }

  setArrived() {
    if (this.androidService.setAircraftStatus(this.flight.Aircraft, 'Arrived', '') == null) {
      this.arrived = !this.arrived;
    }
  }

  tasksDone() {
    if (this.arrived) {
      this.buttonBarService.updateDoneTasksByFlight(this.currentFlight.Tasks);
    }
  }
}
