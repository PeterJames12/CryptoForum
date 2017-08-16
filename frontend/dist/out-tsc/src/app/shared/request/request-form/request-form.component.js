var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild, EventEmitter, Output, Input } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { ModalComponent } from "ng2-bs3-modal/components/modal";
import { RequestService } from "../../../service/request.service";
import { AuthService } from "../../../service/auth.service";
import { ToastsManager } from "ng2-toastr";
import { UserService } from "../../../service/user.service";
import { DatePipe } from "@angular/common";
export var RequestFormComponent = (function () {
    function RequestFormComponent(formBuilder, userService, requestService, authService, toastr, datePipe) {
        this.formBuilder = formBuilder;
        this.userService = userService;
        this.requestService = requestService;
        this.authService = authService;
        this.toastr = toastr;
        this.datePipe = datePipe;
        this.updated = new EventEmitter();
    }
    RequestFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.requestForm = this.formBuilder.group({
            title: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(45)]],
            priorityStatus: [null, Validators.required],
            description: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(500)]]
        });
        this.authService.currentUser.subscribe(function (user) {
            _this.request = {
                reporter: user,
                assignee: _this.assignee,
                title: null,
                description: null,
                priorityStatus: null,
                estimateTimeInDays: null,
                dateOfCreation: null,
                lastChanger: user
            };
        });
        this.role = {
            name: ""
        };
        this.assignee = {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            role: this.role
        };
        this.progressStatus = {
            id: 5,
            name: "Free",
            value: 300
        };
        this.userService.getPriorityStatuses().subscribe(function (priorityStatuses) {
            _this.priorityStatuses = priorityStatuses;
        });
    };
    RequestFormComponent.prototype.closeModal = function () {
        this.requestForm.reset();
    };
    RequestFormComponent.prototype.validate = function (field) {
        return this.requestForm.get(field).valid || !this.requestForm.get(field).dirty;
    };
    RequestFormComponent.prototype.createNewRequest = function (params) {
        var _this = this;
        this.request.dateOfCreation = new Date();
        this.request.title = params.title;
        this.request.description = params.description;
        this.request.priorityStatus = params.priorityStatus;
        this.request.progressStatus = this.progressStatus;
        this.request.reporter.password = "";
        this.requestService.create(this.request).subscribe(function (resp) {
            _this.updateArray(resp.json());
            _this.modal.close();
            _this.toastr.success("Request was created successfully", "Success!");
        }, function (e) { return _this.handleErrorCreateRequest(e); });
    };
    RequestFormComponent.prototype.updateArray = function (request) {
        this.requests.unshift(request);
        this.updated.emit(this.requests);
    };
    RequestFormComponent.prototype.handleErrorCreateRequest = function (error) {
        switch (error.status) {
            case 500:
                this.toastr.error("Can't create request", 'Error');
        }
    };
    __decorate([
        Input(), 
        __metadata('design:type', Array)
    ], RequestFormComponent.prototype, "requests", void 0);
    __decorate([
        Output(), 
        __metadata('design:type', EventEmitter)
    ], RequestFormComponent.prototype, "updated", void 0);
    __decorate([
        ViewChild('requestFormModal'), 
        __metadata('design:type', ModalComponent)
    ], RequestFormComponent.prototype, "modal", void 0);
    RequestFormComponent = __decorate([
        Component({
            selector: 'request-form',
            templateUrl: 'request-form.component.html',
            styleUrls: ['request-form.component.css']
        }), 
        __metadata('design:paramtypes', [FormBuilder, UserService, Object, AuthService, ToastsManager, DatePipe])
    ], RequestFormComponent);
    return RequestFormComponent;
}());
//# sourceMappingURL=/Users/peterjames/workspace/Forum/frontend/src/src/app/shared/request/request-form/request-form.component.js.map