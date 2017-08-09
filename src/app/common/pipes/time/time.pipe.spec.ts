import { TestBed, inject } from '@angular/core/testing';
import { DatePipe } from '@angular/common';
import { TimePipe } from './time.pipe';

describe('TimePipe', () => {

  const objInput = {};
  const nullInput = null;
  const invalidStringInput = '32333KKKK';
  const undefinedInput = undefined;
  const validMorningInput = '08/02/2017 2:43:55 PM';
  const validAfternoonInput = '08/02/2017 2:43:55 PM';
  describe('initial load expectation', () => {

    beforeEach(() => {
      TestBed.configureTestingModule({
        providers: [TimePipe, DatePipe]
      });
    });

    it('should create an instance', inject([TimePipe], (pipe: TimePipe) => {
      expect(pipe).toBeTruthy();
    }));

    describe('transform', () => {

      it('should transform to TBD if date is an invalid string', inject([TimePipe], (pipe: TimePipe) => {
        expect(pipe.transform(invalidStringInput)).toEqual('TBD');
      }));

      it('should transform to TBD if date is null', inject([TimePipe], (pipe: TimePipe) => {
        expect(pipe.transform(nullInput)).toEqual('TBD');
      }));
      it('should transform to TBD if date a different object', inject([TimePipe], (pipe: TimePipe) => {
        expect(pipe.transform(objInput)).toEqual('TBD');
      }));

      it('should transform to TBD if date has not been defined', inject([TimePipe], (pipe: TimePipe) => {
        expect(pipe.transform(undefinedInput)).toEqual('TBD');
      }));

      // tslint:disable-next-line:max-line-length
      it('should transform to the time in 12 hour format when a valid afternoon datetime with string input', inject([TimePipe], (pipe: TimePipe) => {
        expect(pipe.transform(validAfternoonInput)).toEqual('02:43');
      }));

      // tslint:disable-next-line:max-line-length
      it('should transform to the time in 12 hour format when a valid afternoon datetime with date input', inject([TimePipe], (pipe: TimePipe) => {
        expect(pipe.transform(validAfternoonInput)).toEqual('02:43');
      }));
    });

  });

});
