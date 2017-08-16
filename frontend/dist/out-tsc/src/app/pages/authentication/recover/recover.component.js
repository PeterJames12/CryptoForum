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
import { FormBuilder, Validators } from "@angular/forms";
import { ToastsManager } from "ng2-toastr";
import { CustomValidators } from "ng2-validation";
import { Router } from "@angular/router";
import { RecoverService } from "../../../service/recover.service";
export var RecoverComponent = (function () {
    function RecoverComponent(formBuilder, recoverService, toastr, router) {
        this.formBuilder = formBuilder;
        this.recoverService = recoverService;
        this.toastr = toastr;
        this.router = router;
    }
    RecoverComponent.prototype.ngOnInit = function () {
        this.recoverForm = this.formBuilder.group({
            email: ['', [Validators.required, CustomValidators.email]]
        });
    };
    RecoverComponent.prototype.recover = function (email) {
        var _this = this;
        this.recoverService.sendRecoverInfo(email)
            .subscribe(function () {
            _this.toastr.success("Please check your email inbox", "Success!");
            _this.router.navigate(['/authentication/login']);
        }, function (e) {
            _this.handleError(e);
        });
    };
    RecoverComponent.prototype.validateField = function (field) {
        return this.recoverForm.get(field).valid || !this.recoverForm.get(field).dirty;
    };
    RecoverComponent.prototype.handleError = function (error) {
        switch (error.status) {
            case 500:
                this.toastr.error("Email address is not found", "Error!");
        }
    };
    RecoverComponent = __decorate([
        Component({
            selector: 'forum-recover',
            templateUrl: 'recover.component.html'
        }), 
        __metadata('design:paramtypes', [FormBuilder, RecoverService, ToastsManager, Router])
    ], RecoverComponent);
    return RecoverComponent;
}());
//# sourceMappingURL=/Users/peterjames/workspace/Forum/frontend/src/src/app/pages/authentication/recover/recover.component.js.map