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
export var ClosedRequest = (function () {
    function ClosedRequest(authService, employeeService) {
        this.authService = authService;
        this.employeeService = employeeService;
        this.loaded = false;
        this.selected = new Set();
        this.totalItems = 20;
        this.pageSize = 20;
        this.settings = {
            delete: false,
            add: false,
            info: true,
            multiSelect: true,
            filterRow: true,
            assign: false,
            join: false,
            reopen: true,
            close: false,
            ajax: false,
            columns: {
                title: true,
                estimate: true,
                dateOfCreation: true,
                priorityStatus: true,
                progressStatus: true,
                reporter: true,
                assignee: true,
            }
        };
    }
    ClosedRequest.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.currentUser.subscribe(function (u) {
            _this.currentUser = u;
            _this.employeeService.getClosedRequestsByReporter(u.id, 1, _this.pageSize).subscribe(function (requests) {
                _this.requests = requests;
                _this.employeeService.countClosedRequestsByReporter(u.id).subscribe(function (count) {
                    _this.totalItems = count;
                    _this.loaded = true;
                });
            });
        });
    };
    ClosedRequest.prototype.pageChange = function (data) {
        var _this = this;
        this.employeeService.getClosedRequestsByReporter(this.currentUser.id, data.page, this.pageSize).subscribe(function (requests) {
            _this.requests = requests;
        });
    };
    ClosedRequest.prototype.select = function (data) {
        this.selected = data;
    };
    ClosedRequest.prototype.reopen = function () {
        var _this = this;
        var sel = Array.from(this.selected);
        //console.log("trying reopen")
        this.employeeService.reopenRequests(sel).subscribe(function (success) {
            _this.requests = _this.requests.map(function (r) { return r; }).filter(function (r) { return !_this.selected.has(r.id); });
            _this.selected.clear();
        });
    };
    ClosedRequest.prototype.perChangeLoad = function (pageData) {
        var _this = this;
        this.pageSize = pageData.size;
        this.employeeService.getClosedRequestsByReporter(this.currentUser.id, pageData.page, pageData.size).subscribe(function (requests) {
            _this.requests = requests;
        });
    };
    ClosedRequest = __decorate([
        Component({
            selector: 'user-home',
            templateUrl: 'closed-request.component.html',
            styleUrls: ['closed-request.component.css']
        }), 
        __metadata('design:paramtypes', [Object, Object])
    ], ClosedRequest);
    return ClosedRequest;
}());
//# sourceMappingURL=/Users/peterjames/workspace/Forum/frontend/src/src/app/home/user/userClosedRequests/closed-request.component.js.map