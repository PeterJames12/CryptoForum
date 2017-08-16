package logiston.model;

import lombok.Data;

import javax.persistence.Entity;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.io.Serializable;
import java.time.LocalDateTime;

/**
 * @author Igor Hnes on 8/15/17.
 */
@Data
@Entity
public class Message extends AbstractEntity implements Serializable {

    private static final int MIN_MESSAGE_LENGTH = 2;
    private static final int MAX_MESSAGE_LENGTH = 500;

    @NotNull(message = "Message has to have a sender")
    private User sender;

    private Topic topic;

    @Size(min = MIN_MESSAGE_LENGTH, max = MAX_MESSAGE_LENGTH)
    @NotNull(message = "Message has to have a text")
    private String text;

    @NotNull(message = "Message has to have a time of creation")
    private LocalDateTime dateAndTime;
}
