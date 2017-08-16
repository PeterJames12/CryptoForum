var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from "@angular/core";
import { AuthService } from "../../../../service/auth.service";
import { EmployeeService } from "../../../../service/employee.service";
export var ActiveRequest = (function () {
    function ActiveRequest(authService, employeeService) {
        this.authService = authService;
        this.employeeService = employeeService;
        this.loaded = false;
        this.per = 20;
        this.pageSize = 20;
        this.settings = {
            delete: true,
            add: true,
            info: true,
            multiSelect: false,
            filterRow: true,
            ajax: false,
            columns: {
                title: true,
                dateOfCreation: true,
                priorityStatus: true,
                progressStatus: true,
                reporter: false,
                assignee: true,
            }
        };
    }
    ActiveRequest.prototype.pageChange = function (data) {
        var _this = this;
        this.employeeService.getRequestsByReporter(this.currentUser.id, data.page, this.pageSize).subscribe(function (requests) {
            _this.requests = requests.filter(function (r) { return r.progressStatus.name != "Closed"; });
        });
    };
    ActiveRequest.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.currentUser.subscribe(function (u) {
            _this.currentUser = u;
            _this.employeeService.getRequestsByReporter(u.id, 1, _this.pageSize).subscribe(function (requests) {
                _this.requests = requests.filter(function (r) { return r.progressStatus.name != "Closed" && r.progressStatus.name != null; });
                _this.employeeService.countRequestsByReporter(u.id).subscribe(function (count) {
                    _this.totalItems = count;
                    _this.loaded = true;
                });
            });
        });
    };
    ActiveRequest.prototype.perChangeLoad = function (pageData) {
        var _this = this;
        this.pageSize = pageData.size;
        this.employeeService.getRequestsByReporter(this.currentUser.id, pageData.page, pageData.size).subscribe(function (requests) {
            _this.requests = requests.filter(function (r) { return r.progressStatus.name != "Closed"; });
        });
    };
    ActiveRequest = __decorate([
        Component({
            selector: 'user-home',
            templateUrl: 'active-request.component.html',
            styleUrls: ['active-request.component.css'],
        }), 
        __metadata('design:paramtypes', [Object, Object])
    ], ActiveRequest);
    return ActiveRequest;
}());
//# sourceMappingURL=/Users/peterjames/workspace/Forum/frontend/src/src/app/home/user/userRequests/active-request.component.js.map