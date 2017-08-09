import { Component, Input } from '@angular/core';
import { Task } from '../../models/app.models';

@Component({
    selector: 'aa-task',
    template: '<p>Mock Task</p>'
})
export class MockTaskComponent {
    @Input() task: Task;
}

@Component({
    selector: 'aa-button-bar',
    template: '<p>Mock button bar</p>'
})
export class MockButtonBarComponent {

}
