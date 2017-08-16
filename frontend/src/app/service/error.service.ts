import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import {Response} from "@angular/http";
import {Router} from "@angular/router";

@Injectable()
export class ErrorService {

  constructor(private router: Router) {
  }

  private updateSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');

  update$: Observable<string> = this.updateSubject.asObservable();

  updateError(error: any) {
    if (error instanceof Response) {
      let errorObject = error.json() || '';
      this.updateSubject.next(errorObject);
    }
  }

  processError(error) {
    this.updateError(error);
    this.router.navigate(['error']);
  }
}
