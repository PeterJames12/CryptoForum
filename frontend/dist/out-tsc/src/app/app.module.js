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
import { HttpModule, RequestOptions, Http, JsonpModule } from "@angular/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ToastModule } from "ng2-toastr";
import { ChartsModule } from "ng2-charts";
import { Ng2FilterPipeModule } from "ng2-filter-pipe";
import { AppComponent } from "./app.component";
import { CacheService } from "ionic-cache";
import { AuthHttp, AuthConfig } from "angular2-jwt";
import { ComboBoxModule } from 'ng2-combobox';
import { Ng2GoogleChartsModule } from "ng2-google-charts";
import { RouterModule } from "@angular/router";
import { appRoutes } from "./app.routes";
import { NoContentComponent } from "./components/no-content/no-content.component";
import { AdminPageGuard } from "./service/quard/admin-page.guard";
import { PublicPageGuard } from "./service/quard/public-page.guard";
import { PrivatePageGuard } from "./service/quard/private-page.guard";
import { AuthService } from "./service/auth.service";
import { UserService } from "./service/user.service";
import { ErrorService } from "./service/error.service";
import { RecoverService } from "./service/recover.service";
export var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            declarations: [
                AppComponent,
                NoContentComponent,
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
                JsonpModule,
                ChartsModule,
                Ng2GoogleChartsModule,
                RouterModule.forRoot(appRoutes),
            ],
            providers: [
                CacheService,
                PrivatePageGuard,
                PublicPageGuard,
                AdminPageGuard,
                AuthService,
                UserService,
                ErrorService,
                RecoverService,
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
//# sourceMappingURL=/Users/peterjames/workspace/Forum/frontend/src/src/app/app.module.js.map