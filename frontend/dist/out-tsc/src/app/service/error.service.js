var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Response } from "@angular/http";
import { Router } from "@angular/router";
export var ErrorService = (function () {
    function ErrorService(router) {
        this.router = router;
        this.updateSubject = new BehaviorSubject('');
        this.update$ = this.updateSubject.asObservable();
    }
    ErrorService.prototype.updateError = function (error) {
        if (error instanceof Response) {
            var errorObject = error.json() || '';
            this.updateSubject.next(errorObject);
        }
    };
    ErrorService.prototype.processError = function (error) {
        this.updateError(error);
        this.router.navigate(['error']);
    };
    ErrorService = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [Router])
    ], ErrorService);
    return ErrorService;
}());
//# sourceMappingURL=/Users/peterjames/workspace/Forum/frontend/src/src/app/service/error.service.js.map