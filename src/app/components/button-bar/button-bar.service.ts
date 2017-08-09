import { Injectable } from '@angular/core';

@Injectable()
export class ButtonBarService {
    currentDoneAcData = '';

    constructor() { }

    public updateDoneTasksByFlight: any = function (data: any) {
        this.currentDoneAcData = data;
    };

    public getDoneTasksByFlight = function () {
        return this.currentDoneAcData;
    };
}
