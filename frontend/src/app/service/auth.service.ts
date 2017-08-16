import {Injectable} from "@angular/core";
import {Response, Http} from "@angular/http";
import {Observable, Subject} from "rxjs";
import "rxjs/Rx";
import {tokenNotExpired, JwtHelper} from "angular2-jwt";
import {User} from "../model/user.model";
import {UserService} from "./user.service";

const url = '/api/auth';

@Injectable()
export class AuthService {
  private authEvents: Subject<AuthEvent>;
  private JwtHelper: JwtHelper = new JwtHelper();

  constructor(private http: Http,
              private userService: UserService) {
    this.authEvents = new Subject<AuthEvent>();
  }

  login(email: string, password: string): Observable<Response> {
    let authParams = {
      email: email,
      password: password
    };
    return this.http.post(url, authParams).do((resp: Response) => {
      localStorage.setItem('id_token', resp.json().token);
      this.authEvents.next(new DidLogin());
    });
  }

  get currentUser(): Observable<User> {
    let token = localStorage.getItem('id_token');
    let userId = +this.JwtHelper.decodeToken(token).id;

    return this.userService.get(userId)
      .map(user => {
        return user
      });
  }

  logout(): void {
    localStorage.removeItem('id_token');
    this.authEvents.next(new DidLogout());
  }

  isSignedIn(): boolean {
    return tokenNotExpired();
  }

  get role(): string {
    let token = localStorage.getItem('id_token');
    if (!!token) {
      return this.JwtHelper.decodeToken(token).role;
    }
    return 'unauthorized';
  }

  get events(): Observable<AuthEvent> {
    return this.authEvents;
  }
}

export class DidLogin {
}
export class DidLogout {
}

export type AuthEvent = DidLogin | DidLogout;
