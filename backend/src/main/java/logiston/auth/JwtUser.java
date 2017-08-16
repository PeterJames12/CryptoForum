package logiston.auth;

import com.fasterxml.jackson.annotation.JsonIgnore;
import logiston.model.User;
import lombok.Data;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

/**
 * Security based wrapper for {@link User} entity.
 */
@Data
@SuppressWarnings("PMD.UnusedPrivateField")
public class JwtUser implements UserDetails {
    private static final long serialVersionUID = 1L;

    private final User user;

    @JsonIgnore
    public Long getId() {
        return this.user.getId();
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        List<SimpleGrantedAuthority> authList = new ArrayList<>();
        switch (this.user.getRole().getName()) {
            case "admin":
                authList.add(new SimpleGrantedAuthority("ROLE_EMPLOYEE"));
                authList.add(new SimpleGrantedAuthority("ROLE_ADMIN"));
                break;
            default:
                authList.add(new SimpleGrantedAuthority("ROLE_EMPLOYEE"));
        }
        return authList;
    }

    @Override
    @JsonIgnore
    public String getPassword() {
        return this.user.getPassword();
    }

    @Override
    public String getUsername() {
        return this.user.getEmail();
    }

    @Override
    @JsonIgnore
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    @JsonIgnore
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    @JsonIgnore
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    @JsonIgnore
    public boolean isEnabled() {
        return true;
    }
}
