package logiston.service.impl;

import logiston.model.Message;
import logiston.model.Topic;
import logiston.repositiry.MessageRepository;
import logiston.repositiry.TopicRepository;
import logiston.service.TopicService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @author Igor Hnes on 8/15/17.
 */
@Service
public class TopicServiceImpl implements TopicService {

    @Autowired
    private TopicRepository topicRepository;

    @Autowired
    private MessageRepository messageRepository;

    /**
     * {@inheritDoc}.
     */
    @Override
    public List<Topic> getAll() {
        return topicRepository.findAll();
    }

    /**
     * {@inheritDoc}.
     */
    @Override
    public Topic findOne(Long id) {
        return topicRepository.findOne(id);
    }

    /**
     * {@inheritDoc}.
     */
    @Override
    public Topic create(Topic topic) {
        return topicRepository.save(topic);
    }

    /**
     * {@inheritDoc}.
     */
    @Override
    public void delete(Long id) {
        topicRepository.delete(id);
    }

    /**
     * {@inheritDoc}.
     */
    @Override
    public Topic update(Topic topic) {
        return topicRepository.saveAndFlush(topic);
    }

    /**
     * {@inheritDoc}.
     */
    @Override
    public Message saveTopicMessage(Message message) {
        messageRepository.findAll(Example.of(message));
        return messageRepository.save(message);
    }
}
