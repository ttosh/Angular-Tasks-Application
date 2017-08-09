import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { Http } from '@angular/http';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { MockTask } from '../../common/testing';
import { Task } from '../../common/models/app.models';
import { TaskDetailModalContent } from './task-detail.modal';
import { RouterStub } from '../../common/testing/stubs/router-stubs';
import { Router } from '@angular/router';
import { AndroidService } from '../../common/services/android/android.service';

import { AndroidServiceStub, NgbModalServiceStub, HttpServiceStub } from '../../common/testing/stubs/service-stubs';

let component: TaskDetailModalContent;
let taskDetailModalPage: TaskDetailModalPage;
let fixture: ComponentFixture<TaskDetailModalContent>;

const routerStub = new RouterStub();
const androidServiceStub = new AndroidServiceStub();
const httpServiceStub = new HttpServiceStub();
const ngbModalServiceStub = new NgbModalServiceStub();

describe('TaskDetailModalContent', () => {

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [TaskDetailModalContent],
            imports: [FormsModule],
            providers: [
                { provide: Router, useValue: routerStub },
                { provide: Http, useValue: httpServiceStub },
                { provide: AndroidService, useValue: androidServiceStub },
                { provide: NgbActiveModal, useValue: ngbModalServiceStub }
            ]
        }).compileComponents().then(createComponent);
    }));

    describe('initial load expectation', () => {
        it('should be created', () => {
            expect(component).toBeTruthy();
        });
    });

    describe('closeTask', () => {
        it('should call the close task modal method on click', () => {
            spyOn(component, 'closeTask');
            taskDetailModalPage.closeTaskButton.click();
            expect(component.closeTask).toHaveBeenCalled();
        });
    });

    describe('close', () => {
        it('should call the dismiss task modal method on click', () => {
            spyOn(component, 'close');
            taskDetailModalPage.dismissModalButton.click();
            expect(component.close).toHaveBeenCalled();
        });
    });

});

function createComponent() {
    const mockTask = MockTask.mockTaskData();
    fixture = TestBed.createComponent(TaskDetailModalContent);
    component = fixture.componentInstance;
    component.currentTask = mockTask;
    fixture.detectChanges();

    return fixture.whenStable().then(() => {
        fixture.detectChanges();
        taskDetailModalPage = new TaskDetailModalPage();
    });
}

class TaskDetailModalPage {
    closeTaskButton: any;
    dismissModalButton: any;
    constructor() {
        this.closeTaskButton = fixture.debugElement.nativeElement.querySelector('#btnCloseTask');
        this.dismissModalButton = fixture.debugElement.nativeElement.querySelector('#btnDismiss');
    };
}
