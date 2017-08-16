package logiston.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * @author Igor Hnes on 8/14/17.
 */
@RestController
@RequestMapping("/api/comments")
@RequiredArgsConstructor
public class CommentsController {

    @Autowired
    private CommentService commentService;

    /**
     * Method for user, can create {@link Comment} entity with any role.
     *
     * @param comment json object which represents {@link Comment} entity.
     * @return json representation of created {@link Comment} entity.
     */
    @PostMapping("/sendComment")
    public ResponseEntity<Comment> createComment(@RequestBody Comment comment) {
        Comment createdComment = commentService.create(comment);
        return new ResponseEntity<>(createdComment, HttpStatus.CREATED);
    }

    /**
     * Updates {@link Comment} entity associated with provided id param.
     *
     * @param comment to update.
     * @return http status 201 CREATED.
     */

    @PutMapping("/{id}")
    public ResponseEntity<Comment> updateComment(@RequestBody Comment comment) {
        final Comment updatedComment = commentService.update(comment);
        return new ResponseEntity<>(updatedComment, HttpStatus.CREATED);
    }

    /**
     * Deletes {@link Comment} entity associated with provided id param.
     *
     * @param id user identifier.
     * @return http status 201 CREATED.
     */
    @DeleteMapping("/{id}")
    public ResponseEntity deleteComment(@PathVariable Long id) {
        commentService.delete(id);
        return new ResponseEntity(HttpStatus.CREATED);
    }

    /**
     * @return list of comments.
     */
    @GetMapping("/getComments")
    public ResponseEntity<List<Comment>> getComments() {
        List<Comment> comments = commentService.getAll();
        return new ResponseEntity<>(comments, HttpStatus.OK);
    }

    /**
     * @return {@link Comment} by given comment id.
     */
    @GetMapping("/getCommentById")
    public ResponseEntity getCommentById(@RequestParam Long commentId) {
        Comment comment = commentService.getById(commentId);
        return new ResponseEntity<>(comment, HttpStatus.OK);
    }
}

