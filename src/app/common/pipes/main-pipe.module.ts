import { NgModule } from '@angular/core';
import { DatePipe } from '@angular/common';
import { TimePipe } from './time/time.pipe';

@NgModule({
    imports: [],
    declarations: [TimePipe],
    exports: [TimePipe],
    providers: [DatePipe]
})

export class MainPipe {

    static forRoot() {
        return {
            ngModule: MainPipe,
            providers: [],
        };
    }
}
