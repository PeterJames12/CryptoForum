package logiston.service;

import org.springframework.core.io.FileSystemResource;
import org.springframework.mail.SimpleMailMessage;

/**
 * @author Igor Hnes on 8/12/17.
 */
public interface EmailService {

    /**
     * Method just send a message.
     *
     * @param message contains text, subject, recipient or recipients.
     */
    void sendMessage(SimpleMailMessage message);

    /**
     * Method send message with some attachment.
     */
    void sendMessageWithAttachments(FileSystemResource file);
}
