import { By } from '@angular/platform-browser';
import { Component, OnInit, Input } from '@angular/core';
import { async, inject, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { Router, ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { RouterStub } from '../../common/testing/stubs/router-stubs';

import { MockTask } from '../../common/testing';
import { TaskDetailComponent } from './task-detail.component';
import { EmployeeModel, Flight, Task } from '../../common/models/app.models';

import { NgbModalServiceStub } from '../../common/testing/stubs/service-stubs';

let taskDetailPage: TaskDetailPage;
let component: TaskDetailComponent;
let fixture: ComponentFixture<TaskDetailComponent>;

const routerStub = new RouterStub();
const ngbModalServiceStub = new NgbModalServiceStub();

describe('TaskDetailComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [],
      declarations: [TaskDetailComponent],
      providers: [
        { provide: Router, useValue: routerStub },
        { provide: NgbModal, useValue: ngbModalServiceStub }
      ]
    })
      .compileComponents().then(createComponent);
  }));

  describe('initial load expectation', () => {
    it('should be created', () => {
      expect(component).toBeTruthy();
    });

    it('should have one task after component is created', () => {
      expect(component.currentTask).toBeTruthy();
      expect(component.currentTask.TaskID).toBe('1');
    });

  });

  describe('showCloseTaskModal', () => {
    it('ensure button click calls the close task modal method', () => {
      spyOn(component, 'showCloseTaskModal');
      taskDetailPage.closeTaskButton.click();
      expect(component.showCloseTaskModal).toHaveBeenCalled();
    });

    it('should open close task modal on click', fakeAsync(() => {
      // taskDetailPage.closeTaskButton.click();
      // tick();
      // const modal = fixture.debugElement.query(By.css('modal-open'));
      // expect(modal).toBeTruthy();
    }));
  });

  describe('getTaskDetail', () => {
    it('should have one task with id of 1', () => {
      const task = MockTask.mockTaskData();
      component.getTaskDetail('', task);
      expect(component.currentTask).toBeTruthy();
      expect(component.currentTask.TaskID).toBe('1');
    });
  });

  describe('backToTasksButton', () => {
    it('should navigate to selected tasks on click', fakeAsync(() => {
      taskDetailPage.backToTasksButton.click();
      tick();
      expect(taskDetailPage.navSpy.calls.any()).toBe(true, 'navigate called');
      const navArgs = taskDetailPage.navSpy.calls.first().args[0];
      expect(navArgs[0]).toContain('tasks', 'nav to tasks URL');
    }));
  });

});

function createComponent() {
  fixture = TestBed.createComponent(TaskDetailComponent);
  component = fixture.componentInstance;
  fixture.detectChanges();
  return fixture.whenStable().then(() => {
    fixture.detectChanges();
    taskDetailPage = new TaskDetailPage();
  });
}

class TaskDetailPage {

  // button to open close task modal
  closeTaskButton: any;

  // button to go back to all tasks
  backToTasksButton: any;

  // navigation spy router
  router: Router;

  /** Spy on router navigate method */
  navSpy: jasmine.Spy;

  constructor() {

    this.closeTaskButton = fixture.debugElement.nativeElement.querySelector('#btnCloseTask');
    this.backToTasksButton = fixture.debugElement.nativeElement.querySelector('#btnBackToTasks');

    // Get the component's injected router and spy on it
    this.router = fixture.debugElement.injector.get(Router);
    this.navSpy = spyOn(this.router, 'navigate');
  };
}
