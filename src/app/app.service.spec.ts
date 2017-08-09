import { TestBed, inject } from '@angular/core/testing';
import { AndroidService } from './common/services/android/android.service';
import { AppService } from './app.service';

import { FlightModel } from './common/models/app.models';

import { AppServiceStub, AndroidServiceStub } from './common/testing/stubs/service-stubs';

describe('AppService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppService, AndroidService]
    });
  });

  describe('initial load expectation', () => {
    it('should be created', inject([AppService], (service: AppService) => {
      expect(service).toBeTruthy();
    }));
  });

  describe('getData', () => {
    it('should return a flight model type', inject([AppService], (service: AppService) => {
      expect(service.getData() instanceof FlightModel).toBe(true, 'instance of FlightModel');
    }));

    it('should expect android service call to be made when call to get data',
      inject([AppService, AndroidService], (service, androidService) => {
        spyOn(androidService, 'getData');
        service.getData();
        expect(androidService.getData).toHaveBeenCalled();
      }));
  });

  describe('acknowledgeTask', () => {
    it('should expect android service call to be made when call to acknowledge task',
      inject([AppService, AndroidService], (service, androidService) => {
        spyOn(androidService, 'acknowledgeTask');
        service.acknowledgeTask('1');
        expect(androidService.acknowledgeTask).toHaveBeenCalled();
      }));

    it('should expect a return of the same task id that was sent into service call',
      inject([AppService, AndroidService], (service, androidService) => {
        const taskID = '1';
        expect(service.acknowledgeTask(taskID)).toEqual(taskID);
      }));
  });

});
