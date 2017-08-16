import {Component, OnInit, ViewChild, Input, Output, EventEmitter} from "@angular/core";
import {Topic} from "../../model/topic.model";
import {TopicService} from "../../service/topic.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ToastsManager} from "ng2-toastr";
import {Response} from "@angular/http";
import {ModalComponent} from "ng2-bs3-modal/components/modal";
import {User} from "../../model/user.model";
import {AuthService} from "../../service/auth.service";
import {RoleService} from "../../service/role.service";
import {Role} from "../../model/role.model";
import {DeleteTopicComponent} from "./topic-delete/delete-topic.component";

declare let $: any;

@Component({
  selector: 'forum-info',
  templateUrl: 'forum.component.html',
  styleUrls: ['forum.component.css']
})
export class ForumComponent implements OnInit {
  topicForm: FormGroup;
  @Input()
  topics: Topic[];
  @Output()
  updated: EventEmitter<any> = new EventEmitter();
  topic: Topic;
  pageNumber: number;
  currentUser: User;
  perPage: number = 20;
  curPage: number = 1;

  @ViewChild(DeleteTopicComponent)
  deleteTopicComponent: DeleteTopicComponent;

  @ViewChild('topicModal')
  modal: ModalComponent;

  ngOnInit(): void {
    this.authService.currentUser.subscribe((user: User) => {
      console.log(user)
      this.currentUser = user;
    });
    this.topic = {
      id: 1,
      title: 'dew',
      description: 'dew',
      roles: null
    };
    this.topicForm = this.formBuilder.group({
      title: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]],
      description: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(500)]],
      roles: ['', [Validators.required]]
    });
    this.topicService.getAll().subscribe((topics: Topic[]) => {
      this.topics = topics;
      console.log(topics)
    });
    // this.topicService.getPageCount().subscribe((count) => this.pageNumber = count);
  }

  constructor(private topicService: TopicService,
              private formBuilder: FormBuilder,
              private toastr: ToastsManager,
              private authService: AuthService) {
  }

  validate(field: string): boolean {
    return this.topicForm.get(field).valid || !this.topicForm.get(field).dirty;
  }

  createNewTopic(params) {
    this.topic.title = params.title;
    this.topic.description = params.description;
    let topicRoles: Role[] = [];
    if (params.roles[0]) {
      var role = <Role>{};
      role.name = params.roles[0];
      topicRoles.push(role);
    }
    if (params.roles[1]) {
      var role = <Role>{};
      role.name = params.roles[1];
      topicRoles.push(role);
    }
    if (params.roles[2]) {
      var role = <Role>{};
      role.name = params.roles[2];
      topicRoles.push(role);
    }
    this.topic.roles = topicRoles;
    //console.log(this.topic);
    this.topicService.create(this.topic).subscribe((resp: Response) => {
      this.toastr.success("Topic successfully created");
      this.updateArray(<Topic> resp.json());
      this.modal.close();
    }, e => this.handleErrorCreateTopic(e));
  }

  changeSize(size) {
    this.perPage = size;
    this.topicService.getAll().subscribe(topics => {
      this.topics = topics;
    })
  }

  changed(data) {
    this.curPage = data.page;
    this.topicService.getAll().subscribe(topics => {
      this.topics = topics;
    })
  }


  deleteTopic(id) {
    this.topicService.delete(id).subscribe((resp: Response) => {
      this.toastr.success("Topic " + this.topic.title + " created", "Success");
      this.updateArray(<Topic> resp.json());
      this.modal.close();
    }, e => this.handleErrorCreateTopic(e));
  }

  private updateArray(topic: Topic): void {
    this.topics.unshift(topic);
    this.updated.emit(this.topics);
  }

  private handleErrorCreateTopic(error) {
    switch (error.status) {
      case 500:
        this.toastr.error("Can't create topic. Topic with this title is already existed.", 'Error');
    }
  }

  createRange(number) {
    let items: number[] = [];
    for (let i = 2; i <= number; i++) {
      items.push(i);
    }
    return items;
  }

  load(data) {
    $('.paginate_button').removeClass('active');
    let page = data.target.text;
    $(data.target.parentElement).addClass('active');
    this.topicService.getAll().subscribe((topics: Topic[]) => {
      //console.log(topics);
      this.topics = topics;
    });
  }

  openDeleteTopicModal(topic: Topic): void {
    this.deleteTopicComponent.topic = topic;
    this.deleteTopicComponent.modal.open();
  }

  updateTopics(topics: Topic[]) {
    this.topics = topics;
  }
}
