
import { Http, Response } from '@angular/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';


import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { MockFlight } from '../../common/testing/index';
import { AndroidService } from '../../common/services/android/android.service';
import { CloseTaskService } from '../../common/services/close-task.service';
import { CloseAllDialogComponent } from './close-all-dialog.component';
import {
    AndroidServiceStub,
    NgbModalServiceStub, CloseTaskServiceStub, HttpServiceStub
} from '../../common/testing/stubs/service-stubs';

let closeAllDialogPage: CloseAllDialogPage;
let component: CloseAllDialogComponent;
let fixture: ComponentFixture<CloseAllDialogComponent>;

const androidServiceStub = new AndroidServiceStub();
const httpServiceStub = new HttpServiceStub();
const closeTaskServiceStub = new CloseTaskServiceStub(httpServiceStub);
const ngbModalServiceStub = new NgbModalServiceStub();

describe('CloseAllDialogComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CloseAllDialogComponent],
            providers: [
                { provide: Http, useValue: httpServiceStub },
                { provide: AndroidService, useValue: androidServiceStub },
                { provide: NgbActiveModal, useValue: ngbModalServiceStub },
                { provide: CloseTaskService, useValue: closeTaskServiceStub }
            ]
        }).compileComponents().then(createComponent);
    }));

    describe('initial load expectation', () => {
        it('should be created', () => {
            expect(component).toBeTruthy();
        });
    });

    describe('closeAllTasks', () => {
        it('should call the close all tasks method on button click', () => {
            spyOn(component, 'closeAllTasks');
            closeAllDialogPage.closeAllTasksButton.click();
            expect(component.closeAllTasks).toHaveBeenCalled();
        });
    });


    describe('close', () => {
        it('should call the close method on button click', () => {
            spyOn(component, 'close');
            closeAllDialogPage.cancelButton.click();
            expect(component.close).toHaveBeenCalled();
        });
    });

});

function createComponent() {
    fixture = TestBed.createComponent(CloseAllDialogComponent);
    component = fixture.componentInstance;
    component.currentFlight = MockFlight.mockFlightdata();
    fixture.detectChanges();

    return fixture.whenStable().then(() => {
        fixture.detectChanges();
        closeAllDialogPage = new CloseAllDialogPage();
    });
}

class CloseAllDialogPage {
    cancelButton: any;
    closeAllTasksButton: any;
    constructor() {
        this.cancelButton = fixture.debugElement.nativeElement.querySelector('#btnCancel');
        this.closeAllTasksButton = fixture.debugElement.nativeElement.querySelector('#btnCloseAllTasks');
    };
}
