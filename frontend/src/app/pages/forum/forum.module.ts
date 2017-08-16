import {RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule, FormsModule} from "@angular/forms";
import {forumRoutes} from "./forum.routes";
import {FormTemplateModule} from "../../shared/form-template/form-template.module";
import {Ng2Bs3ModalModule} from "ng2-bs3-modal/ng2-bs3-modal";
import {GravatarModule} from "../../shared/gravatar/gravatar.module";
import {DeleteTopicComponent} from "./topic-delete/delete-topic.component";
import {TopicService} from "../../service/topic.service";
import {InlineEditorModule} from "ng2-inline-editor";
import {PaginationModule} from "ng2-bootstrap";
import {ForumComponent} from "./forum.component";
import {TopicComponent} from "./topic/topic.component";
import {UserService} from "../../service/user.service";
import {AuthService} from "../../service/auth.service";
import {DateParseModule} from "../../util/date-parser/date-parse.module";
import {DeleteMessageComponent} from "./topic/message-delete/delete-mesage.component";

@NgModule({
  imports: [
    InlineEditorModule,
    GravatarModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FormTemplateModule,
    Ng2Bs3ModalModule,
    RouterModule.forChild(forumRoutes),
    PaginationModule.forRoot(),
    DateParseModule,
  ],
  declarations: [
    ForumComponent,
    TopicComponent,
    DeleteTopicComponent,
    DeleteMessageComponent
  ],
  providers: [
    UserService,
    AuthService,
    TopicService,

  ]
})
export class ForumModule {
}
