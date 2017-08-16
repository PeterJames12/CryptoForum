import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {AuthHttp} from "angular2-jwt";
import {CacheService} from "ionic-cache";
import {ErrorService} from "./error.service";
import {Observable} from "rxjs";
import {Comment} from "../model/comment.model";

const url = 'api/comments';

@Injectable()
export class CommentService {

    constructor(private http: Http,
                private authHttp: AuthHttp,
                private cache: CacheService,
                private errorService: ErrorService) {
        this.cache = cache;
    }

    create(comment: Comment): Observable<Response> {
        return this.authHttp.post(`${url}/sendComment`, comment);
    }

    update(comment: Comment): Observable<Response> {
        return this.authHttp.put(`${url}/${comment.id}`, comment)
            .map(resp => resp.json())
            .catch((error: any) => {
                this.errorService.processError(error);
                return Observable.throw(error);
            });
    }

    delete(id: number): Observable<Response> {
        return this.authHttp.delete(`${url}/comments/${id}`);
    }

    getComments(): Observable<Comment[]> {
        return this.authHttp.get(`${url}/getComments`).map(resp => resp.json());
    }

    getCommentById(id:number): Observable<Comment[]> {
        return this.authHttp.get(`${url}/getCommentById/${id}`).map(resp => resp.json());
    }

}