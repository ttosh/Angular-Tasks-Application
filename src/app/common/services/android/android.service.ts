import { Injectable } from '@angular/core';

import { FakeData } from '../../data/fake-data';
import { FlightModel } from '../../models/app.models';
import { EmployeeModel } from '../../models/app.models';

declare let Android: any;

@Injectable()
export class AndroidService {

  constructor() { }

  getData(): FlightModel {
    if (typeof Android !== 'undefined') {
      return Android.getTasks();
    } else {
      return FakeData.flightData();
    }
  }

  getEmployeeData(): EmployeeModel {
    if (typeof Android !== 'undefined') {
      return Android.getEmployee();
    } else {
      return FakeData.employeeData();
    }
  }

  getService(): string  {
    if (typeof Android !== 'undefined') {
        return Android.getService();
    } else {
        return 'https://newaamaintweblab.qcorpaa.aa.com/open/services/mmx/1.5';
    }
  }

  launchApp(appName: string, noseNumber: string): void {
    if (typeof Android !== 'undefined') {
        Android.launchApp(appName, noseNumber);
    }
  }

  acknowledgeTask(taskID: string): string {
    if (typeof Android !== 'undefined') {
      return Android.acknowledgeTask(taskID);
    } else {
      return '1';
    }
  }

   setAircraftStatus(arrivalFlightID: string, status: string, comment: string): string {
    if (typeof Android !== 'undefined') {
      return Android.setAircraftStatus(arrivalFlightID, status, comment);
    } else {
      return null;
    }
  }

  closeTask(taskID: string): void {
    if (typeof Android !== 'undefined') {
        Android.closeTask(taskID);
    }
  }
}
