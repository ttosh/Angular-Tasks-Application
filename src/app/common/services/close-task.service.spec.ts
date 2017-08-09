import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';
import { Http } from '@angular/http';
import { TestBed, inject } from '@angular/core/testing';
import { CloseTaskService } from './close-task.service';

import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { MockEmployee, MockTask } from '../testing/mocks/mock-classes';

let closeTaskService: CloseTaskService, mockHttp, mockAndroidService;
describe('CloseTaskService', () => {

  beforeEach(() => {
    mockHttp = jasmine.createSpyObj('mockHttp', ['put']);
    mockAndroidService = jasmine.createSpyObj('mockAndroidService', ['getService']);
    closeTaskService = new CloseTaskService(mockHttp, mockAndroidService);
  });

  describe('initial load expectation', () => {
    it('should be created', () => {
      expect(closeTaskService).toBeTruthy();
    });
  });

  describe('closeTask', () => {

    it('should call the close task method using the closeTaskRequest parameter', () => {

      const task = MockTask.mockTaskData();
      const employee = MockEmployee.employeeData();

      const mockCloseTaskRequest = {
        AndroidID: '',
        ClosedBy: employee.EmployeeID,
        DateClosed: new Date(),
        Station: employee.Station,
        Status: '1',
        TaskID: task.TaskID
      };
      mockHttp.put.and.returnValue(Observable.of(false));
      mockAndroidService.getService.and.returnValue('https://newaamaintweblab.qcorpaa.aa.com/open/services/mmx/1.5');

      spyOn(closeTaskService, 'closeTask');
      closeTaskService.closeTask(mockCloseTaskRequest);
      expect(closeTaskService.closeTask).toHaveBeenCalledWith(mockCloseTaskRequest);
    });
  });

});


