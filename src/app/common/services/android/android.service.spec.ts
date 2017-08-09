import { TestBed, inject } from '@angular/core/testing';

import { AndroidService } from './android.service';
import { MockTask } from '../../testing/mocks/mock-classes';
import { Task, FlightModel, EmployeeModel } from '../../models/app.models';

let mockTask: Task;
let androidService: AndroidService;
describe('AndroidService', () => {
  beforeEach(() => {
    mockTask = MockTask.mockTaskData();
    androidService = new AndroidService();
    TestBed.configureTestingModule({
      providers: [AndroidService]
    });
  });

  describe('initial load expectation', () => {
    it('should be created', inject([AndroidService], (service: AndroidService) => {
      expect(service).toBeTruthy();
    }));
  });

  describe('getService', () => {
    it('should return the LAB Service URI', () => {
      expect(androidService.getService()).toEqual('https://newaamaintweblab.qcorpaa.aa.com/open/services/mmx/1.5');
    });
  });

  describe('getData', () => {
    it('should return a flight model type', () => {
      expect(androidService.getData() instanceof FlightModel).toBe(true, 'instance of FlightModel');
    });
  });

  describe('getEmployeeData', () => {
    it('should return an employee model type', () => {
      expect(androidService.getEmployeeData() instanceof EmployeeModel).toBe(true, 'instance of EmployeeModel');
    });
  });

  describe('acknowledgeTask', () => {
    it('should return 1 when not an android device', () => {
      expect(androidService.acknowledgeTask(mockTask.TaskID)).toEqual('1');
    });
  });

  describe('setAircraftStatus', () => {
    it('should return null when not an android device', () => {
      expect(androidService.setAircraftStatus('', '', '')).toEqual(null);
    })
  });

});
