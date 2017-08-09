
import { Injectable, Inject } from '@angular/core';
import { AndroidService } from '../services/android/android.service';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class CloseTaskService {

  constructor(private http: Http, private androidService: AndroidService) {

  }


   closeTask(closeTaskRequest: any): Promise<any> {
      return this.http.put(this.androidService.getService() + '/TaskWebService/CloseTaskActivity', closeTaskRequest)
            .toPromise()
            .then(this.responseData)
            .catch(this.handleError);
   }

   private responseData(res: Response) {
        const body = res.json();
        return body || {};
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

}


