package logiston.service;

import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.MimeMessageHelper;

import javax.mail.internet.MimeMessage;

/**
 * @param <T> entity type.
 *
 * @author Igor Hnes on 8/12/17.
 */
public interface EmailBuilder<T> {

    /**
     * Constructs {@link SimpleMailMessage} for provided entity.
     *
     * @param entity an entity to construct email for.
     * @return complete {@link SimpleMailMessage} email message.
     */
    SimpleMailMessage buildMessage(T entity);

    /**
     * @param entity an to construct email for.
     * @return complete {@link MimeMessageHelper} email message.
     */
    MimeMessageHelper buildMessageWithAttachment(T entity, MimeMessage mimeMessage);
}
