import {Component, ViewChild, Input, Output, EventEmitter} from "@angular/core";
import {ToastsManager} from "ng2-toastr";
import {ModalComponent} from "ng2-bs3-modal/components/modal";
import {Message} from "../../../../model/message.model";
import {TopicService} from "../../../../service/topic.service";

@Component({
  selector: 'delete-message',
  templateUrl: 'delete-message.component.html'
})
export class DeleteMessageComponent {

  @Input()
  comments: Message[];

  @Output()
  updated: EventEmitter<any> = new EventEmitter();

  public message: Message;

  @ViewChild('deleteMessageFormModal')
  modal: ModalComponent;

  constructor(private topicService: TopicService,
              private toastr: ToastsManager) {
  }

  deleteMessage() {
    this.topicService.delete(this.message.id).subscribe(() => {
      this.updateArray();
      this.modal.close();
      this.toastr.success("Message was deleted successfully", "Success!");
    }, e => this.handleErrorDeleteUser(e));
  }

  private updateArray(): void {
    this.updated.emit(this.comments.filter(r => r !== this.message));
  }

  private handleErrorDeleteUser(error) {
    switch (error.status) {
      case 500:
        this.toastr.error("Can't delete comment", 'Error');
    }
  }
}
