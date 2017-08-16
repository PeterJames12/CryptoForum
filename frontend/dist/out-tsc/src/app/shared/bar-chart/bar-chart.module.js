var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BarChartComponent } from "./bar-chart.component";
import { ChartsModule } from "ng2-charts";
export var BarChartModule = (function () {
    function BarChartModule() {
    }
    BarChartModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                ChartsModule
            ],
            declarations: [
                BarChartComponent
            ],
            exports: [
                BarChartComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], BarChartModule);
    return BarChartModule;
}());
//# sourceMappingURL=/Users/peterjames/workspace/Forum/frontend/src/src/app/shared/bar-chart/bar-chart.module.js.map