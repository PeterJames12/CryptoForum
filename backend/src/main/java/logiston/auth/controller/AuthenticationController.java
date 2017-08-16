package logiston.auth.controller;

import logiston.auth.service.SecurityContextService;
import logiston.auth.service.TokenHandler;
import logiston.model.User;
import lombok.RequiredArgsConstructor;
import lombok.Value;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * REST authentication Controller.
 */
@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class AuthenticationController {
    private static final Logger LOG = LoggerFactory.getLogger(AuthenticationController.class);

    private final AuthenticationManager authenticationManager;
    private final TokenHandler tokenHandler;
    private final SecurityContextService securityContextService;

    /**
     * Perform {@link User} system authentication.
     *
     * @param params {@link AuthParams} user login and password.
     * @return {@link AuthResponse} that encapsulates the authentication token.
     * @throws AuthenticationException if Authentication failed.
     */
    @PostMapping("/auth")
    public AuthResponse login(@RequestBody AuthParams params) throws AuthenticationException {
        LOG.debug("Authenticating request for user: {}", params.email);
        UsernamePasswordAuthenticationToken loginToken = params.toAuthenticationToken();
        Authentication authentication = authenticationManager.authenticate(loginToken);
        SecurityContextHolder.getContext().setAuthentication(authentication);

        User user = securityContextService.currentUser();
        String token = tokenHandler.createTokenForUser(user);
        return new AuthResponse(token);
    }

    /**
     * Encapsulates user login and password.
     */
    @Value
    private static final class AuthParams {
        private final String email;
        private final String password;

        UsernamePasswordAuthenticationToken toAuthenticationToken() {
            return new UsernamePasswordAuthenticationToken(email, password);
        }
    }

    /**
     * Encapsulates the user authentication token.
     */
    @Value
    @SuppressWarnings("PMD.UnusedPrivateField")
    private static final class AuthResponse {
        private final String token;
    }
}