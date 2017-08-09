import { Component, Input } from '@angular/core';
import { Flight } from '../../common/models/app.models'
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { AndroidService } from '../../common/services/android/android.service';

@Component({
  selector: 'aa-external-apps-dialog',
  templateUrl: './external-apps-dialog.component.html',
  styleUrls: ['./external-apps-dialog.component.css']
})
export class ExternalAppsDialogComponent {

  @Input() currentFlight: string;

  constructor(private androidService: AndroidService, public activeModal: NgbActiveModal) {

  }

  sendApp(appType: string): void {
      if (appType === 'Safe') {
          this.androidService.launchApp('safe', this.currentFlight);
      } else {
          this.androidService.launchApp('acinfo', this.currentFlight);
      }
  };
}
