import {Component, OnInit, Injectable} from "@angular/core";
import {ToastsManager} from "ng2-toastr";
import {CommentService} from "../../service/coment.service";
import {Comment} from "../../model/comment.model";


@Component({
    selector: 'comment',
    templateUrl: 'comment.component.html',
    styles: ['comment.component.css']
})
@Injectable()
export class CommentComponent implements OnInit {

    comment: Comment[];

    constructor(private toast: ToastsManager,
                private commentService: CommentService) {
    }

    ngOnInit(): void {
        // this.commentService.getComments().subscribe((s: Comment[]) => {
        //     this.comment = s;
        // })
    }

}