var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild, Input } from "@angular/core";
import { ReportService } from "../../service/report.service";
import { ToastsManager } from "ng2-toastr";
export var LineChartComponent = (function () {
    function LineChartComponent(reportService, toastr) {
        this.reportService = reportService;
        this.toastr = toastr;
        // public lineChartColors:Array<any> = [
        //   { // grey
        //     backgroundColor: 'rgba(148,159,177,0.2)',
        //     borderColor: 'rgba(148,159,177,1)',
        //     pointBackgroundColor: 'rgba(148,159,177,1)',
        //     pointBorderColor: '#fff',
        //     pointHoverBackgroundColor: '#fff',
        //     pointHoverBorderColor: 'rgba(148,159,177,0.8)'
        //   },
        //   { // dark grey
        //     backgroundColor: 'rgba(77,83,96,0.2)',
        //     borderColor: 'rgba(77,83,96,1)',
        //     pointBackgroundColor: 'rgba(77,83,96,1)',
        //     pointBorderColor: '#fff',
        //     pointHoverBackgroundColor: '#fff',
        //     pointHoverBorderColor: 'rgba(77,83,96,1)'
        //   },
        //   { // grey
        //     backgroundColor: 'rgba(148,159,177,0.2)',
        //     borderColor: 'rgba(148,159,177,1)',
        //     pointBackgroundColor: 'rgba(148,159,177,1)',
        //     pointBorderColor: '#fff',
        //     pointHoverBackgroundColor: '#fff',
        //     pointHoverBorderColor: 'rgba(148,159,177,0.8)'
        //   }
        // ];
        this.lineChartColors = [
            {
                backgroundColor: 'rgba(60, 214, 65,0.3)',
                borderColor: 'rgba(47,82,40,1)',
                pointBackgroundColor: 'rgba(91, 245, 96,1)',
                pointBorderColor: '#0b1f07',
                pointHoverBackgroundColor: '#2b9e15',
                pointHoverBorderColor: 'rgba(7,28,3,0.8)',
                pointBorderWidth: 2,
                pointRadius: 4
            },
            {
                backgroundColor: 'rgba(255, 93, 56,0.6)',
                borderColor: 'rgba(153, 15, 0,1)',
                pointBackgroundColor: 'rgba(255, 74, 54, 1)',
                pointBorderColor: '#630a00',
                pointHoverBackgroundColor: '#ff5a36',
                pointHoverBorderColor: 'rgba(209, 54, 19,0.8)',
                pointBorderWidth: 2,
                pointRadius: 4
            }
        ];
        this.lineChartLegend = true;
        this.lineChartType = 'line';
        this.lineChartData = [{ data: [], label: '' }, { data: [], label: '' }];
        this.lineChartLabels = [];
        this.lineChartOptions = {
            responsive: true
        };
        this.list = [];
    }
    LineChartComponent.prototype.ngOnInit = function () {
        this.buildAdminChart(this.startDate, this.endDate);
    };
    LineChartComponent.prototype.clear = function () {
        this.lineChartLabels.length = 0;
        this.lineChartData = [{ data: [], label: '' }, { data: [], label: '' }];
    };
    LineChartComponent.prototype.buildAdminChart = function (start, end) {
        var _this = this;
        var closedRequests = [];
        var freeRequests = [];
        this.clear();
        this.reportService.getAllStatisticsOfClosedRequestsByPeriod(start, end)
            .subscribe(function (array) {
            //console.log(array);
            array.forEach(function (requestDTO) {
                closedRequests.push(requestDTO.count);
                var firstDate = requestDTO.startDateLimit[0] + "-" + requestDTO.startDateLimit[1] + "-" + requestDTO.startDateLimit[2];
                var secondDate = requestDTO.endDateLimit[0] + "-" + requestDTO.endDateLimit[1] + "-" + requestDTO.endDateLimit[2];
                _this.lineChartLabels.push(firstDate.concat(" : " + secondDate));
            });
            _this.reportService.getAllStatisticsOfFreeRequestsByPeriod(start, end)
                .subscribe(function (array) {
                //console.log(array);
                array.forEach(function (requestDTO) {
                    freeRequests.push(requestDTO.count);
                });
                _this.lineChartData = [{ data: closedRequests, label: 'Count of closed requests' },
                    { data: freeRequests, label: 'Count of free requests' }];
            });
        });
    };
    // events
    LineChartComponent.prototype.chartClicked = function (e) {
        //console.log(e);
    };
    LineChartComponent.prototype.chartHovered = function (e) {
        //console.log(e);
    };
    __decorate([
        ViewChild(Date),
        Input('startDate'), 
        __metadata('design:type', Date)
    ], LineChartComponent.prototype, "startDate", void 0);
    __decorate([
        ViewChild(Date),
        Input('endDate'), 
        __metadata('design:type', Date)
    ], LineChartComponent.prototype, "endDate", void 0);
    LineChartComponent = __decorate([
        Component({
            selector: 'line-chart',
            templateUrl: 'line-chart.component.html'
        }), 
        __metadata('design:paramtypes', [Object, ToastsManager])
    ], LineChartComponent);
    return LineChartComponent;
}());
//# sourceMappingURL=/Users/peterjames/workspace/Forum/frontend/src/src/app/shared/line-chart/line-chart.component.js.map