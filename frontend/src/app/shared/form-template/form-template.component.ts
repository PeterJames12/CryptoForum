import {Component} from "@angular/core";

@Component({
  selector: 'form-template',
  template:
    `<div class="panel panel-default">
      <div class="panel-body">
        <ng-content select=".template-body"></ng-content>
      </div>
    </div>`
})
export class FormTemplateComponent {
}
