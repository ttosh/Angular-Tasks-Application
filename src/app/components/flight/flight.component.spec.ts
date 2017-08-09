import { Component, Input } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightComponent } from './flight.component';
import { FlightModel, Flight, Task } from '../../common/models/app.models';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { MockFlight, MockTaskComponent } from '../../common/testing';

import { ButtonBarComponent } from '../button-bar/button-bar.component';

import { AppService } from '../../app.service';
import { AndroidService } from '../../common/services/android/android.service';
import { ButtonBarService } from '../button-bar/button-bar.service';
import { MainPipe } from '../../common/pipes/main-pipe.module';
import { AppServiceStub, AndroidServiceStub, ButtonBarServiceStub, NgbModalServiceStub } from '../../common/testing/stubs/service-stubs';

let component: FlightComponent;
let flightPage: FlightPage;
let fixture: ComponentFixture<FlightComponent>;

const androidServiceStub = new AndroidServiceStub();
const appServiceStub = new AppServiceStub(androidServiceStub);
const buttonBarServiceStub = new ButtonBarServiceStub();
const ngbModalServiceStub = new NgbModalServiceStub();

describe('FlightComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MainPipe
      ],
      declarations: [
        FlightComponent,
        MockTaskComponent,
        ButtonBarComponent
      ],
      providers: [
        { provide: AppService, useValue: appServiceStub },
        { provide: NgbModal, useValue: ngbModalServiceStub },
        { provide: AndroidService, useValue: androidServiceStub },
        { provide: ButtonBarService, useValue: buttonBarServiceStub }
      ]
    })
      .compileComponents().then(createComponent);
  }));

  describe('initial load expectation', () => {
    it('should be created', () => {
      expect(component).toBeTruthy();
    });

    it('should have flight model on load of component', () => {
      expect(component.flightModel).toBeTruthy();
    });
  });

  describe('showExternalAppsDialog', () => {
    it('should call the show external apps dialog method on click', () => {
      spyOn(component, 'showExternalAppsDialog');
      flightPage.showExternalAppsDialogButton.click();
      expect(component.showExternalAppsDialog).toHaveBeenCalled();
    });
  });

});

function createComponent() {
  fixture = TestBed.createComponent(FlightComponent);
  component = fixture.componentInstance;
  component.flightModel = this
  fixture.detectChanges();
  return fixture.whenStable().then(() => {
    fixture.detectChanges();
    flightPage = new FlightPage();
  });
}

class FlightPage {
  showExternalAppsDialogButton: any;
  constructor() {
    this.showExternalAppsDialogButton = fixture.debugElement.nativeElement.querySelector('#aShowExternalAppsDialog');
  };
}

