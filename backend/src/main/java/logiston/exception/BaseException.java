package logiston.exception;


import logiston.exception.code.ErrorCode;
import logiston.exception.code.ExceptionCode;

/**
 * @author Andre on July 2017.
 */
public class BaseException extends RuntimeException {

    private static final long serialVersionUID = 2180976082364154665L;

    public BaseException(int code, String description) {
        super(description);
        this.code = new ErrorCode(code);
    }

    protected ExceptionCode code;

    public ExceptionCode getCode() {
        return code;
    }
}
