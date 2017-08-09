import { Injectable, Inject } from '@angular/core';

import { AndroidService } from '../../common/services/android/android.service';

@Injectable()
export class TaskService {
  constructor(private androidService: AndroidService) {
  }

  acknowledgeTask(taskID: string): void {
    this.androidService.acknowledgeTask(taskID);
  }
}
