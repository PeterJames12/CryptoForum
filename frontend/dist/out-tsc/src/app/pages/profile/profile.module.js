var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { ProfileComponent } from "./profile.component";
import { GravatarModule } from "../../shared/gravatar/gravatar.module";
var routes = [
    { path: '', component: ProfileComponent },
];
export var ProfileModule = (function () {
    function ProfileModule() {
    }
    ProfileModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                RouterModule.forChild(routes),
                FormsModule,
                ReactiveFormsModule,
                GravatarModule,
            ],
            declarations: [
                ProfileComponent
            ],
            exports: [
                ProfileComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], ProfileModule);
    return ProfileModule;
}());
//# sourceMappingURL=/Users/peterjames/workspace/Forum/frontend/src/src/app/pages/profile/profile.module.js.map