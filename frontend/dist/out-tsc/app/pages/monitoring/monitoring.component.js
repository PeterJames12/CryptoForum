var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Injectable } from "@angular/core";
import { MonitoringUrlService } from "../../service/monitoring.url.service";
import { ToastsManager } from "ng2-toastr";
export var MonitoringComponent = (function () {
    function MonitoringComponent(monitoringService, toast) {
        this.monitoringService = monitoringService;
        this.toast = toast;
    }
    MonitoringComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.monitoringService.getMonitoring().subscribe(function (monitoring) {
            _this.monitoring = monitoring;
        });
    };
    MonitoringComponent.prototype.print = function () {
        var _this = this;
        this.monitoringService.getMonitoring().subscribe(function (monitoring) {
            _this.monitoring = monitoring;
            _this.toast.success(_this.monitoring[1].responseCode + ".ua");
            _this.toast.success(_this.monitoring[2].status + ".ua");
        });
    };
    MonitoringComponent.prototype.saveUrl = function (url, period, answer, waiting) {
        var _this = this;
        var value;
        value = url + " " + period + " " + answer + " " + waiting;
        this.monitoringService.creteUrl(value).subscribe(function (resp) {
            _this.toast.success("Url was created successfully", "Success!");
        }, function (e) { return _this.handleErrorCreateUser(e); });
    };
    MonitoringComponent.prototype.handleErrorCreateUser = function (e) {
        this.toast.error("Can't add url", 'Error');
    };
    MonitoringComponent = __decorate([
        Component({
            selector: 'monitoring_url',
            templateUrl: 'monitoring.component.html',
            styleUrls: ['monitoring.component.css']
        }),
        Injectable(), 
        __metadata('design:paramtypes', [MonitoringUrlService, ToastsManager])
    ], MonitoringComponent);
    return MonitoringComponent;
}());
//# sourceMappingURL=/Users/peterjames/workspace/monitoring/frontend/src/app/pages/monitoring/monitoring.component.js.map