var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from "@angular/core";
import { Md5 } from 'ts-md5/dist/md5';
export var GravatarComponent = (function () {
    function GravatarComponent() {
        this.email = "";
        this.size = 50;
        this.center = true;
    }
    GravatarComponent.prototype.ngOnInit = function () { };
    GravatarComponent.prototype.getImage = function () {
        return "https://s.gravatar.com/avatar/" + Md5.hashStr(this.email) + "?s=" + this.size;
    };
    __decorate([
        Input('email'), 
        __metadata('design:type', String)
    ], GravatarComponent.prototype, "email", void 0);
    __decorate([
        Input('size'), 
        __metadata('design:type', Number)
    ], GravatarComponent.prototype, "size", void 0);
    __decorate([
        Input('center'), 
        __metadata('design:type', Boolean)
    ], GravatarComponent.prototype, "center", void 0);
    GravatarComponent = __decorate([
        Component({
            selector: 'gravatar',
            templateUrl: 'gravatar.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], GravatarComponent);
    return GravatarComponent;
}());
//# sourceMappingURL=/Users/peterjames/workspace/Forum/frontend/src/src/app/shared/gravatar/gravatar.component.js.map