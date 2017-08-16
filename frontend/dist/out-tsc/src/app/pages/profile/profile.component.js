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
import { UserService } from "../../service/user.service";
import { AuthService } from "../../service/auth.service";
import { CacheService } from "ionic-cache";
export var ProfileComponent = (function () {
    function ProfileComponent(formBuilder, userService, authService, router, cach, toastr) {
        this.formBuilder = formBuilder;
        this.userService = userService;
        this.authService = authService;
        this.router = router;
        this.cach = cach;
        this.toastr = toastr;
        this.showPass = false;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.currentUser.subscribe(function (user) {
            _this.user = user;
        });
        this.initForm();
    };
    ProfileComponent.prototype.hasUpdate = function () {
        var _this = this;
        if (this.user.password == null) {
            this.toastr.error('Firstly enter ur password to update profile', 'Wrong');
            return;
        }
        this.authService.login(this.user.email, this.user.password).subscribe(function () {
            _this.update();
        }, function (e) { return _this.toastr.error('Wrong', 'Password is not correct'); });
    };
    ProfileComponent.prototype.update = function () {
        var _this = this;
        this.userService.update(this.user).subscribe(function () {
            _this.toastr.success('Your profile has been updated');
            _this.cach.clearAll();
        }, function (e) { return _this.toastr.error(" Can't update", 'Wrong'); });
    };
    ProfileComponent.prototype.updatePass = function (oldPass, newPass, confirmPass) {
        var _this = this;
        if (newPass != confirmPass) {
            this.toastr.error('New and confirm passwords do not match');
            return;
        }
        this.authService.login(this.user.email, oldPass).subscribe(function () {
            _this.user.password = newPass;
            _this.update();
        }, function (e) { return _this.toastr.warning('Old password is incorrect', 'Wrong'); });
    };
    ProfileComponent.prototype.validateField = function (field) {
        return this.profileForm.get(field).valid || !this.profileForm.get(field).dirty;
    };
    ProfileComponent.prototype.initForm = function () {
        this.profileForm = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            secondName: '',
            email: ['', [Validators.required, CustomValidators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]],
            dateOfBirth: ['', CustomValidators.dateISO],
            phoneNumber: ['',],
            oldPassword: ['', [Validators.required, Validators.minLength(6)]],
            newPassword: ['', [Validators.required, Validators.minLength(6)]],
            confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
        });
    };
    ProfileComponent.prototype.showPassword = function () {
        this.showPass = !this.showPass;
    };
    ProfileComponent = __decorate([
        Component({
            selector: 'overseer-profile',
            templateUrl: 'profile.component.html',
            styleUrls: ['profile.component.css']
        }), 
        __metadata('design:paramtypes', [FormBuilder, UserService, AuthService, Router, CacheService, ToastsManager])
    ], ProfileComponent);
    return ProfileComponent;
}());
//# sourceMappingURL=/Users/peterjames/workspace/Forum/frontend/src/src/app/pages/profile/profile.component.js.map