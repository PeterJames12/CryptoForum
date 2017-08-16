package logiston.auth.service.impl;

import logiston.auth.service.SecurityContextService;
import logiston.model.User;
import logiston.repositiry.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

/**
 * {@inheritDoc}.
 */
@Service("securityContextService")
@RequiredArgsConstructor
public class SecurityContextServiceImpl implements SecurityContextService {

    @Autowired
    private UserRepository userRepository;

    /**
     * {@inheritDoc}.
     */
    @Override
    public User currentUser() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        return userRepository.findByEmail(authentication.getName());
    }
}
