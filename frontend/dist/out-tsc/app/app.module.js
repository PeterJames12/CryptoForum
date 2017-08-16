var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpModule, RequestOptions, Http } from "@angular/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ToastModule } from "ng2-toastr";
import { ChartsModule } from "ng2-charts";
import { ClientComponent } from "./pages/client/client.component";
import { Ng2FilterPipeModule } from "ng2-filter-pipe";
import { AppComponent } from "./app.component";
import { CacheService } from "ionic-cache";
import { MonitoringComponent } from "./pages/monitoring/monitoring.component";
import { MonitoringUrlService } from "./service/monitoring.url.service";
import { AuthHttp, AuthConfig } from "angular2-jwt";
import { ComboBoxModule } from fo;
export var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            declarations: [
                AppComponent,
                ClientComponent,
                MonitoringComponent,
            ],
            imports: [
                Ng2FilterPipeModule,
                ChartsModule,
                BrowserModule,
                FormsModule,
                ComboBoxModule,
                ReactiveFormsModule,
                HttpModule,
                ToastModule.forRoot(),
            ],
            providers: [
                CacheService,
                MonitoringUrlService,
                [{
                        provide: AuthHttp,
                        useFactory: authHttpServiceFactory,
                        deps: [Http, RequestOptions]
                    }]
            ],
            bootstrap: [AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
export function authHttpServiceFactory(http, options) {
    return new AuthHttp(new AuthConfig({
        noClientCheck: true }), http, options);
}
//# sourceMappingURL=/Users/peterjames/workspace/monitoring/frontend/src/app/app.module.js.map