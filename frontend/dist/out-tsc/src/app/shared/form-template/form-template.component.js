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
export var FormTemplateComponent = (function () {
    function FormTemplateComponent() {
    }
    FormTemplateComponent = __decorate([
        Component({
            selector: 'form-template',
            template: "<div class=\"panel panel-default\">\n      <div class=\"panel-body\">\n        <ng-content select=\".template-body\"></ng-content>\n      </div>\n    </div>"
        }), 
        __metadata('design:paramtypes', [])
    ], FormTemplateComponent);
    return FormTemplateComponent;
}());
//# sourceMappingURL=/Users/peterjames/workspace/Forum/frontend/src/src/app/shared/form-template/form-template.component.js.map