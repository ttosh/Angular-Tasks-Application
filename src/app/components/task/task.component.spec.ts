import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { async, inject, tick, fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopoverModule } from 'ngx-popover';

import { Task } from '../../common/models/app.models';
import { TaskComponent } from './task.component';
import { MockTask } from '../../common/testing';
import { AppService } from '../../app.service';
import { TaskService } from '../../components/task/task.service';
import { AndroidService } from '../../common/services/android/android.service';

import { RouterStub } from '../../common/testing/stubs/router-stubs';
import { AppServiceStub, AndroidServiceStub, TaskServiceStub, NgbModalServiceStub } from '../../common/testing/stubs/service-stubs';


let selectedTask: Task;
let taskPage: TaskPage;
let component: TaskComponent;
let fixture: ComponentFixture<TaskComponent>;

const aircraft = '';
const routerStub = new RouterStub();
const androidServiceStub = new AndroidServiceStub();
const appServiceStub = new AppServiceStub(androidServiceStub);
const taskServiceStub = new TaskServiceStub(androidServiceStub);
const ngbModalServiceStub = new NgbModalServiceStub();

describe('TaskComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TaskComponent],
      imports: [PopoverModule],
      providers: [
        { provide: Router, useValue: routerStub },
        { provide: AppService, useValue: appServiceStub },
        { provide: TaskService, useValue: taskServiceStub },
        { provide: AndroidService, useValue: androidServiceStub }
      ]
    }).compileComponents().then(createComponent);
  }));

  describe('initial load expectation', () => {
    it('should be created', () => {
      expect(component).toBeTruthy();
    });

    it('should have one task on load of component', () => {
      expect(component.task).toBeTruthy(); // task should be set on component
      expect(component.task.TaskID).toBe('1'); // mock task id should be 1
    });

    it('should not be acknowledged when loaded', () => {
      expect(component.task.Acknowledged).toBe('0'); // initially task should not be acknowledged
    });
  });

  describe('getTaskDetail', () => {
    it('should call the getTaskDetail method on click', () => {
      spyOn(component, 'getTaskDetail');
      taskPage.getTaskDetailButton.click();
      expect(component.getTaskDetail).toHaveBeenCalled();
    });
  });

  describe('acknowledgeTask', () => {
    it('should call the acknowledgeTask method on click', () => {
      spyOn(component, 'acknowledgeTask');
      taskPage.acknowledgeTaskButton.click();
      expect(component.acknowledgeTask).toHaveBeenCalled();
    });

    it('should be acknowledged once acknowledgeTask is called', () => {
      taskPage.acknowledgeTaskButton.click();
      expect(component.task.Acknowledged).toBe('1'); // task should now be acknowledged
    });

    it('should not navigate to selected task detail on click since not acknowledged', fakeAsync(() => {
      taskPage.getTaskDetailButton.click();
      tick();
      expect(taskPage.navSpy.calls.any()).toBe(false, 'navigate called');
    }));

    it('should navigate to selected task detail on click since acknowledged', fakeAsync(() => {
      taskPage.acknowledgeTaskButton.click();
      taskPage.getTaskDetailButton.click();
      tick();
      const navArgs = taskPage.navSpy.calls.first().args[0];
      expect(taskPage.navSpy.calls.any()).toBe(true, 'navigate called');
      expect(navArgs[0]).toContain('task', 'nav to task detail URL');
      expect(navArgs[1]).toBe(component.task.TaskID, 'expected task.TaskID');
    }));
  });

});

function createComponent() {

  fixture = TestBed.createComponent(TaskComponent);
  component = fixture.componentInstance;
  selectedTask = MockTask.mockTaskData();
  component.task = selectedTask;
  fixture.detectChanges();

  return fixture.whenStable().then(() => {
    fixture.detectChanges();
    taskPage = new TaskPage();
  });
}

class TaskPage {

  // button to navigate to task details
  getTaskDetailButton: any;

  // button to acknowledge selected task
  acknowledgeTaskButton: any;

  // navigation spy router
  router: Router;

  /** Spy on router navigate method */
  navSpy: jasmine.Spy;

  constructor() {

    this.getTaskDetailButton = fixture.debugElement.nativeElement.querySelector('#btnGetTaskDetail');
    this.acknowledgeTaskButton = fixture.debugElement.nativeElement.querySelector('#btnAcknowledgeTask');

    // Get the component's injected router and spy on it
    this.router = fixture.debugElement.injector.get(Router);
    this.navSpy = spyOn(this.router, 'navigate');
  };
}

