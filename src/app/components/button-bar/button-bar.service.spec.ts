import { TestBed, inject } from '@angular/core/testing';

import { MockTask } from '../../common/testing/mocks/mock-classes';
import { ButtonBarService } from './button-bar.service';

let buttonBarService: ButtonBarService;
const mockData = MockTask.mockTaskData();
describe('ButtonBarService', () => {
  beforeEach(() => {
    buttonBarService = new ButtonBarService();
    TestBed.configureTestingModule({
      providers: [ButtonBarService]
    });
  });

  describe('initial load expectation', () => {
    it('should be created', inject([ButtonBarService], (service: ButtonBarService) => {
      expect(service).toBeTruthy();
    }));
  });

  describe('currentDoneAcData', () => {
    it('should be empty on initial load', () => {
      expect(buttonBarService.currentDoneAcData).toEqual('');
    });
  });

  describe('updateDoneTaskByFlight', () => {
    it('should set the internal currentDoneAcData variable to passed in param', () => {
      buttonBarService.updateDoneTasksByFlight(mockData);
      expect(buttonBarService.currentDoneAcData).toEqual(mockData);
    });
  });

  describe('getDoneTasksByFlight', () => {
    it('should get the internal currentDoneAcData and return', () => {
      buttonBarService.updateDoneTasksByFlight(mockData);
      expect(buttonBarService.getDoneTasksByFlight()).toEqual(mockData);
    });
  });

});


