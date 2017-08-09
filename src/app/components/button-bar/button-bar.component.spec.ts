import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonBarComponent } from './button-bar.component';
import { AndroidService } from '../../common/services/android/android.service';
import { ButtonBarService } from './button-bar.service';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { MockFlight } from '../../common/testing';
import { AndroidServiceStub, ButtonBarServiceStub, NgbModalServiceStub } from '../../common/testing/stubs/service-stubs';

let component: ButtonBarComponent;
let fixture: ComponentFixture<ButtonBarComponent>;
let buttonBarPage: ButtonBarPage;

describe('ButtonBarComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonBarComponent],
      providers: [
        { provide: NgbModal, useValue: NgbModalServiceStub },
        { provide: AndroidService, useValue: AndroidServiceStub },
        { provide: ButtonBarService, useValue: ButtonBarServiceStub }
      ]
    })
      .compileComponents().then(createComponent);
  }));

  describe('initial load expectation', () => {
    it('should be created', () => {
      expect(component).toBeTruthy();
    });

    it('should have flight input on load of component', () => {
      expect(component.flight).toBeTruthy();
    });
  });

  describe('setArrived', () => {
    it('should call set arrived method on button click', () => {
      spyOn(component, 'setArrived');
      buttonBarPage.btnSetArrived.click();
      expect(component.setArrived).toHaveBeenCalled();
    });
  });

  describe('showCloseAllTasksModal', () => {
    it('should call show close all tasks modal method on button click', () => {
      spyOn(component, 'showCloseAllTasksModal');
      buttonBarPage.btnShowCloseAllTasksModal.click();
      expect(component.showCloseAllTasksModal).toHaveBeenCalled();
    });
  });

});

function createComponent() {
  fixture = TestBed.createComponent(ButtonBarComponent);
  component = fixture.componentInstance;
  component.flight = MockFlight.mockFlightdata();
  fixture.detectChanges();

  return fixture.whenStable().then(() => {
    fixture.detectChanges();
    buttonBarPage = new ButtonBarPage();
  });
}

class ButtonBarPage {
  btnSetArrived: any;
  btnShowCloseAllTasksModal: any;
  constructor() {
    this.btnSetArrived = fixture.debugElement.nativeElement.querySelector('#btnSetArrived');
    this.btnShowCloseAllTasksModal = fixture.debugElement.nativeElement.querySelector('#btnShowCloseAllTasksModal');
  };
}
