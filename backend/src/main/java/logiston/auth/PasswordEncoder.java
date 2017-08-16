package logiston.auth;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Component;

/**
 * @author Andre on July 2017.
 */
@Component
public class PasswordEncoder extends BCryptPasswordEncoder {

    /**
     * @return is encode password.
     */
    public boolean isEncoded(final String password) {
        return password.startsWith("$2a$10");
    }
}
