package logiston.auth;

import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;

/**
 * The <code>UserAuthentication</code> represents the token for an authentication request.
 */
@RequiredArgsConstructor
public class UserAuthentication implements Authentication {
    private static final long serialVersionUID = 1L;

    private final UserDetails user;
    private boolean authenticated = true;

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return user.getAuthorities();
    }

    @Override
    public Object getCredentials() {
        return user.getPassword();
    }

    @Override
    public UserDetails getDetails() {
        return user;
    }

    @Override
    public Object getPrincipal() {
        return user.getUsername();
    }

    @Override
    public boolean isAuthenticated() {
        return authenticated;
    }

    @Override
    public void setAuthenticated(boolean authenticated) throws IllegalArgumentException {
        this.authenticated = authenticated;
    }

    @Override
    public String getName() {
        return user.getUsername();
    }

    @Override
    public String toString() {
        return "UserAuthentication{" + "user=" + user.toString() + ", authenticated=" + authenticated + '}';
    }
}
