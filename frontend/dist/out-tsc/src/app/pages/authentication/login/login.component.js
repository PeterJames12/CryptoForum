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
import { Router } from "@angular/router";
import { ToastsManager } from "ng2-toastr";
import { CustomValidators } from "ng2-validation";
import { AuthService } from "../../../service/auth.service";
export var LoginComponent = (function () {
    function LoginComponent(formBuilder, router, authService, toastr) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.authService = authService;
        this.toastr = toastr;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = this.formBuilder.group({
            email: ['', [Validators.required, CustomValidators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]]
        });
    };
    LoginComponent.prototype.login = function (formValues) {
        var _this = this;
        this.authService.login(formValues.email, formValues.password)
            .subscribe(function () {
            _this.toastr.success("Logged In successfully", "Success!");
            _this.router.navigate(['/home']);
        }, function (e) { return _this.handleError(e); });
    };
    LoginComponent.prototype.validateField = function (field) {
        return this.loginForm.get(field).valid || !this.loginForm.get(field).dirty;
    };
    LoginComponent.prototype.handleError = function (error) {
        switch (error.status) {
            case 409:
                this.toastr.error('Email or password is wrong.', "Error!");
            case 401:
                this.toastr.error('Email or password is wrong.', "Error!");
        }
    };
    LoginComponent = __decorate([
        Component({
            selector: 'forum-login',
            templateUrl: 'login.component.html'
        }), 
        __metadata('design:paramtypes', [FormBuilder, Router, AuthService, ToastsManager])
    ], LoginComponent);
    return LoginComponent;
}());
//# sourceMappingURL=/Users/peterjames/workspace/Forum/frontend/src/src/app/pages/authentication/login/login.component.js.map