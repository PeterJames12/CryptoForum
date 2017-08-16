package logiston.auth.service.impl;

import logiston.auth.UserAuthentication;
import logiston.auth.service.TokenAuthenticationService;
import logiston.auth.service.TokenHandler;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;

/**
 * {@inheritDoc}.
 */
@Service
@RequiredArgsConstructor
public class TokenAuthenticationServiceImpl implements TokenAuthenticationService {

    private final TokenHandler tokenHandler;
    private static final Integer TOKEN_PLACEMENT = 7;

    /**
     * {@inheritDoc}.
     */
    public Authentication getAuthentication(HttpServletRequest request) {
        String authHeader = request.getHeader("Authorization");
        if (authHeader == null || !authHeader.startsWith("Bearer")) {
            return null;
        }
        // authHeader example
        // Bearer 1u2jio12h802f12k
        String jwt = authHeader.substring(TOKEN_PLACEMENT);
        if (jwt.isEmpty()) {
            return null;
        }
        UserDetails userDetails = this.tokenHandler.parseUserFromToken(jwt);
        return new UserAuthentication(userDetails);
    }
}

