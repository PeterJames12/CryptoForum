package logiston.service;

import logiston.model.Message;
import logiston.model.Topic;

import java.util.List;

/**
 * @author Igor Hnes on 8/15/17.
 */
public interface TopicService {

    /**
     * @return list of topic.
     */
    List<Topic> getAll();

    /**
     * Find topic by id.
     */
    Topic findOne(Long id);

    /**
     * @param topic is going to be create in database.
     * @return created topic.
     */
    Topic create(Topic topic);

    /**
     * Delete topic by id.
     */
    void delete(Long id);

    /**
     * @param topic is going to be update in database.
     * @return updated topic.
     */
    Topic update(Topic topic);

    /**
     * @param message is going to be update in database.
     * @return created message.
     */
    Message saveTopicMessage(Message message);
}
