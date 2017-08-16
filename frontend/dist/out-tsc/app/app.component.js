var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewContainerRef } from "@angular/core";
import { ToastsManager } from "ng2-toastr";
import { CacheService } from "ionic-cache/ionic-cache";
export var AppComponent = (function () {
    function AppComponent(toastr, vRef, cache) {
        this.toastr = toastr;
        this.cache = cache;
        this.toastr.setRootViewContainerRef(vRef);
        this.cache.setDefaultTTL(60 * 60); //set default cache TTL for 1 hour
    }
    AppComponent = __decorate([
        Component({
            selector: 'app-root',
            templateUrl: 'app.component.html',
        }), 
        __metadata('design:paramtypes', [ToastsManager, ViewContainerRef, CacheService])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=/Users/peterjames/workspace/monitoring/frontend/src/app/app.component.js.map