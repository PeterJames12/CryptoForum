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
import { ToastsManager } from "ng2-toastr";
import { Router } from "@angular/router";
import { FormBuilder, Validators } from "@angular/forms";
import { CustomValidators } from "ng2-validation";
import { AuthService } from "../../../service/auth.service";
import { UserService } from "../../../service/user.service";
export var SignupComponent = (function () {
    function SignupComponent(formBuilder, userService, authService, router, toastr) {
        this.formBuilder = formBuilder;
        this.userService = userService;
        this.authService = authService;
        this.router = router;
        this.toastr = toastr;
    }
    SignupComponent.prototype.ngOnInit = function () {
        this.initForm();
    };
    SignupComponent.prototype.register = function (params) {
        var _this = this;
        params.role = {
            id: "12",
            name: "employee"
        };
        this.userService.create(params)
            .mergeMap(function () {
            return _this.authService.login(params.email, params.password);
        })
            .subscribe(function () {
            _this.toastr.success("Signed Up successfully", "Success!");
            _this.router.navigate(['/home']);
        }, function (e) { return _this.handleError(e); });
    };
    SignupComponent.prototype.validateField = function (field) {
        return this.registerForm.get(field).valid || !this.registerForm.get(field).dirty;
    };
    SignupComponent.prototype.initForm = function () {
        this.registerForm = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            secondName: '',
            email: ['', [Validators.required, CustomValidators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]],
            dateOfBirth: ['', CustomValidators.dateISO],
            phoneNumber: ['', CustomValidators.phone()]
        });
    };
    SignupComponent.prototype.handleError = function (error) {
        switch (error.status) {
            case 500:
                this.toastr.error('This email is already taken.', 'Error.');
        }
    };
    SignupComponent = __decorate([
        Component({
            selector: 'overseer-signup',
            templateUrl: 'signup.component.html'
        }), 
        __metadata('design:paramtypes', [FormBuilder, UserService, AuthService, Router, ToastsManager])
    ], SignupComponent);
    return SignupComponent;
}());
//# sourceMappingURL=/Users/peterjames/workspace/Forum/frontend/src/src/app/pages/authentication/signup/signup.component.js.map