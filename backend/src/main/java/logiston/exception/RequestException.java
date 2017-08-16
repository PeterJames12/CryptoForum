package logiston.exception;

/**
 * @author Andre on July 2017.
 */
public class RequestException extends BaseException {

    private static final long serialVersionUID = -5324903659620508699L;

    public RequestException(int code, String description) {
        super(code, description);
    }
}
