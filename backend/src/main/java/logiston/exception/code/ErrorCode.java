package logiston.exception.code;

/**
 * @author Andre on July 2017.
 */
public class ErrorCode extends ExceptionCode {

    public static final int BAD_REQUEST_DATA = 40000;
    public static final int BAD_REQUEST_PARAMS = 40001;
    public static final int USER_EXISTS = 40300;

    public ErrorCode(int code) {
        super(ErrorCode.class.getDeclaredFields(), code);
        if (getCodeMessage() == null || getCodeMessage().equals("") || code == DEFAULT_CODE) {
            setCodeMessage("Internal server error!");
        }
    }
}
