import {Injectable} from "@angular/core";
import {User} from "../model/user.model";
import {Observable} from "rxjs";
import {Http, Response} from "@angular/http";
import "rxjs/Rx";
import {AuthHttp} from "angular2-jwt";
import {CacheService} from "ionic-cache/ionic-cache";
import {ProgressStatus} from "../model/request.model";
import {ErrorService} from "./error.service";
import {PriorityStatus} from "../model/priority.model";

const url = '/api/users';

@Injectable()
export class UserService {
  constructor(private http: Http,
              private authHttp: AuthHttp,
              private cache: CacheService,
              private errorService: ErrorService) {
    this.cache = cache;
  }

  create(user: User): Observable<Response> {
    return this.http.post(url, user)
      .catch((error: any) => {
        this.errorService.processError(error);
        return Observable.throw(error);
      });
  }

  delete(id: number): Observable<Response> {
    return this.authHttp.delete(`${url}/${id}`)
      .catch((error: any) => {
        this.errorService.processError(error);
        return Observable.throw(error);
      });
  }

  update(user: User): Observable<Response> {
    return this.authHttp.put(`${url}/${user.id}`, user)
      .map(resp => resp.json())
      .catch((error: any) => {
        this.errorService.processError(error);
        return Observable.throw(error);
      });
  }

  get(id: number): Observable<User> {
    let path = `${url}/${id}`;
    let cacheKey = path;
    let request = this.authHttp.get(path)
      .map(res => res.json())
      .catch((error: any) => {
        this.errorService.processError(error);
        return Observable.throw(error);
      });

    return this.cache.loadFromObservable(cacheKey, request);
  }

  getAll(): Observable<User[]> {
    return this.authHttp.get(`${url}/getUsers`)
      .map(resp => resp.json()).publishReplay(1, 2000).refCount()
      .catch((error: any) => {
        this.errorService.processError(error);
        return Observable.throw(error);
      });
  }
}
