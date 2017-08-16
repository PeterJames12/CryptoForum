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
import { CommonModule, DatePipe } from "@angular/common";
import { RequestFormComponent } from "./request-form/request-form.component";
import { Ng2Bs3ModalModule } from "ng2-bs3-modal/ng2-bs3-modal";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { InlineEditorModule } from 'ng2-inline-editor';
import { DateParseModule } from "../../util/date-parser/date-parse.module";
export var RequestModule = (function () {
    function RequestModule() {
    }
    RequestModule = __decorate([
        NgModule({
            imports: [
                DateParseModule,
                InlineEditorModule,
                CommonModule,
                ReactiveFormsModule,
                FormsModule,
                Ng2Bs3ModalModule,
            ],
            declarations: [
                RequestFormComponent,
            ],
            exports: [
                RequestFormComponent,
            ],
            providers: [
                DatePipe
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], RequestModule);
    return RequestModule;
}());
//# sourceMappingURL=/Users/peterjames/workspace/Forum/frontend/src/src/app/shared/request/request.module.js.map