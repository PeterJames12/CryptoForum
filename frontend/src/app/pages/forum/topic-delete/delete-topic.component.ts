import {Component, ViewChild, Input, Output, EventEmitter} from "@angular/core";
import {ToastsManager} from "ng2-toastr";
import {ModalComponent} from "ng2-bs3-modal/components/modal";
import {Message} from "../../../../model/comment.model";
import {Topic} from "../../../model/topic.model";
import {TopicService} from "../../../service/topic.service";

@Component({
  selector: 'delete-topic',
  templateUrl: 'delete-topic.component.html'
})
export class DeleteTopicComponent {

  @Input()
  topics: Topic[];

  @Output()
  updated: EventEmitter<any> = new EventEmitter();

  public topic: Topic;

  @ViewChild('deleteTopicFormModal')
  modal: ModalComponent;

  constructor(private topicService: TopicService,
              private toastr: ToastsManager) {
  }

  deleteTopic() {
    this.topicService.delete(this.topic.id).subscribe(() => {
      this.updateArray();
      this.modal.close();
      this.toastr.success("Topic was deleted successfully", "Success!");
    }, e => this.handleErrorDeleteUser(e));
  }

  private updateArray(): void {
    this.updated.emit(this.topics.filter(r => r !== this.topic));
  }

  private handleErrorDeleteUser(error) {
    switch (error.status) {
      case 500:
        this.toastr.error("Can't delete topic", 'Error');
    }
  }
}
