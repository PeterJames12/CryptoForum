package logiston.exception.email;

/**
 * @author Igor Hnes on 8/12/17.
 */
public class EmptyMessageException extends RuntimeException {

    /**
     * Constructs a new exception with {@code null} as its detail message.
     */
    public EmptyMessageException() {
        super();
    }

    /**
     * Constructs a new exception with the specified detail message.
     *
     * @param message the detail message.
     */
    public EmptyMessageException(String message) {
        super(message);
    }
}
