import {Routes} from "@angular/router";
import {ForumComponent} from "./forum.component";
import {TopicComponent} from "./topic/topic.component";

export const forumRoutes: Routes = [
  {
    path: '',
    component: ForumComponent
  },
  {
    path: 'topic/:id',
    component: TopicComponent
  },
];
