import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'time',
  pure: false
})
export class TimePipe implements PipeTransform {

  constructor(private datePipe: DatePipe) {

  }

  /*
    could have used just DatePipe from Angular however we want to
    show TBD on instances a proper date is not provided, so it made
    sense to create the TimePipe. We can test input on the following
    negative boolean examples below:
    {
      if input is null: false
      if input is undefined: false
      if input is "" or '': false
      if input is "25" or bogus string, catch will provide default value
    }
    the creation of date will fail if undefined or an empty string
    is passed in, however if null is passed it the transform still
    can provide a bogus time which was caught by the unit tests.
  */
  transform(input: any): any {
    const format = 'hh:mm';
    const defaultValue = 'TBD';
    try {
      return (!input) ? defaultValue : this.datePipe.transform(new Date(input), format);
    } catch (err) {
      return defaultValue;
    }
  }

}
