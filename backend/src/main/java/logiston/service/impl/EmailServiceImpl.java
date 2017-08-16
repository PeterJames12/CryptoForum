package logiston.service.impl;


import logiston.exception.email.EmptyMessageException;
import logiston.exception.email.MessageDestinationException;
import logiston.service.EmailService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.core.io.FileSystemResource;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * @author Igor Hnes on 8/12/17.
 */
@Service
@Transactional
@Slf4j
@RequiredArgsConstructor
public class EmailServiceImpl implements EmailService {

    private final JavaMailSender javaMailSender;

    /**
     * {@inheritDoc}.
     */
    @Override
    @Async
    public void sendMessage(SimpleMailMessage message) {
        if ("".equals(message.getText())) {
            throw new EmptyMessageException("Supplied message contained no text " + message);
        }
        if (message.getTo() == null) {
            throw new MessageDestinationException("Supplied message contained no destination " + message);
        }
        try {
            this.javaMailSender.send(message);
        } catch (Exception e) {
            // NON
        }
    }

    /**
     * {@inheritDoc}.
     */
    @Override
    public void sendMessageWithAttachments(FileSystemResource file) {
        throw new UnsupportedOperationException();
    }
}
