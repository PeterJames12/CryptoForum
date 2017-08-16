var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Injectable, Input, ViewChild } from "@angular/core";
import { ToastsManager } from "ng2-toastr";
import { RequestService } from "../../service/request.service";
import { ReportService } from "../../service/report.service";
import { AuthService } from "../../service/auth.service";
export var BarChartComponent = (function () {
    function BarChartComponent(requestService, reportService, authService, toastr) {
        this.requestService = requestService;
        this.reportService = reportService;
        this.authService = authService;
        this.toastr = toastr;
        this.barChartOptions = {
            scaleShowVerticalLines: false,
            responsive: true
        };
        this.barChartData = [{ data: [], label: '' }];
        this.barChartLabels = [];
        this.barChartType = 'bar';
        this.barChartLegend = true;
        this.list = [];
        this.barChartColors = [
            {
                backgroundColor: 'rgba(81, 147, 82, 0.7)',
                borderColor: 'rgba(47,82,40,1)'
            }
        ];
    }
    BarChartComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.currentUser.subscribe(function (user) {
            _this.currentUser = user;
            _this.buildChartsByRole(_this.startDate, _this.endDate, _this.countTopManagers);
        });
    };
    // events
    BarChartComponent.prototype.chartClicked = function (e) {
        //console.log(e);
    };
    BarChartComponent.prototype.chartHovered = function (e) {
        //console.log(e);
    };
    BarChartComponent.prototype.clear = function () {
        this.barChartLabels.length = 0;
        this.barChartData = [{ data: [], label: '' }];
    };
    BarChartComponent.prototype.buildAdminChart = function (start, end, countTopManagers) {
        var _this = this;
        var count = [];
        this.clear();
        this.reportService.getListOfBestManagersWithClosedStatusByPeriod(start, end, countTopManagers)
            .subscribe(function (array) {
            //console.log(array);
            array.forEach(function (manager) {
                count.push(manager.count);
                var name = manager.managerFirstName + " " + manager.managerLastName;
                _this.barChartLabels.push(name);
            });
            _this.barChartData = [{ data: count, label: 'Count of closed requests' }];
        });
    };
    BarChartComponent.prototype.buildManagerChart = function (start, end) {
        var _this = this;
        var closedRequests = [];
        this.clear();
        this.reportService.getManagerStatisticsOfClosedRequestsByPeriod(start, end, this.currentUser.id)
            .subscribe(function (array) {
            //console.log(array);
            array.forEach(function (requestDTO) {
                closedRequests.push(requestDTO.count);
                var firstDate = requestDTO.startDateLimit[0] + "-" + requestDTO.startDateLimit[1] + "-" + requestDTO.startDateLimit[2];
                var secondDate = requestDTO.endDateLimit[0] + "-" + requestDTO.endDateLimit[1] + "-" + requestDTO.endDateLimit[2];
                _this.barChartLabels.push(firstDate.concat(" : " + secondDate));
            });
            _this.barChartData = [{ data: closedRequests, label: 'Count your closed requests' }];
        });
    };
    BarChartComponent.prototype.isAdmin = function () {
        return this.currentUser.role.name === 'admin';
    };
    BarChartComponent.prototype.isManager = function () {
        return this.currentUser.role.name === 'office manager';
    };
    BarChartComponent.prototype.buildChartsByRole = function (start, end, countTopManagers) {
        if (this.isAdmin()) {
            this.buildAdminChart(start, end, countTopManagers);
        }
        else {
            this.buildManagerChart(start, end);
        }
    };
    __decorate([
        ViewChild(Date),
        Input('startDate'), 
        __metadata('design:type', Date)
    ], BarChartComponent.prototype, "startDate", void 0);
    __decorate([
        ViewChild(Date),
        Input('endDate'), 
        __metadata('design:type', Date)
    ], BarChartComponent.prototype, "endDate", void 0);
    __decorate([
        Input('countTopManagers'), 
        __metadata('design:type', Number)
    ], BarChartComponent.prototype, "countTopManagers", void 0);
    BarChartComponent = __decorate([
        Component({
            selector: 'bar-chart',
            templateUrl: 'bar-chart.component.html',
            inputs: ['list']
        }),
        Injectable(), 
        __metadata('design:paramtypes', [Object, Object, AuthService, ToastsManager])
    ], BarChartComponent);
    return BarChartComponent;
}());
//# sourceMappingURL=/Users/peterjames/workspace/Forum/frontend/src/src/app/shared/bar-chart/bar-chart.component.js.map