package logiston.auth.service;

import logiston.model.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

/**
 * The <code>TokenHandler</code> service provides means for converting
 * {@link User} entity to and from JWT authorization token.
 */
@Component
public interface TokenHandler {

    /**
     * Creates {@link UserDetails} entity based on provided JWT token.
     *
     * @param token unique JWT based authorization token.
     * @return {@link UserDetails} entity associated with provided JWT token.
     */
    UserDetails parseUserFromToken(String token);

    /**
     * Creates JWT based authorization token for given {@link User} entity.
     *
     * @param user {@link User} entity.
     * @return JWT based token.
     */
    String createTokenForUser(User user);
}
