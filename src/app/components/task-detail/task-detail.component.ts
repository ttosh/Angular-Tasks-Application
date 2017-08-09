import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Flight, Task } from '../../common/models/app.models'

import { FakeData } from '../../common/data/fake-data';

import { TaskDetailModalContent } from '../task-detail-modal/task-detail.modal';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'aa-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {

  currentTask: Task;
  currentAircraft: string;

  constructor(private router: Router, private modalService: NgbModal) {
    const fakeTaskData = FakeData.flightData();
    this.getTaskDetail(fakeTaskData.Flights[0].Aircraft, fakeTaskData.Flights[0].Tasks[0]);
  }

  ngOnInit() {

  }

  getTaskDetail(airCraft: string, task: Task): void {
    this.currentAircraft = airCraft;
    this.currentTask = task;
  }

  goToTasks(): void {
    this.router.navigate(['tasks']);
  }

  showCloseTaskModal(): void {
    const modalRef = this.modalService.open(TaskDetailModalContent);
    modalRef.componentInstance.currentTask = this.currentTask;
    modalRef.result.then((closeTaskResult) => {
       modalRef.close(500); // close, but give 500ms for bootstrap to animate
    });
  }
}
