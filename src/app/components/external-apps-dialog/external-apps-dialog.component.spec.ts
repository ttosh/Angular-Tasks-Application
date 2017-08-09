import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ExternalAppsDialogComponent } from './external-apps-dialog.component';

import { MockFlight } from '../../common/testing/index';
import { AndroidService } from '../../common/services/android/android.service';
import { AndroidServiceStub, NgbModalServiceStub } from '../../common/testing/stubs/service-stubs';

let component: ExternalAppsDialogComponent;
let fixture: ComponentFixture<ExternalAppsDialogComponent>;
let externalAppsDialogPage: ExternalAppsDialogPage

const androidServiceStub = new AndroidServiceStub();
const ngbModalServiceStub = new NgbModalServiceStub();

describe('ExternalAppsDialogComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ExternalAppsDialogComponent],
      providers: [
        { provide: AndroidService, useValue: androidServiceStub },
        { provide: NgbActiveModal, useValue: ngbModalServiceStub }
      ]
    })
      .compileComponents().then(createComponent);
  }));

  describe('initial load expectation', () => {
    it('should be created', () => {
      expect(component).toBeTruthy();
    });
  });

  describe('currentFlight', () => {
    it('should be created with a valid flight object', () => {
      expect(component.currentFlight).toBeTruthy();
    });
  });

  describe('sendApp', () => {
    it('should call the send app method with AcInfo input on click', () => {
      spyOn(component, 'sendApp');
      externalAppsDialogPage.sendACInfoImage.click();
      expect(component.sendApp).toHaveBeenCalledWith('AcInfo');
    });

    it('should call the send app method with Safe input on button click', () => {
      spyOn(component, 'sendApp');
      externalAppsDialogPage.sendSafeImage.click();
      expect(component.sendApp).toHaveBeenCalledWith('Safe');
    });
  });

});

function createComponent() {
  fixture = TestBed.createComponent(ExternalAppsDialogComponent);
  component = fixture.componentInstance;
  component.currentFlight = MockFlight.mockFlightdata().Aircraft;
  fixture.detectChanges();

  return fixture.whenStable().then(() => {
    fixture.detectChanges();
    externalAppsDialogPage = new ExternalAppsDialogPage();
  });
}

class ExternalAppsDialogPage {
  sendSafeImage: any;
  sendACInfoImage: any;
  constructor() {
    this.sendACInfoImage = fixture.debugElement.nativeElement.querySelector('#imgSendAppAcInfo');
    this.sendSafeImage = fixture.debugElement.nativeElement.querySelector('#imgSendAppSafe');
  };
}
