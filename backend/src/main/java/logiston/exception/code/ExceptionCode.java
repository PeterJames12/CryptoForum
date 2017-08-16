package logiston.exception.code;

import lombok.Getter;
import lombok.Setter;

import java.lang.reflect.Field;

/**
 * @author Andre on July 2017.
 */
@Getter
@Setter
public class ExceptionCode {

    static final int DEFAULT_CODE = 50000;
    protected int code;
    private String codeMessage;

    public ExceptionCode(Field[] flds, int code) {
        this.code = code;

        Field field = null;

        for (Field fld : flds) {
            try {
                int codeForField = fld.getInt(0);
                if (codeForField == code) {
                    field = fld;
                    break;
                }
            } catch (IllegalArgumentException | IllegalAccessException e) {
                e.printStackTrace();
            }
        }

        if (field != null) {
            codeMessage = field.getName();
        }
    }

    public ExceptionCode(String codeMessage) {
        this.code = DEFAULT_CODE;
        this.codeMessage = codeMessage;
    }

    public int getCode() {
        return code;
    }

    public String getCodeMessage() {
        return codeMessage;
    }

    @Override
    public String toString() {
        return String.valueOf(code) + "_" + codeMessage;
    }
}
