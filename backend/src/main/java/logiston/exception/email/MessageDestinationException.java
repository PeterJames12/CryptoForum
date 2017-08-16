package logiston.exception.email;

/**
 * @author Igor Hnes on 8/12/17.
 */
public class MessageDestinationException extends RuntimeException {

    /**
     * Constructs a new exception with {@code null} as its detail message.
     */
    public MessageDestinationException() {
        super();
    }

    /**
     * Constructs a new exception with the specified detail message.
     *
     * @param message the detail message.
     */
    public MessageDestinationException(String message) {
        super(message);
    }
}
