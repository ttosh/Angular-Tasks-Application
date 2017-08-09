import { FakeData } from '../../data/fake-data';
import { FlightModel, EmployeeModel } from '../../models/app.models';

declare let Android: any;
export class AndroidServiceStub {

    getData(): FlightModel {
        return FakeData.flightData();
    }

    getEmployeeData(): EmployeeModel {
        return FakeData.employeeData();
    }

    getService(): string {
        return 'https://newaamaintweblab.qcorpaa.aa.com/open/services/mmx/1.5';
    }

    launchApp(appName: string, noseNumber: string): void {

    }

    acknowledgeTask(taskID: string): string {
        return '1';
    }

    setAircraftStatus(arrivalFlightID: string, status: string, comment: string): string {
        return null;
    }

    closeTask(taskID: string): void {

    }
};

export class ButtonBarServiceStub {
    private currentDoneAcData = '';

    constructor() { }

    public updateDoneTasksByFlight: any = function (data: any) {
        this.currentDoneAcData = data;
    };

    public getDoneTasksByFlight = function () {
        return this.currentDoneAcData;
    };
};

export class NgbModalServiceStub {
    close() {

    }

    dismiss() {

    }
};

export class HttpServiceStub {
    get() { };
    put(data) { };
    post(data) { };
}

export class CloseTaskServiceStub {
    private androidService: AndroidServiceStub;

    constructor(private http: HttpServiceStub) {
        this.androidService = new AndroidServiceStub();
    }

    closeTask(closeTaskRequest: any): Promise<any> {
        return new Promise<any>(null);
    }

    private responseData(res: Response) {
        return {};
    }

    private handleError(error: any): Promise<any> {
        return new Promise<any>(null);
    }
}

export class TaskServiceStub {
    constructor(private androidService: AndroidServiceStub) {
  }

  acknowledgeTask(taskID: string): void {
    this.androidService.acknowledgeTask(taskID);
  }
}


export class AppServiceStub {

    constructor(private androidService: AndroidServiceStub) {}

    getData(): FlightModel {
        return FakeData.flightData();
    }

    acknowledgeTask(taskID: string): string {
        return this.androidService.acknowledgeTask(taskID);
    }
}
