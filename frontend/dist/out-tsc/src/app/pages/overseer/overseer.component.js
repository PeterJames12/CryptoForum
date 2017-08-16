var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Injectable } from "@angular/core";
import { ToastsManager } from "ng2-toastr";
import { OverseerService } from "../../service/overseer.service";
import { Jsonp } from "@angular/http";
export var OverseerComponent = (function () {
    function OverseerComponent(overseerService, toast, jsonp) {
        this.overseerService = overseerService;
        this.toast = toast;
        this.jsonp = jsonp;
        this.url = "http://www.json-generator.com/api/json/get/bVTrAVzBQi?indent=2";
        this.fromKyiv = false;
        this.kyiv = 'Kyiv';
        this.lviv = 'Kyiv';
        this.google = 'Google';
        this.bing = 'Bing';
        this.chart = {
            chartType: 'LineChart',
            dataTable: [
                ['', '',
                    'facebook.com', 'youtube.com'],
                ['2017-07-22 20:12:44', 1, 2, 3],
                ['2017-07-23 20:12:44', 4, 3, 5],
                ['2017-07-24 20:12:44', 5, 2, 6],
                ['2017-07-25 20:12:44', 3, 5, 1],
            ],
            options: {
                title: 'SEO monitoring',
                legend: { position: 'bottom'
                },
                is3D: true,
                height: 550
            }
        };
    }
    OverseerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.overseerService.getOverseer().subscribe(function (overseer) {
            _this.overseer = overseer;
            _this.overseerTemplate = overseer;
            _this.configure();
        });
    };
    OverseerComponent.prototype.getFrom = function (city) {
        // this.overseerTemplate = null;
        var _this = this;
        // this.overseerTemplate = <Overseer[]>{};
        var over = {};
        over.searchPhrase = '';
        over.id = 0;
        over.searchEngine = '';
        over.totalQuery = 0;
        over.date = '';
        over.onPage = 0;
        over.runner = '';
        over.position = 0;
        over.webSite = '';
        over.from = '';
        this.overseerTemplate.push(over);
        var index;
        this.overseer.forEach(function (s) {
            if (city === s.from) {
                _this.overseerTemplate[index] = s;
                index = index + 1;
                _this.toast.success(_this.overseerTemplate[index].webSite);
            }
        });
    };
    OverseerComponent.prototype.getOverseerByEngine = function (engine) {
        var _this = this;
        this.overseerService.getOverseerBySearchEngine(engine).subscribe(function (overseer) {
            _this.overseer = overseer;
            _this.configure();
        });
    };
    OverseerComponent.prototype.getOverseerByPhrase = function (phrase) {
        var _this = this;
        this.overseerService.getOverseerBySearchPhrase(phrase).subscribe(function (overseer) {
            _this.overseer = overseer;
            _this.configure();
        });
    };
    OverseerComponent.prototype.getOverseerByRunner = function (runner) {
        var _this = this;
        this.overseerService.getOverseerByRunner(runner).subscribe(function (overseer) {
            _this.overseer = overseer;
            _this.configure();
        });
    };
    OverseerComponent.prototype.getOverseerByFrom = function (from) {
        var _this = this;
        this.overseerService.getOverseerByFrom(from).subscribe(function (overseer) {
            _this.overseer = overseer;
            _this.configure();
        });
    };
    OverseerComponent.prototype.printFrom = function () {
        this.fromKyiv = !this.fromKyiv;
        this.toast.success(" " + this.fromKyiv);
    };
    OverseerComponent.prototype.print = function () {
        this.toast.success('Hello');
        this.toast.success(this.overseer[0].runner
            + " "
            + this.overseer[0].date
            + " "
            + this.overseer[0].searchEngine
            + " "
            + this.overseer[0].webSite);
    };
    OverseerComponent.prototype.getData = function () {
        this.overseer[0].webSite = 'youtube.com';
        this.overseer[0].runner = 'runner';
        this.overseer[0].date = '2004';
        this.overseer[0].from = 'Kyiv';
        this.overseer[0].onPage = 1;
        this.overseer[0].searchEngine = 'Google';
        this.overseer[0].searchPhrase = 'Chocolate';
    };
    OverseerComponent.prototype.configure = function () {
        this.chart = {
            chartType: 'LineChart',
            dataTable: [
                ['', this.overseer[0].webSite,
                    'facebook.com', 'youtube.com'],
                [this.overseer[0].date, this.overseer[0].position, this.overseer[0].onPage, 7],
                ['2017-07-23 20:12:44', this.overseer[0].position, 3, 5],
                ['2017-07-24 20:12:44', 5, 2, 6],
                ['2017-07-25 20:12:44', 3, 5, 1],
            ],
            options: {
                title: 'SEO monitoring',
                legend: { position: 'bottom'
                },
                is3D: true,
                height: 550
            }
        };
    };
    OverseerComponent = __decorate([
        Component({
            selector: 'overseer',
            templateUrl: 'overseer.component.html',
            styleUrls: ['overseer.component.css']
        }),
        Injectable(), 
        __metadata('design:paramtypes', [OverseerService, ToastsManager, Jsonp])
    ], OverseerComponent);
    return OverseerComponent;
}());
//# sourceMappingURL=/Users/peterjames/workspace/Forum/frontend/src/src/app/pages/overseer/overseer.component.js.map