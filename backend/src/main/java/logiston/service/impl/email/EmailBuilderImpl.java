package logiston.service.impl.email;

import logiston.model.AbstractEntity;
import logiston.service.EmailBuilder;
import lombok.val;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.util.Assert;

import javax.mail.internet.MimeMessage;

/**
 * @param <T> entity type.
 *
 * @author Igor Hnes on 8/12/17.
 */
public abstract class EmailBuilderImpl<T extends AbstractEntity> implements EmailBuilder<T> {

    @Value("${mail.from}")
    private String sender;

    /**
     * {@inheritDoc}.
     */
    @Override
    public SimpleMailMessage buildMessage(T entity) {
        Assert.notNull(entity, "entity must not be null");

        val message = this.buildProperties(entity);
        message.setSubject(this.getMessageSubject());
        message.setText(this.getMessageBody(entity));
        return message;
    }

    /**
     * {@inheritDoc}.
     */
    @Override
    public MimeMessageHelper buildMessageWithAttachment(T entity, MimeMessage mimeMessage) {
        return null;
    }

    private SimpleMailMessage buildProperties(T entity) {
        val simpleMailMessage = new SimpleMailMessage();
        simpleMailMessage.setTo(this.getMessageRecipient(entity));
        simpleMailMessage.setFrom(this.sender);
        return simpleMailMessage;
    }

    abstract String getMessageRecipient(T entity);

    abstract String getMessageBody(T entity);

    abstract String getMessageSubject();
}
