import {Response, Http} from "@angular/http";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {ErrorService} from "./error.service";

@Injectable()
export class RecoverService {
  constructor(private http: Http,
              private errorService: ErrorService) {
  }

  sendRecoverInfo(email: string): Observable<Response> {
    return this.http.post('/api/users/changePassword', email)
      .catch((error: any) => {
        this.errorService.processError(error);
        return Observable.throw(error);
      });
  }
}
