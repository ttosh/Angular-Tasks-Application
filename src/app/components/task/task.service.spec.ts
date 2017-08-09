import { TestBed, inject } from '@angular/core/testing';

import { TaskService } from './task.service';
import { AndroidService } from '../../common/services/android/android.service';

describe('TaskService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TaskService, AndroidService]
    });
  });

  describe('initial load expectation', () => {
    it('should be created', inject([TaskService], (service: TaskService) => {
      expect(service).toBeTruthy();
    }));
  });

  describe('acknowledgeTask', () => {
    it('should expect android service call to be made when call to acknowledge task',
      inject([TaskService, AndroidService], (taskService, androidService) => {
        spyOn(androidService, 'acknowledgeTask');
        taskService.acknowledgeTask('1');
        expect(androidService.acknowledgeTask).toHaveBeenCalled();
      }));
  });

});
