import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {HttpModule, RequestOptions, Http, Jsonp, ConnectionBackend, JsonpModule} from "@angular/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ToastModule} from "ng2-toastr";
import {ChartsModule} from "ng2-charts";
import {Ng2FilterPipeModule} from "ng2-filter-pipe";
import {AppComponent} from "./app.component";
import {CacheService} from "ionic-cache";
import {AuthHttp, AuthConfig} from "angular2-jwt";
import {ComboBoxModule} from 'ng2-combobox';
import {Ng2GoogleChartsModule} from "ng2-google-charts";
import {RouterModule} from "@angular/router";
import {appRoutes} from "./app.routes";
import {NoContentComponent} from "./components/no-content/no-content.component";
import {AdminPageGuard} from "./service/quard/admin-page.guard";
import {PublicPageGuard} from "./service/quard/public-page.guard";
import {PrivatePageGuard} from "./service/quard/private-page.guard";
import {AuthService} from "./service/auth.service";
import {UserService} from "./service/user.service";
import {ErrorService} from "./service/error.service";
import {RecoverService} from "./service/recover.service";
import {CommentService} from "./service/coment.service";

@NgModule({
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
    CommentService,
    ErrorService,
    RecoverService,
    [{
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [Http, RequestOptions]
    }]
  ],
  bootstrap: [AppComponent]
})


export class AppModule {
}

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig({
    noClientCheck: true }), http, options);
}

