package logiston.controller;

import logiston.model.Message;
import logiston.model.Topic;
import logiston.service.TopicService;
import lombok.RequiredArgsConstructor;
import lombok.val;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.Assert;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * @author Igor Hnes on 8/15/17.
 */
@RestController
@RequestMapping("/api/topics")
@RequiredArgsConstructor
public class TopicController {

    private final TopicService topicService;

    /**
     * Gets {@link Topic} entity associated with provided id param.
     *
     * @param id topic identifier.
     * @return {@link Topic} entity with http status 200 OK.
     */
    @GetMapping("/{id}")
    public ResponseEntity<Topic> findTopic(@PathVariable Long id) {
        val topic = topicService.findOne(id);
        return new ResponseEntity<>(topic, HttpStatus.OK);
    }

    /**
     * @return list topics.
     */
    @GetMapping("/getTopics")
    public ResponseEntity<List<Topic>> getTopics() {
        List<Topic> topics = topicService.getAll();
        System.out.println("topics");
        topics.forEach(s -> System.out.println(s.getTitle()));
        return new ResponseEntity<>(topics, HttpStatus.OK);
    }

    /**
     * Creates {@link Topic} entity.
     *
     * @param topic json object which represents {@link Topic} entity.
     * @return json representation of created {@link Topic} entity.
     */
    @PostMapping
    public ResponseEntity<Topic> createTopic(@RequestBody Topic topic) {
        val createdTopic = topicService.create(topic);
        return new ResponseEntity<>(createdTopic, HttpStatus.CREATED);
    }

    /**
     * Deletes {@link Topic} entity associated with provided id param.
     *
     * @param id topic identifier.
     * @return http status 204 NO_CONTENT.
     */
    @DeleteMapping("/{id}")
    public ResponseEntity deleteTopic(@PathVariable Long id) {
        topicService.delete(id);
        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }

    /**
     * Updates {@link Topic} entity.
     *
     * @param topic json object which represents {@link Topic} entity.
     * @return json representation of created {@link Topic} entity.
     */
    @PutMapping
    public ResponseEntity updateTopic(@RequestBody Topic topic) {
        val updatedTopic = topicService.update(topic);
        return new ResponseEntity<>(updatedTopic, HttpStatus.OK);
    }

    @PostMapping("/message")
    public ResponseEntity<Message> createTopicMessage(@RequestBody Message message) {
        Assert.notNull(message.getText(), "Message has to have text");
        val savedMessage = topicService.saveTopicMessage(message);
        return new ResponseEntity<>(savedMessage, HttpStatus.OK);
    }
}
