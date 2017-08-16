var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Http } from "@angular/http";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { ErrorService } from "./error.service";
export var RecoverService = (function () {
    function RecoverService(http, errorService) {
        this.http = http;
        this.errorService = errorService;
    }
    RecoverService.prototype.sendRecoverInfo = function (email) {
        var _this = this;
        return this.http.post('/api/users/changePassword', email)
            .catch(function (error) {
            _this.errorService.processError(error);
            return Observable.throw(error);
        });
    };
    RecoverService = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [Http, ErrorService])
    ], RecoverService);
    return RecoverService;
}());
//# sourceMappingURL=/Users/peterjames/workspace/Forum/frontend/src/src/app/service/recover.service.js.map