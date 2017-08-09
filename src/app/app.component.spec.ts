import { Component, Input } from '@angular/core';
import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { Flight } from './common/models/app.models';
import { AppComponent } from './app.component';
import { TaskDetailComponent } from './components/task-detail/task-detail.component';
import { FlightComponent } from './components/flight/flight.component';

describe('AppComponent', () => {
  @Component({
    selector: 'aa-flight',
    template: '<p>Mock Flight</p>'
  })
  class MockFlightComponent {
    @Input() ac: Flight;
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MockFlightComponent
      ],
      imports: [
        RouterTestingModule
      ],
    }).compileComponents();
  }));

  describe('initial load expectation', () => {
    it('should create the app', async(() => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.debugElement.componentInstance;
      expect(app).toBeTruthy();
    }));

    it(`should have as title 'Tasks'`, async(() => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.debugElement.componentInstance;
      expect(app.title).toEqual('Tasks');
    }));
  });

});
