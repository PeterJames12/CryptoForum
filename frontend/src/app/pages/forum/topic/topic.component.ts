import {Component, OnInit, Input, Output, EventEmitter, ViewChild} from "@angular/core";
import {TopicService} from "../../../service/topic.service";
import {Topic} from "../../../model/topic.model";
import {ActivatedRoute} from "@angular/router";
import {FormGroup, Validators, FormBuilder} from "@angular/forms";
import {User} from "../../../model/user.model";
import {AuthService} from "../../../service/auth.service";
import {Response} from "@angular/http";
import {ToastsManager} from "ng2-toastr";
import {Message} from "../../../model/message.model";
import {DeleteMessageComponent} from "./message-delete/delete-mesage.component";


@Component({
  selector: 'topic-info',
  templateUrl: 'topic.component.html',
  styleUrls: ['topic.component.css']
})
export class TopicComponent implements OnInit {
  messageForm: FormGroup;
  topic: Topic;
  @Input()
  messages: Message[];
  @Output()
  updated: EventEmitter<any> = new EventEmitter();
  message: Message;
  currentUser: User;

  @ViewChild(DeleteMessageComponent)
  deleteMessageComponent: DeleteMessageComponent;

  constructor(private topicService: TopicService,
              private route: ActivatedRoute,
              private formBuilder: FormBuilder,
              private authService: AuthService,
              private toastr: ToastsManager) {
  }

  ngOnInit(): void {
    this.message = {
      sender: null,
      text: null,
      read: false,
      dateAndTime: null
    };

    this.authService.currentUser.subscribe((user: User) => {
      this.message.sender = user;
      this.currentUser = user;
    });

    this.messageForm = this.formBuilder.group({
      text: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(500)]]
    });

    this.route.params.subscribe(params => {
      let id = +params['id'];
      this.topicService.get(id).subscribe((topic: Topic) => {
        this.topic = topic;
      });
    });

    this.route.params.subscribe(params => {
      let id = +params['id'];
      this.topicService.getMessages(id).subscribe((messages: Message[]) => {
        //console.log(messages);
        this.messages = messages;
      });
    });
  }

  validate(field: string): boolean {
    return this.messageForm.get(field).valid || !this.messageForm.get(field).dirty;
  }

  createNewMessage(params) {
    this.message.text = params.text;
    this.message.dateAndTime = new Date();
    this.message.topic = this.topic;
    this.topicService.createMessage(this.message).subscribe((resp: Response) => {
      this.updateArray(<Message> resp.json());
      //console.log(resp.json());
      this.messageForm.reset();
      this.toastr.success("Message sended", "Success")
    }, e => this.handleErrorCreateMessage(e));
  }

  private updateArray(message: Message): void {
    this.messages.push(message);
    this.updated.emit(this.messages);
  }

  updateTopic(topic) {
    this.topicService.update(topic).subscribe(() => {
      this.toastr.success("Topic updated", "Success")
    });
  }

  private handleErrorCreateMessage(error) {
    switch (error.status) {
      case 500:
        this.toastr.error("Can't create comment", 'Error');
    }
  }

  openDeleteMessageModal(message: Message): void {
    this.deleteMessageComponent.message = message;
    this.deleteMessageComponent.modal.open();
  }

  updateMessages(messages: Message[]) {
    this.messages = messages;
  }
}
