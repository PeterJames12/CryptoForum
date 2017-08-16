var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Http } from "@angular/http";
import { AuthHttp } from "angular2-jwt";
var url = '/api/monitoring';
export var MonitoringUrlService = (function () {
    function MonitoringUrlService(http, authHttp) {
        this.http = http;
        this.authHttp = authHttp;
    }
    MonitoringUrlService.prototype.creteUrl = function (value) {
        return this.http.post(url, value)
            .catch(function (error) {
            return Observable.throw(error);
        });
    };
    MonitoringUrlService.prototype.delete = function (id) {
        return this.authHttp.delete(url + "/" + id)
            .catch(function (error) {
            return Observable.throw(error);
        });
    };
    MonitoringUrlService.prototype.getMonitoring = function () {
        return this.authHttp.get(url + "/getMonitoring").map(function (resp) { return resp.json(); });
    };
    MonitoringUrlService = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [Http, AuthHttp])
    ], MonitoringUrlService);
    return MonitoringUrlService;
}());
//# sourceMappingURL=/Users/peterjames/workspace/monitoring/frontend/src/app/service/monitoring.url.service.js.map