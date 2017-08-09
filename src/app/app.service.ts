import { Injectable } from '@angular/core';
import { FlightModel } from './common/models/app.models';
import { AndroidService } from './common/services/android/android.service';

@Injectable()
export class AppService {

  constructor(private androidService: AndroidService) {
  }

  getData(): FlightModel {
    return this.androidService.getData();
  }

  acknowledgeTask(taskID: string): string {
    return this.androidService.acknowledgeTask(taskID);
  }
}


