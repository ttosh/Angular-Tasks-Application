import { Component, OnInit, Input } from '@angular/core';
import { FlightModel, Flight, Task } from '../../common/models/app.models';
import { ExternalAppsDialogComponent } from '../external-apps-dialog/external-apps-dialog.component';
import { NgbModal, NgbActiveModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';

import { AppService } from '../../app.service';

// import { TimePipe } from '../../common/time.pipe';
// import { TaskComponent } from '../task/task.component';
// import { ButtonBarComponent } from '../button-bar/button-bar.component';

@Component({
  selector: 'aa-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.css'],
  providers: [ AppService ]
})
export class FlightComponent implements OnInit {
  @Input() ac: Flight;
  flightModel: FlightModel;

  constructor(private appService: AppService, private modalService: NgbModal) {

  }

  ngOnInit() {
    this.flightModel = this.appService.getData();
  }

  showExternalAppsDialog(ac: string): void {
      const options: NgbModalOptions = {
        size: 'sm'
      };
      const modalRef = this.modalService.open(ExternalAppsDialogComponent, options);
      modalRef.componentInstance.currentFlight = ac;
      modalRef.result.then(() => {
      }, (dismissReason) => {
      });
  }
}
