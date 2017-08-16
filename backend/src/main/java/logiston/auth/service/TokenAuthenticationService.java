package logiston.auth.service;

import org.springframework.security.core.Authentication;

import javax.servlet.http.HttpServletRequest;

/**
 * The <code>TokenAuthenticationService</code> obtains {@link Authentication} token
 * from an authentication request {@link HttpServletRequest}.
 */
public interface TokenAuthenticationService {

    /**
     * Returns the {@link Authentication} token according to the request
     * {@link HttpServletRequest} authorisation header.
     *
     * @param request client's request to the server.
     * @return {@link Authentication} token or {@literal null} if authorization header validation failed.
     */
    Authentication getAuthentication(HttpServletRequest request);
}
