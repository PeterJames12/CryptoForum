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
import { AuthHttp } from "angular2-jwt";
import { Http } from "@angular/http";
import { Observable } from "rxjs";
var url = '/api/overseer';
export var OverseerService = (function () {
    function OverseerService(http, authHttp) {
        this.http = http;
        this.authHttp = authHttp;
    }
    OverseerService.prototype.getOverseer = function () {
        return this.authHttp.get(url + "/getOverseer").map(function (resp) { return resp.json(); });
    };
    OverseerService.prototype.getOverseerBySearchEngine = function (engineType) {
        return this.authHttp.get((url + "/getOverseerBySearchEngine?engineType=") + engineType).map(function (resp) { return resp.json(); });
    };
    OverseerService.prototype.getOverseerBySearchPhrase = function (searchPhrase) {
        return this.authHttp.get((url + "/getOverseerBySearchEngine?engineType=") + searchPhrase)
            .map(function (resp) { return resp.json(); })
            .catch(function (error) {
            return Observable.throw(error);
        });
    };
    OverseerService.prototype.getOverseerByRunner = function (runner) {
        return this.authHttp.get((url + "/getOverseerBySearchEngine?engineType=") + runner)
            .map(function (resp) { return resp.json(); })
            .catch(function (error) {
            return Observable.throw(error);
        });
    };
    OverseerService.prototype.getOverseerByFrom = function (from) {
        return this.authHttp.get((url + "/getOverseerBySearchEngine?engineType=") + from)
            .map(function (resp) { return resp.json(); })
            .catch(function (error) {
            return Observable.throw(error);
        });
    };
    OverseerService = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [Http, AuthHttp])
    ], OverseerService);
    return OverseerService;
}());
//# sourceMappingURL=/Users/peterjames/workspace/Forum/frontend/src/src/app/service/overseer.service.js.map